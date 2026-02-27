// components/career-map/nodeKey.ts
/**
 * Stable string key for a packed node, cached in a WeakMap so we
 * never recompute while the hierarchy is the same object.
 */
import type { HierarchyCircularNode } from "d3-hierarchy";
import type { TreeNode } from "@/data";

const _cache = new WeakMap<HierarchyCircularNode<TreeNode>, string>();

export function nodeKey(n: HierarchyCircularNode<TreeNode>): string {
  const cached = _cache.get(n);
  if (cached) return cached;

  const parts: string[] = [];
  let cur: HierarchyCircularNode<TreeNode> | null = n;
  while (cur) {
    parts.unshift(cur.data.name ?? "root");
    cur = cur.parent;
  }
  const key = parts.join("/");
  _cache.set(n, key);
  return key;
}
