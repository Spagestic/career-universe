import type { TreeNode } from "../types";

export const technologyDomain: TreeNode = {
  id: "domain-technology",
  name: "Technology",
  children: [
    {
      id: "field-software-dev",
      name: "Software Development",
      children: [
        {
          id: "subfield-web-dev",
          name: "Web Development",
          children: [
            {
              id: "frontend-dev",
              name: "Frontend Developer",
              value: 1,
              relatedTo: ["ui-ux-designer", "edtech-developer"],
            },
            { id: "backend-dev", name: "Backend Developer", value: 1 },
            {
              id: "fullstack-dev",
              name: "Full-Stack Developer",
              value: 1,
            },
          ],
        },
        {
          id: "subfield-mobile-systems",
          name: "Mobile & Systems",
          children: [
            { id: "ios-dev", name: "iOS Developer", value: 1 },
            { id: "android-dev", name: "Android Developer", value: 1 },
            {
              id: "systems-programmer",
              name: "Systems Programmer",
              value: 1,
              relatedTo: ["quantum-software-dev", "embedded-systems-eng"],
            },
          ],
        },
        {
          id: "subfield-game-dev",
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
              relatedTo: ["technical-artist"],
            },
            {
              id: "technical-artist",
              name: "Technical Artist",
              value: 1,
              relatedTo: ["animator", "graphics-programmer"],
            },
          ],
        },
      ],
    },
    {
      id: "field-data-ai",
      name: "Data & AI",
      children: [
        {
          id: "subfield-data-science",
          name: "Data Science",
          children: [
            {
              id: "data-scientist",
              name: "Data Scientist",
              value: 1,
              relatedTo: ["statistician", "bioinformatician", "ml-engineer"],
            },
            {
              id: "data-analyst",
              name: "Data Analyst",
              value: 1,
              relatedTo: ["statistician", "financial-analyst"],
            },
            { id: "data-engineer", name: "Data Engineer", value: 1 },
          ],
        },
        {
          id: "subfield-machine-learning",
          name: "Machine Learning",
          children: [
            {
              id: "ml-engineer",
              name: "ML Engineer",
              value: 1,
              relatedTo: [
                "data-scientist",
                "computational-mathematician",
                "robotics-eng",
              ],
            },
            {
              id: "nlp-engineer",
              name: "NLP Engineer",
              value: 1,
            },
            {
              id: "computer-vision-eng",
              name: "Computer Vision Engineer",
              value: 1,
              relatedTo: ["medical-imaging-eng"],
            },
          ],
        },
      ],
    },
    {
      id: "field-infrastructure",
      name: "Infrastructure",
      children: [
        {
          id: "subfield-devops-cloud",
          name: "DevOps & Cloud",
          children: [
            {
              id: "sre",
              name: "Site Reliability Engineer",
              value: 1,
            },
            {
              id: "cloud-architect",
              name: "Cloud Architect",
              value: 1,
            },
            {
              id: "platform-engineer",
              name: "Platform Engineer",
              value: 1,
            },
          ],
        },
        {
          id: "subfield-cybersecurity",
          name: "Cybersecurity",
          children: [
            {
              id: "penetration-tester",
              name: "Penetration Tester",
              value: 1,
              relatedTo: ["security-analyst"],
            },
            {
              id: "security-analyst",
              name: "Security Analyst",
              value: 1,
              relatedTo: ["detective"],
            },
            {
              id: "cryptographer",
              name: "Cryptographer",
              value: 1,
              relatedTo: ["quantum-researcher", "mathematician"],
            },
          ],
        },
      ],
    },
    {
      id: "field-product-quality",
      name: "Product & Quality",
      children: [
        {
          id: "subfield-product-management",
          name: "Product Management",
          children: [
            {
              id: "product-manager",
              name: "Product Manager",
              value: 1,
              relatedTo: ["product-designer", "product-marketing-mgr"],
            },
            {
              id: "technical-program-manager",
              name: "Technical Program Mgr",
              value: 1,
              relatedTo: ["project-manager"],
            },
          ],
        },
        {
          id: "subfield-quality-testing",
          name: "Quality & Testing",
          children: [
            { id: "qa-engineer", name: "QA Engineer", value: 1 },
            {
              id: "test-automation-eng",
              name: "Test Automation Engineer",
              value: 1,
            },
          ],
        },
      ],
    },
  ],
};
