// components/Breadcrumb.tsx
"use client";

import React from "react";
import type { HierarchyCircularNode } from "d3-hierarchy";
import { type TreeNode } from "@/data";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface CareerBreadcrumbProps {
  focus: HierarchyCircularNode<TreeNode>;
  setFocus: (node: HierarchyCircularNode<TreeNode>) => void;
}

export default function Header({ focus, setFocus }: CareerBreadcrumbProps) {
  const path = focus.ancestors().reverse();

  return (
    // Uses bg-background and adds a subtle border
    <div className="px-5 py-4 z-10 shrink-0 bg-background border-b border-border/40">
      <Breadcrumb>
        <BreadcrumbList>
          {path.map((node, i) => {
            const isLast = i === path.length - 1;

            return (
              <React.Fragment key={node.data.name}>
                <BreadcrumbItem>
                  {isLast ? (
                    // Active node: standard foreground color
                    <BreadcrumbPage className="text-foreground font-bold text-sm">
                      {node.data.name}
                    </BreadcrumbPage>
                  ) : (
                    // Ancestor nodes: muted color, turns to foreground on hover
                    <BreadcrumbLink
                      asChild
                      className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setFocus(node);
                        }}
                      >
                        {node.data.name}
                      </button>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>

                {!isLast && <BreadcrumbSeparator className="text-border" />}
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
