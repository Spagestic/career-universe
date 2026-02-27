"use client";

import React, { useEffect, useRef } from "react";
import type { HierarchyCircularNode } from "d3-hierarchy";
import type { TreeNode } from "@/data/careers";
import { getDomainColor } from "@/lib/utils";

interface CareerMapProps {
  root: HierarchyCircularNode<TreeNode>;
  focus: HierarchyCircularNode<TreeNode>;
  // Updated signature to support React state callback: setFocus((prev) => ...)
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

  // Track which node the user is currently hovering over for scroll-zooming
  const hoveredRef = useRef<HierarchyCircularNode<TreeNode> | null>(null);
  const wheelTimeout = useRef<NodeJS.Timeout | null>(null);

  // Zoom transform: center and scale the focused node to fill the view
  const k = size / (focus.r * 2);
  const tx = size / 2 - focus.x * k;
  const ty = size / 2 - focus.y * k;

  // Set up the Mouse Wheel (Scroll) Event Listener
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault(); // Stop the whole page from scrolling

      // Throttle the scroll events to allow the CSS transition to play smoothly
      if (wheelTimeout.current) return;
      wheelTimeout.current = setTimeout(() => {
        wheelTimeout.current = null;
      }, 350); // 350ms cooldown between zoom steps

      if (e.deltaY > 0) {
        // Scrolled DOWN -> Zoom OUT to parent
        setFocus((prev) => prev.parent ?? prev);
      } else if (e.deltaY < 0) {
        // Scrolled UP -> Zoom IN to hovered child
        const hovered = hoveredRef.current;
        if (hovered) {
          setFocus((prev) => {
            // Find the ancestor of the hovered node that is a DIRECT child of the current focus
            let target = hovered;
            while (target && target.parent !== prev && target !== prev) {
              target = target.parent as HierarchyCircularNode<TreeNode>;
            }

            // Only zoom in if it's a valid child and it has sub-children (ignore leaves)
            if (
              target &&
              target !== prev &&
              target.parent === prev &&
              target.children
            ) {
              return target;
            }
            return prev;
          });
        }
      }
    };

    // { passive: false } is required so e.preventDefault() works to stop page scrolling
    svg.addEventListener("wheel", onWheel, { passive: false });
    return () => svg.removeEventListener("wheel", onWheel);
  }, [setFocus]);

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${size} ${size}`}
      style={{ flex: 1, width: "100%", cursor: "pointer" }}
      onClick={() => setFocus((prev) => prev.parent ?? root)}
    >
      <style>{`
        .node-group:hover > circle {
          filter: brightness(1.3);
        }
      `}</style>

      <g
        style={{
          transform: `translate(${tx}px, ${ty}px) scale(${k})`,
          transition: "transform 0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          transformOrigin: "0 0",
        }}
      >
        {root.descendants().map((node, i) => {
          const color = getDomainColor(node);
          const isLeaf = !node.children;
          const depth = node.depth;
          const apparentR = node.r * k;

          // Only show labels if the node is an immediate child of our current focus.
          const isChildOfFocus = node.parent === focus;
          const shouldRenderText = apparentR > 10;

          // Font size in SVG coords (divided by k so apparent size stays constant)
          const fontSize = isLeaf
            ? Math.min(node.r * 0.35, 12 / k)
            : Math.min(node.r * 0.25, 15 / k);

          const fillOpacity =
            depth === 0
              ? 0
              : isLeaf
                ? 0.25
                : ([0, 0.06, 0.08, 0.12, 0.15][depth] ?? 0.1);

          return (
            <g
              key={i}
              className="node-group"
              // Keep track of exactly what the cursor is touching
              onPointerMove={(e) => {
                e.stopPropagation();
                hoveredRef.current = node;
              }}
              onClick={(e) => {
                e.stopPropagation();
                if (node === focus) {
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
                fill={`${color}${Math.round(fillOpacity * 255)
                  .toString(16)
                  .padStart(2, "0")}`}
                stroke={depth === 0 ? "none" : color}
                strokeWidth={Math.max(0.5, (2.5 - depth * 0.4) / k)}
                strokeOpacity={depth === 0 ? 0 : 0.5}
                style={{ transition: "filter 0.2s" }}
              />

              {shouldRenderText && (
                <text
                  x={node.x}
                  y={node.y} // CHANGED: All text uses exact center Y coordinate
                  textAnchor="middle"
                  dominantBaseline="central" // CHANGED: Centers text vertically
                  fill="white"
                  fontSize={fontSize}
                  fontWeight={depth <= 1 ? 700 : isLeaf ? 400 : 600}
                  style={{
                    opacity: isChildOfFocus ? 0.9 : 0,
                    transition: "opacity 0.4s ease-in-out",
                    pointerEvents: "none",
                    fontFamily: "inherit",
                    // ADDED: Text shadow ensures readability when overlapping inner circles
                    textShadow:
                      "0px 1px 4px rgba(0,0,0,0.8), 0px 0px 8px rgba(0,0,0,0.4)",
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
