// components/career-map/MapCanvas.tsx
import React, { memo, useRef } from "react";
import type { RefObject } from "react";
import type { HierarchyCircularNode } from "d3-hierarchy";
import type { TreeNode } from "@/data";
import NodeGroup from "./NodeGroup";
import { useWheelZoom } from "@/hooks/useWheelZoom";
import { nodeKey } from "./nodeKey";

interface MapCanvasProps {
  // ✅ Match what useRef<SVGSVGElement>(null) returns
  svgRef: RefObject<SVGSVGElement | null>;
  visibleNodes: HierarchyCircularNode<TreeNode>[];
  focus: HierarchyCircularNode<TreeNode>;
  k: number;
  tx: number;
  ty: number;
  size: number;
  zoomOut: () => void;
  zoomToward: (target: HierarchyCircularNode<TreeNode>) => void;
  setFocus: React.Dispatch<
    React.SetStateAction<HierarchyCircularNode<TreeNode>>
  >;
}

function MapCanvas({
  svgRef,
  visibleNodes,
  focus,
  k,
  tx,
  ty,
  size,
  zoomOut,
  zoomToward,
  setFocus,
}: MapCanvasProps) {
  const hoveredRef = useRef<HierarchyCircularNode<TreeNode> | null>(null);

  useWheelZoom({ svgRef, hoveredRef, zoomOut, zoomToward });

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${size} ${size}`}
      className="career-map w-full h-full absolute inset-0"
      tabIndex={0}
      role="img"
      aria-label="Interactive career pathway map"
      onClick={() => setFocus((prev) => prev.parent ?? focus)}
    >
      <g
        className="career-map__canvas"
        style={{
          transform: `translate(${tx}px,${ty}px) scale(${k})`,
          transformOrigin: "0 0",
        }}
      >
        {visibleNodes.map((node) => (
          <NodeGroup
            key={nodeKey(node)}
            node={node}
            focus={focus}
            apparentR={node.r * k}
            k={k}
            onPointerEnter={() => {
              hoveredRef.current = node;
            }}
            onPointerLeave={() => {
              if (hoveredRef.current === node) hoveredRef.current = null;
            }}
            onClick={(e) => {
              e.stopPropagation();
              if (node === focus) {
                zoomOut();
              } else {
                // Walk up to find the direct child of focus on the path to the clicked node
                let n = node;
                while (n.parent && n.parent !== focus) {
                  n = n.parent;
                }
                if (n.parent === focus) {
                  setFocus(n);
                }
              }
            }}
          />
        ))}
      </g>
    </svg>
  );
}

export default memo(MapCanvas);
