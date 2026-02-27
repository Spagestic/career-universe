// data/index.ts
import type { TreeNode } from "./types";

import { scienceDomain } from "./domains/science";
import { engineeringDomain } from "./domains/engineering";
import { technologyDomain } from "./domains/technology";
import { artsDomain } from "./domains/arts";
import { businessDomain } from "./domains/business";
import { healthcareDomain } from "./domains/healthcare";

export const careerData: TreeNode = {
  id: "root",
  name: "",
  children: [
    scienceDomain,
    engineeringDomain,
    technologyDomain,
    artsDomain,
    businessDomain,
    healthcareDomain,
  ],
};

export type { TreeNode };
