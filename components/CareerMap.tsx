// components/CareerMap.tsx
"use client";

import React, { useEffect, useRef } from "react";
import type { HierarchyCircularNode } from "d3-hierarchy";
import { type TreeNode } from "@/data";

interface CareerMapProps {
  root: HierarchyCircularNode<TreeNode>;
  focus: HierarchyCircularNode<TreeNode>;
  setFocus: React.Dispatch<
    React.SetStateAction<HierarchyCircularNode<TreeNode>>
  >;
  size: number;
}

export default function CareerMap({
  root,
  focus,
  setFocus,
  size,
}: CareerMapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const hoveredRef = useRef<HierarchyCircularNode<TreeNode> | null>(null);
  const lastWheelTime = useRef<number>(0);

  // Calculate zoom scale and translations
  const k = size / (focus.r * 2);
  const tx = size / 2 - focus.x * k;
  const ty = size / 2 - focus.y * k;

  // Handle Wheel Zooming (Trackpad / Mouse wheel)
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();

      const now = Date.now();
      // Throttle wheel events to 400ms to match the CSS transition duration roughly
      // and prevent chaotic multi-level jumping.
      if (now - lastWheelTime.current < 400) return;
      lastWheelTime.current = now;

      if (e.deltaY > 0) {
        // Zoom out
        setFocus((prev) => prev.parent ?? prev);
      } else if (e.deltaY < 0) {
        // Zoom in to hovered node
        const hovered = hoveredRef.current;
        if (hovered && hovered !== focus) {
          setFocus((prev) => {
            // Find the immediate child of the current focus that contains the hovered node
            let target = hovered;
            while (target && target.parent !== prev && target !== prev) {
              target = target.parent as HierarchyCircularNode<TreeNode>;
            }
            return target && target.children ? target : prev;
          });
        }
      }
    };

    svg.addEventListener("wheel", onWheel, { passive: false });
    return () => svg.removeEventListener("wheel", onWheel);
  }, [setFocus, focus]);

  // Optimization: Filter out nodes that are too deep to be seen.
  // We only render the current focus, its parent (for context), its children, and grandchildren.
  const visibleNodes = root.descendants().filter((node) => {
    return node.depth <= focus.depth + 2 && node.depth >= focus.depth - 1;
  });

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${size} ${size}`}
      className="flex-1 w-full h-full cursor-pointer touch-none"
      onClick={() => setFocus((prev) => prev.parent ?? root)}
      // Clear hover state when mouse leaves SVG to prevent errant scroll-zooms
      onPointerLeave={() => {
        hoveredRef.current = null;
      }}
    >
      <style>{`
        .node-group > circle {
          transition: fill-opacity 0.2s, stroke-opacity 0.2s;
        }
        .node-group:hover > circle {
          fill-opacity: var(--hover-fill) !important;
          stroke-opacity: var(--hover-stroke) !important;
        }
      `}</style>

      <g
        style={{
          transform: `translate(${tx}px, ${ty}px) scale(${k})`,
          transition: "transform 0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          transformOrigin: "0 0",
          willChange: "transform", // Hardware acceleration for smooth zoom
        }}
      >
        {visibleNodes.map((node) => {
          const isLeaf = !node.children;
          const depth = node.depth;

          // Determine relationship to focal point
          const isFocus = node === focus;
          const isChildOfFocus = node.parent === focus;

          // Only render text for the focused node and its immediate children
          const shouldRenderText = isFocus || isChildOfFocus;

          // Dynamic text sizing based on node radius
          const fontSize = isLeaf
            ? Math.min(node.r * 0.35, 12 / k)
            : Math.min(node.r * 0.25, 15 / k);

          // strict Black/White theming relying on --foreground
          const fillOpacity = depth === 0 ? 0 : isLeaf ? 0.08 : 0.04;
          const strokeOpacity = depth === 0 ? 0 : 0.15;

          // Unique ID for React key (Fallback to name if ID doesn't exist)
          const uniqueKey = `${depth}-${node.data.name}-${node.x}`;

          return (
            <g
              key={uniqueKey}
              className="node-group"
              onPointerMove={(e) => {
                e.stopPropagation();
                hoveredRef.current = node;
              }}
              onPointerLeave={(e) => {
                e.stopPropagation();
                // When leaving this node, fallback to its parent
                hoveredRef.current =
                  node.parent as HierarchyCircularNode<TreeNode>;
              }}
              onClick={(e) => {
                e.stopPropagation();
                if (isFocus) {
                  setFocus((prev) => prev.parent ?? root);
                } else if (node.children) {
                  setFocus(node);
                }
              }}
              style={{ cursor: node.children ? "pointer" : "default" }}
            >
              <circle
                cx={node.x}
                cy={node.y}
                r={node.r}
                fill="var(--foreground)"
                stroke="var(--foreground)"
                // Stroke scales inversely with zoom (k) so borders don't get massive
                strokeWidth={Math.max(0.5, (2.5 - depth * 0.4) / k)}
                style={
                  {
                    fillOpacity: fillOpacity,
                    strokeOpacity: strokeOpacity,
                    "--hover-fill": fillOpacity + 0.05,
                    "--hover-stroke": strokeOpacity + 0.3,
                  } as React.CSSProperties
                }
              />

              {shouldRenderText && (
                <text
                  x={node.x}
                  y={node.y}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill="var(--foreground)"
                  fontSize={fontSize}
                  fontWeight={isFocus ? 700 : isLeaf ? 400 : 600}
                  style={{
                    opacity: isFocus ? 0.2 : 1, // Focus text is large and in background, children are solid
                    transition: "opacity 0.4s ease-in-out",
                    pointerEvents: "none", // Ensures mouse events only hit the circle
                    fontFamily: "inherit",
                    userSelect: "none",
                  }}
                >
                  {node.data.name}
                </text>
              )}
            </g>
          );
        })}
      </g>
    </svg>
  );
}
