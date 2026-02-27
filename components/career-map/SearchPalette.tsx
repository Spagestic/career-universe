// components/career-map/SearchPalette.tsx
import React from "react";
import type { HierarchyCircularNode } from "d3-hierarchy";
import type { TreeNode } from "@/data";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { SearchIcon, GlobeIcon, FolderIcon, BriefcaseIcon } from "lucide-react";
import { nodeKey } from "./nodeKey";

interface SearchPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  domains: HierarchyCircularNode<TreeNode>[];
  fields: HierarchyCircularNode<TreeNode>[];
  careers: HierarchyCircularNode<TreeNode>[];
  onSelect: (node: HierarchyCircularNode<TreeNode>) => void;
}

export function SearchPalette({
  open,
  onOpenChange,
  domains,
  fields,
  careers,
  onSelect,
}: SearchPaletteProps) {
  return (
    <>
      {/* Trigger button */}
      <div className="absolute top-4 left-4 z-10">
        <Button
          variant="outline"
          className="gap-2 text-muted-foreground bg-background/80 backdrop-blur-sm border-foreground/10 hover:bg-background/90"
          onClick={() => onOpenChange(true)}
        >
          <SearchIcon className="w-4 h-4" />
          <span>Search Map...</span>
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>
      </div>

      {/* Dialog */}
      <CommandDialog open={open} onOpenChange={onOpenChange}>
        <CommandInput placeholder="Search careers, domains, or fields..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          {domains.length > 0 && (
            <CommandGroup heading="Domains">
              {domains.map((node) => (
                <CommandItem
                  key={nodeKey(node)}
                  value={node.data.name}
                  onSelect={() => onSelect(node)}
                >
                  <GlobeIcon className="mr-2 h-4 w-4 opacity-50" />
                  <span>{node.data.name}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          )}

          {domains.length > 0 && fields.length > 0 && <CommandSeparator />}

          {fields.length > 0 && (
            <CommandGroup heading="Fields">
              {fields.map((node) => (
                <CommandItem
                  key={nodeKey(node)}
                  value={`${node.data.name} ${node.parent?.data.name ?? ""}`}
                  onSelect={() => onSelect(node)}
                >
                  <FolderIcon className="mr-2 h-4 w-4 opacity-50" />
                  <span>{node.data.name}</span>
                  <span className="ml-2 text-xs text-muted-foreground">
                    ({node.parent?.data.name})
                  </span>
                </CommandItem>
              ))}
            </CommandGroup>
          )}

          {fields.length > 0 && careers.length > 0 && <CommandSeparator />}

          {careers.length > 0 && (
            <CommandGroup heading="Careers & Jobs">
              {careers.map((node) => (
                <CommandItem
                  key={nodeKey(node)}
                  value={`${node.data.name} ${node.parent?.data.name ?? ""}`}
                  onSelect={() => onSelect(node)}
                >
                  <BriefcaseIcon className="mr-2 h-4 w-4 opacity-50" />
                  <span>{node.data.name}</span>
                  <span className="ml-2 text-xs text-muted-foreground">
                    ({node.parent?.data.name})
                  </span>
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
}
