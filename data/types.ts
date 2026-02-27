// data/types.ts

export interface TreeNode {
  id?: string;
  name: string;
  description?: string;
  relatedTo?: string[]; // IDs of related cross-disciplinary fields
  children?: TreeNode[];
  value?: number; // Only leaf nodes should have a value
}
