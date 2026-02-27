"use client";

import React, { useEffect, useRef, useMemo, useCallback, memo } from "react";
import type { HierarchyCircularNode } from "d3-hierarchy";
import { type TreeNode } from "@/data";

const MIN_RADIUS_PX = 2;
const LABEL_RADIUS_PX = 35;
const VIEWPORT_PAD = 100;
const WHEEL_COOLDOWN_MS = 300;

interface CareerMapProps {
  root: HierarchyCircularNode<TreeNode>;
  focus: HierarchyCircularNode<TreeNode>;
  setFocus: React.Dispatch<
    React.SetStateAction<HierarchyCircularNode<TreeNode>>
  >;
  size: number;
}

const _keyCache = new WeakMap<HierarchyCircularNode<TreeNode>, string>();

function nodeKey(n: HierarchyCircularNode<TreeNode>): string {
  let cached = _keyCache.get(n);
  if (cached) return cached;
  const parts: string[] = [];
  let cur: HierarchyCircularNode<TreeNode> | null = n;
  while (cur) {
    parts.unshift(cur.data.name || "root");
    cur = cur.parent;
  }
  cached = parts.join("/");
  _keyCache.set(n, cached);
  return cached;
}

function CareerMap({ root, focus, setFocus, size }: CareerMapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const hoveredRef = useRef<HierarchyCircularNode<TreeNode> | null>(null);
  const wheelLock = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { k, tx, ty } = useMemo(() => {
    const k = size / (focus.r * 2);
    return { k, tx: size / 2 - focus.x * k, ty: size / 2 - focus.y * k };
  }, [focus, size]);

  const allNodes = useMemo(() => root.descendants(), [root]);

  const visibleNodes = useMemo(() => {
    return allNodes.filter((node) => {
      // ✂️  Skip the root node entirely — it's a layout-only container
      if (node.depth === 0) return false;

      const ar = node.r * k;
      if (ar < MIN_RADIUS_PX) return false;

      const cx = node.x * k + tx;
      const cy = node.y * k + ty;
      return (
        cx + ar + VIEWPORT_PAD > 0 &&
        cx - ar - VIEWPORT_PAD < size &&
        cy + ar + VIEWPORT_PAD > 0 &&
        cy - ar - VIEWPORT_PAD < size
      );
    });
  }, [allNodes, k, tx, ty, size]);

  const zoomOut = useCallback(() => {
    setFocus((prev) => prev.parent ?? prev);
  }, [setFocus]);

  const zoomToward = useCallback(
    (target: HierarchyCircularNode<TreeNode>) => {
      setFocus((prev) => {
        let n = target;
        while (n.parent && n.parent !== prev) {
          n = n.parent as HierarchyCircularNode<TreeNode>;
        }
        return n.parent === prev && n.children ? n : prev;
      });
    },
    [setFocus],
  );

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (wheelLock.current) return;
      wheelLock.current = setTimeout(() => {
        wheelLock.current = null;
      }, WHEEL_COOLDOWN_MS);

      if (e.deltaY > 0) zoomOut();
      else if (e.deltaY < 0 && hoveredRef.current)
        zoomToward(hoveredRef.current);
    };

    svg.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      svg.removeEventListener("wheel", onWheel);
      if (wheelLock.current) clearTimeout(wheelLock.current);
    };
  }, [zoomOut, zoomToward]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Backspace") {
        e.preventDefault();
        zoomOut();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoomOut]);

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${size} ${size}`}
      className="career-map"
      tabIndex={0}
      role="img"
      aria-label="Interactive career pathway map"
      onClick={() => setFocus((prev) => prev.parent ?? root)}
    >
      <g
        className="career-map__canvas"
        style={{
          transform: `translate(${tx}px,${ty}px) scale(${k})`,
          transformOrigin: "0 0",
        }}
      >
        {visibleNodes.map((node) => {
          const isLeaf = !node.children;
          const depth = node.depth;
          const apparentR = node.r * k;
          const isChildOfFocus = node.parent === focus;

          const showLabel = apparentR > LABEL_RADIUS_PX && isChildOfFocus;

          // depth starts at 1 now (root is skipped), so adjust fill logic
          const fo = isLeaf ? 0.08 : Math.min(depth * 0.02, 0.08);
          const so = 0.15;

          return (
            <g
              key={nodeKey(node)}
              className="node-group"
              data-has-children={node.children ? "" : undefined}
              onPointerEnter={() => {
                hoveredRef.current = node;
              }}
              onPointerLeave={() => {
                if (hoveredRef.current === node) hoveredRef.current = null;
              }}
              onClick={(e) => {
                e.stopPropagation();
                if (node === focus) zoomOut();
                else if (node.children) setFocus(node);
              }}
            >
              <circle
                cx={node.x}
                cy={node.y}
                r={node.r}
                fill="var(--foreground)"
                stroke="var(--foreground)"
                strokeWidth={Math.max(0.5, (2.5 - depth * 0.4) / k)}
                fillOpacity={fo}
                strokeOpacity={so}
                className="node-circle"
                style={{ "--fo": fo, "--so": so } as React.CSSProperties}
              />

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
        })}
      </g>
    </svg>
  );
}

export default memo(CareerMap);
