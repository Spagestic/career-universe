// hooks/useWheelZoom.ts
import { useEffect, useRef } from "react";
import type { RefObject } from "react";
import type { HierarchyCircularNode } from "d3-hierarchy";
import type { TreeNode } from "@/data";

const WHEEL_COOLDOWN_MS = 300;

interface UseWheelZoomOptions {
  // ✅ Accept the nullable form useRef<T>(null) actually returns
  svgRef: RefObject<SVGSVGElement | null>;
  hoveredRef: RefObject<HierarchyCircularNode<TreeNode> | null>;
  zoomOut: () => void;
  zoomToward: (target: HierarchyCircularNode<TreeNode>) => void;
}

export function useWheelZoom({
  svgRef,
  hoveredRef,
  zoomOut,
  zoomToward,
}: UseWheelZoomOptions): void {
  const zoomOutRef = useRef(zoomOut);
  const zoomTowardRef = useRef(zoomToward);
  useEffect(() => {
    zoomOutRef.current = zoomOut;
  }, [zoomOut]);
  useEffect(() => {
    zoomTowardRef.current = zoomToward;
  }, [zoomToward]);

  useEffect(() => {
    const svg = svgRef.current; // SVGSVGElement | null
    if (!svg) return;

    let cooldownId: ReturnType<typeof setTimeout> | null = null;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (cooldownId) return;

      cooldownId = setTimeout(() => {
        cooldownId = null;
      }, WHEEL_COOLDOWN_MS);

      if (e.deltaY > 0) {
        zoomOutRef.current();
      } else if (e.deltaY < 0 && hoveredRef.current) {
        zoomTowardRef.current(hoveredRef.current);
      }
    };

    svg.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      svg.removeEventListener("wheel", onWheel);
      if (cooldownId) clearTimeout(cooldownId);
    };
  }, [svgRef, hoveredRef]);
}
