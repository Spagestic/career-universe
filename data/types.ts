// data/types.ts

export interface TreeNode {
  id: string; // now required — every node needs one for relatedTo + stable keys
  name: string;
  description?: string;
  relatedTo?: string[]; // IDs of careers in other domains
  children?: TreeNode[];
  value?: number; // only leaf nodes
}
