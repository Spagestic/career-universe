// data/index.ts
import type { TreeNode } from "./types";

import { scienceDomain } from "./domains/science";
import { engineeringDomain } from "./domains/engineering";
import { technologyDomain } from "./domains/technology";
import { artsDomain } from "./domains/arts";
import { businessDomain } from "./domains/business";
import { healthcareDomain } from "./domains/healthcare";
import { educationDomain } from "./domains/education";
import { lawDomain } from "./domains/law";

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
    educationDomain,
    lawDomain,
  ],
};

export type { TreeNode };
