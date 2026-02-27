"use client";

import React from "react";
import type { HierarchyCircularNode } from "d3-hierarchy";
import type { TreeNode } from "@/data/careers";

// Import the shadcn components (adjust the path based on your setup)
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

export default function CareerBreadcrumb({
  focus,
  setFocus,
}: CareerBreadcrumbProps) {
  // Get the path from root to the current focused node
  const path = focus.ancestors().reverse();

  return (
    <div className="px-5 py-4 z-10 shrink-0 bg-[#0f0f1a]">
      <Breadcrumb>
        <BreadcrumbList>
          {path.map((node, i) => {
            const isLast = i === path.length - 1;

            return (
              <React.Fragment key={node.data.name}>
                <BreadcrumbItem>
                  {isLast ? (
                    // The active, current node
                    <BreadcrumbPage className="text-white font-bold text-sm">
                      {node.data.name}
                    </BreadcrumbPage>
                  ) : (
                    // Ancestor nodes (clickable)
                    // We use asChild so we can pass our custom <button> with onClick
                    <BreadcrumbLink
                      asChild
                      className="cursor-pointer text-slate-400 hover:text-white transition-colors"
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

                {/* Add a separator after every item except the last one */}
                {!isLast && <BreadcrumbSeparator className="text-slate-600" />}
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
