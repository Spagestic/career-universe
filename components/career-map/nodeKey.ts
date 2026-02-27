// components/career-map/nodeKey.ts
import type { HierarchyCircularNode } from "d3-hierarchy";
import type { TreeNode } from "@/data";

const _cache = new WeakMap<HierarchyCircularNode<TreeNode>, string>();

export function nodeKey(n: HierarchyCircularNode<TreeNode>): string {
  let cached = _cache.get(n);
  if (cached) return cached;

  // Build a path from IDs for guaranteed uniqueness
  const parts: string[] = [];
  let cur: HierarchyCircularNode<TreeNode> | null = n;
  while (cur) {
    parts.unshift(cur.data.id);
    cur = cur.parent;
  }
  cached = parts.join("/");
  _cache.set(n, cached);
  return cached;
}
