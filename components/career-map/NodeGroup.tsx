// components/career-map/NodeGroup.tsx
import React, { memo } from "react";
import type { HierarchyCircularNode } from "d3-hierarchy";
import type { TreeNode } from "@/data";

const LABEL_RADIUS_PX = 35;

interface NodeGroupProps {
  node: HierarchyCircularNode<TreeNode>;
  focus: HierarchyCircularNode<TreeNode>;
  /** Apparent radius in screen pixels (r * k) */
  apparentR: number;
  /** Current zoom scale — needed for stroke-width compensation */
  k: number;
  onPointerEnter: () => void;
  onPointerLeave: () => void;
  onClick: (e: React.MouseEvent) => void;
}

function NodeGroup({
  node,
  focus,
  apparentR,
  k,
  onPointerEnter,
  onPointerLeave,
  onClick,
}: NodeGroupProps) {
  const isLeaf = !node.children;
  const depth = node.depth;
  const isChildOfFocus = node.parent === focus;
  const showLabel = apparentR > LABEL_RADIUS_PX && isChildOfFocus;

  const fillOpacity = isLeaf ? 0.04 : Math.min(depth * 0.01, 0.04);
  const strokeOpacity = 0.06;

  return (
    <g
      className="node-group"
      data-has-children={node.children ? "" : undefined}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      onClick={onClick}
    >
      <circle
        cx={node.x}
        cy={node.y}
        r={node.r}
        fill="var(--foreground)"
        stroke="var(--foreground)"
        strokeWidth={Math.max(0.5, (2.5 - depth * 0.4) / k)}
        fillOpacity={fillOpacity}
        strokeOpacity={strokeOpacity}
        className="node-circle"
        style={
          {
            "--fo": fillOpacity,
            "--so": strokeOpacity,
          } as React.CSSProperties
        }
      />

      {/* Tooltip for leaf nodes */}
      {isLeaf && <title>{node.data.name}</title>}

      {showLabel && (
        <text
          x={node.x}
          y={node.y}
          textAnchor="middle"
          dominantBaseline="central"
          fill="var(--foreground)"
          fontSize={
            isLeaf
              ? Math.min(node.r * 0.35, 12 / k)
              : Math.min(node.r * 0.25, 15 / k)
          }
          fontWeight={depth <= 1 ? 700 : isLeaf ? 400 : 600}
          className="node-label"
        >
          {node.data.name}
        </text>
      )}
    </g>
  );
}

export default memo(NodeGroup);
