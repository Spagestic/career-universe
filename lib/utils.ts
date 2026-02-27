import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { HierarchyCircularNode } from "d3-hierarchy";
import type { TreeNode } from "@/data/careers";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Walk up to the depth-1 ancestor to get the domain color
export function getDomainColor(node: HierarchyCircularNode<TreeNode>): string {
  let n = node;
  while (n.depth > 1 && n.parent) {
    n = n.parent;
  }
  return n.data.color ?? "#888";
}
