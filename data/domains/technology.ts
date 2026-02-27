// data/domains/technology.ts
import type { TreeNode } from "../types";

export const technologyDomain: TreeNode = {
  id: "domain-technology",
  name: "Technology",
  children: [
    {
      name: "Software Development",
      children: [
        {
          name: "Web Development",
          children: [
            { id: "frontend-dev", name: "Frontend Developer", value: 1 },
            { id: "backend-dev", name: "Backend Developer", value: 1 },
            { id: "fullstack-dev", name: "Full-Stack Developer", value: 1 },
          ],
        },
        {
          name: "Mobile & Systems",
          children: [
            { id: "ios-dev", name: "iOS Developer", value: 1 },
            { id: "android-dev", name: "Android Developer", value: 1 },
            { id: "systems-programmer", name: "Systems Programmer", value: 1 },
          ],
        },
        {
          name: "Game Development",
          children: [
            {
              id: "gameplay-programmer",
              name: "Gameplay Programmer",
              value: 1,
            },
            {
              id: "graphics-programmer",
              name: "Graphics / Engine Dev",
              value: 1,
            },
            { id: "technical-artist", name: "Technical Artist", value: 1 },
          ],
        },
      ],
    },
    {
      name: "Data & AI",
      children: [
        {
          name: "Data Science",
          children: [
            { id: "data-scientist", name: "Data Scientist", value: 1 },
            { id: "data-analyst", name: "Data Analyst", value: 1 },
            { id: "data-engineer", name: "Data Engineer", value: 1 },
          ],
        },
        {
          name: "Machine Learning",
          children: [
            { id: "ml-engineer", name: "ML Engineer", value: 1 },
            { id: "nlp-engineer", name: "NLP Engineer", value: 1 },
            {
              id: "computer-vision-eng",
              name: "Computer Vision Eng.",
              value: 1,
            },
          ],
        },
      ],
    },
    {
      name: "Infrastructure",
      children: [
        {
          name: "DevOps & Cloud",
          children: [
            { id: "sre", name: "Site Reliability Eng.", value: 1 },
            { id: "cloud-architect", name: "Cloud Architect", value: 1 },
            { id: "platform-engineer", name: "Platform Engineer", value: 1 },
          ],
        },
        {
          name: "Cybersecurity",
          children: [
            { id: "penetration-tester", name: "Penetration Tester", value: 1 },
            { id: "security-analyst", name: "Security Analyst", value: 1 },
            { id: "cryptographer", name: "Cryptographer", value: 1 },
          ],
        },
      ],
    },
  ],
};
