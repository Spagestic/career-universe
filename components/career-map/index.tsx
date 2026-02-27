// components/career-map/index.tsx
"use client";

import React, { memo, useMemo, useRef, useState, useCallback } from "react";
import type { HierarchyCircularNode } from "d3-hierarchy";
import type { TreeNode } from "@/data";
import { useKeyboardNav } from "@/hooks/useKeyboardNav";
import { usePackedNodes } from "@/hooks/usePackedNodes";
import { SearchPalette } from "./SearchPalette";
import MapCanvas from "./MapCanvas";

interface CareerMapProps {
  root: HierarchyCircularNode<TreeNode>;
  /** Lifted focus + setter so the page can seed the initial state */
  focus: HierarchyCircularNode<TreeNode>;
  setFocus: React.Dispatch<
    React.SetStateAction<HierarchyCircularNode<TreeNode>>
  >;
  size: number;
}

function CareerMap({ root, focus, setFocus, size }: CareerMapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  // ── Zoom helpers ─────────────────────────────────────────────────────────
  // We derive zoomOut / zoomToward from focus + setFocus so they stay in sync
  // with the lifted state owned by the page.
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

  // ── Keyboard shortcuts ────────────────────────────────────────────────────
  const toggleSearch = useCallback(() => setSearchOpen((o) => !o), []);
  useKeyboardNav({ zoomOut, onSearchToggle: toggleSearch, searchOpen });

  // ── Derived geometry ──────────────────────────────────────────────────────
  const { k, tx, ty } = useMemo(() => {
    const k = size / (focus.r * 2);
    return { k, tx: size / 2 - focus.x * k, ty: size / 2 - focus.y * k };
  }, [focus, size]);

  const { visibleNodes, domains, fields, careers } = usePackedNodes({
    root,
    focus,
    k,
    tx,
    ty,
    size,
  });

  // ── Search select ─────────────────────────────────────────────────────────
  const handleSelect = useCallback(
    (node: HierarchyCircularNode<TreeNode>) => {
      // If node is a leaf, walk up to the nearest ancestor with children
      let n = node;
      while (n && !n.children && n.parent) {
        n = n.parent;
      }
      setFocus(n);
      setSearchOpen(false);
    },
    [setFocus],
  );

  return (
    <div className="relative w-full h-full flex flex-1 flex-col overflow-hidden">
      <SearchPalette
        open={searchOpen}
        onOpenChange={setSearchOpen}
        domains={domains}
        fields={fields}
        careers={careers}
        onSelect={handleSelect}
      />

      <MapCanvas
        svgRef={svgRef}
        visibleNodes={visibleNodes}
        focus={focus}
        k={k}
        tx={tx}
        ty={ty}
        size={size}
        zoomOut={zoomOut}
        zoomToward={zoomToward}
        setFocus={setFocus}
      />
    </div>
  );
}

export default memo(CareerMap);
