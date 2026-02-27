// hooks/useZoom.ts
import { useCallback, useState } from "react";
import type { HierarchyCircularNode } from "d3-hierarchy";
import type { TreeNode } from "@/data";

export interface ZoomControls {
  focus: HierarchyCircularNode<TreeNode>;
  setFocus: React.Dispatch<
    React.SetStateAction<HierarchyCircularNode<TreeNode>>
  >;
  zoomOut: () => void;
  zoomToward: (target: HierarchyCircularNode<TreeNode>) => void;
}

export function useZoom(root: HierarchyCircularNode<TreeNode>): ZoomControls {
  const [focus, setFocus] = useState<HierarchyCircularNode<TreeNode>>(root);

  const zoomOut = useCallback(() => {
    setFocus((prev) => prev.parent ?? prev);
  }, []);

  const zoomToward = useCallback((target: HierarchyCircularNode<TreeNode>) => {
    setFocus((prev) => {
      let n = target;
      // Walk up until we find a direct child of `prev`
      while (n.parent && n.parent !== prev) {
        n = n.parent as HierarchyCircularNode<TreeNode>;
      }
      return n.parent === prev && n.children ? n : prev;
    });
  }, []);

  return { focus, setFocus, zoomOut, zoomToward };
}
