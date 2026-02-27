// hooks/usePackedNodes.ts
/**
 * Derives the flat node lists that the map and search palette consume.
 * Pure memoisation — no side-effects.
 */
import { useMemo } from "react";
import type { HierarchyCircularNode } from "d3-hierarchy";
import type { TreeNode } from "@/data";

const MIN_RADIUS_PX = 2;
const VIEWPORT_PAD = 100;

interface UsePackedNodesOptions {
  root: HierarchyCircularNode<TreeNode>;
  focus: HierarchyCircularNode<TreeNode>;
  /** Current zoom scale */
  k: number;
  tx: number;
  ty: number;
  size: number;
}

export interface PackedNodes {
  allNodes: HierarchyCircularNode<TreeNode>[];
  visibleNodes: HierarchyCircularNode<TreeNode>[];
  domains: HierarchyCircularNode<TreeNode>[];
  fields: HierarchyCircularNode<TreeNode>[];
  careers: HierarchyCircularNode<TreeNode>[];
}

export function usePackedNodes({
  root,
  k,
  tx,
  ty,
  size,
}: UsePackedNodesOptions): PackedNodes {
  const allNodes = useMemo(() => root.descendants(), [root]);

  const visibleNodes = useMemo(() => {
    return allNodes.filter((node) => {
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

  const { domains, fields, careers } = useMemo(() => {
    const nodes = allNodes.filter((n) => n.depth > 0);
    return {
      domains: nodes.filter((n) => n.depth === 1),
      fields: nodes.filter((n) => n.depth === 2),
      careers: nodes.filter((n) => n.depth >= 3),
    };
  }, [allNodes]);

  return { allNodes, visibleNodes, domains, fields, careers };
}
