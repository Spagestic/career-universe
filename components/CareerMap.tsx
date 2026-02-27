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
  const wheelTimeout = useRef<NodeJS.Timeout | null>(null);

  const k = size / (focus.r * 2);
  const tx = size / 2 - focus.x * k;
  const ty = size / 2 - focus.y * k;

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (wheelTimeout.current) return;
      wheelTimeout.current = setTimeout(() => {
        wheelTimeout.current = null;
      }, 350);

      if (e.deltaY > 0) {
        setFocus((prev) => prev.parent ?? prev);
      } else if (e.deltaY < 0) {
        const hovered = hoveredRef.current;
        if (hovered) {
          setFocus((prev) => {
            let target = hovered;
            while (target && target.parent !== prev && target !== prev) {
              target = target.parent as HierarchyCircularNode<TreeNode>;
            }
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
        /* 
         Hover effect: Instead of 'brightness' (which acts weird between light/dark),
         we dynamically increase opacity variables defined in the inline styles below 
        */
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
        }}
      >
        {root.descendants().map((node, i) => {
          const isLeaf = !node.children;
          const depth = node.depth;
          const apparentR = node.r * k;

          const isChildOfFocus = node.parent === focus;
          const shouldRenderText = apparentR > 10;

          const fontSize = isLeaf
            ? Math.min(node.r * 0.35, 12 / k)
            : Math.min(node.r * 0.25, 15 / k);

          const fillOpacity =
            depth === 0
              ? 0
              : isLeaf
                ? 0.08
                : ([0, 0.02, 0.04, 0.06, 0.08][depth] ?? 0.05);
          const strokeOpacity = depth === 0 ? 0 : 0.15;

          return (
            <g
              key={i}
              className="node-group"
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
                fill="var(--foreground)"
                stroke="var(--foreground)"
                strokeWidth={Math.max(0.5, (2.5 - depth * 0.4) / k)}
                style={
                  {
                    fillOpacity: fillOpacity,
                    strokeOpacity: strokeOpacity,
                    transition: "all 0.2s ease-in-out",
                    "--hover-fill": fillOpacity + 0.04,
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
                  fontWeight={depth <= 1 ? 700 : isLeaf ? 400 : 600}
                  style={{
                    opacity: isChildOfFocus ? 1 : 0,
                    transition: "opacity 0.4s ease-in-out",
                    pointerEvents: "none",
                    fontFamily: "inherit",
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
