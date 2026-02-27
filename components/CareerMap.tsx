// components/CareerMap.tsx
"use client";

import type { HierarchyCircularNode } from "d3-hierarchy";
import type { TreeNode } from "@/data/careers";
import { getDomainColor } from "@/lib/utils";

interface CareerMapProps {
  root: HierarchyCircularNode<TreeNode>;
  focus: HierarchyCircularNode<TreeNode>;
  setFocus: (node: HierarchyCircularNode<TreeNode>) => void;
  size: number;
}

export default function CareerMap({
  root,
  focus,
  setFocus,
  size,
}: CareerMapProps) {
  // Zoom transform: center and scale the focused node to fill the view
  const k = size / (focus.r * 2);
  const tx = size / 2 - focus.x * k;
  const ty = size / 2 - focus.y * k;

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      style={{ flex: 1, width: "100%", cursor: "pointer" }}
      onClick={() => setFocus(focus.parent ?? root)}
    >
      <style>{`
        .node-group:hover > circle {
          filter: brightness(1.4);
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

          // Label visibility — only render if circle is big enough on screen
          const showLabel = apparentR > (isLeaf ? 25 : 45);

          // Font size in SVG coords (divided by k so apparent size stays constant)
          const fontSize = isLeaf
            ? Math.min(node.r * 0.35, 12 / k)
            : Math.min(node.r * 0.25, 15 / k);

          // Fill: transparent root, subtle fills for everything else
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
              onClick={(e) => {
                e.stopPropagation();
                if (node === focus) {
                  setFocus(node.parent ?? root);
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

              {showLabel && (
                <text
                  x={node.x}
                  y={isLeaf ? node.y : node.y - node.r + fontSize * 2}
                  textAnchor="middle"
                  dominantBaseline={isLeaf ? "central" : "auto"}
                  fill="white"
                  fontSize={fontSize}
                  fontWeight={depth <= 1 ? 700 : isLeaf ? 400 : 600}
                  opacity={0.9}
                  style={{ pointerEvents: "none", fontFamily: "inherit" }}
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
