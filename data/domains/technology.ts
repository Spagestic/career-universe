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
            {
              id: "backend-dev",
              name: "Backend Developer",
              value: 1,
              relatedTo: ["data-engineer", "cloud-architect"],
            },
            {
              id: "fullstack-dev",
              name: "Full-Stack Developer",
              value: 1,
              relatedTo: ["frontend-dev", "backend-dev"],
            },
            {
              id: "web-accessibility-specialist",
              name: "Accessibility Specialist",
              value: 1,
              relatedTo: ["ui-ux-designer", "frontend-dev"],
            },
          ],
        },
        {
          id: "subfield-mobile-systems",
          name: "Mobile & Systems",
          children: [
            {
              id: "ios-dev",
              name: "iOS Developer",
              value: 1,
              relatedTo: ["android-dev", "ui-ux-designer"],
            },
            {
              id: "android-dev",
              name: "Android Developer",
              value: 1,
              relatedTo: ["ios-dev"],
            },
            {
              id: "systems-programmer",
              name: "Systems Programmer",
              value: 1,
              relatedTo: ["quantum-software-dev", "embedded-systems-eng"],
            },
            {
              id: "compiler-eng",
              name: "Compiler Engineer",
              value: 1,
              relatedTo: ["systems-programmer", "pl-researcher"],
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
              relatedTo: ["game-designer"],
            },
            {
              id: "graphics-programmer",
              name: "Graphics / Engine Dev",
              value: 1,
              relatedTo: ["technical-artist", "computer-vision-eng"],
            },
            {
              id: "technical-artist",
              name: "Technical Artist",
              value: 1,
              relatedTo: ["animator", "graphics-programmer"],
            },
            {
              id: "game-designer",
              name: "Game Designer",
              value: 1,
              relatedTo: [
                "gameplay-programmer",
                "ux-researcher",
                "screenwriter",
              ],
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
              relatedTo: [
                "statistician",
                "financial-analyst",
                "market-researcher",
              ],
            },
            {
              id: "data-engineer",
              name: "Data Engineer",
              value: 1,
              relatedTo: [
                "backend-dev",
                "cloud-architect",
                "biomedical-data-eng",
              ],
            },
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
              relatedTo: ["computational-linguist", "ml-engineer"],
            },
            {
              id: "computer-vision-eng",
              name: "Computer Vision Eng.",
              value: 1,
              relatedTo: ["medical-imaging-eng", "graphics-programmer"],
            },
            {
              id: "ai-ethics-researcher",
              name: "AI Ethics Researcher",
              value: 1,
              relatedTo: ["ml-engineer", "policy-analyst", "philosopher"],
            },
          ],
        },
        {
          id: "subfield-data-visualization",
          name: "Data Visualization",
          children: [
            {
              id: "data-visualization-eng",
              name: "Data Visualization Eng.",
              value: 1,
              relatedTo: ["frontend-dev", "graphic-designer", "data-analyst"],
            },
            {
              id: "geospatial-analyst",
              name: "Geospatial Analyst",
              value: 1,
              relatedTo: ["gis-specialist", "urban-planner"],
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
              name: "Site Reliability Eng.",
              value: 1,
              relatedTo: ["platform-engineer"],
            },
            {
              id: "cloud-architect",
              name: "Cloud Architect",
              value: 1,
              relatedTo: ["backend-dev", "it-consultant"],
            },
            {
              id: "platform-engineer",
              name: "Platform Engineer",
              value: 1,
              relatedTo: ["sre", "cloud-architect"],
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
              relatedTo: ["security-analyst", "forensic-investigator"],
            },
            {
              id: "security-analyst",
              name: "Security Analyst",
              value: 1,
              relatedTo: ["detective", "intelligence-analyst"],
            },
            {
              id: "cryptographer",
              name: "Cryptographer",
              value: 1,
              relatedTo: ["quantum-researcher", "mathematician"],
            },
            {
              id: "security-architect",
              name: "Security Architect",
              value: 1,
              relatedTo: ["cloud-architect", "security-analyst"],
            },
          ],
        },
        {
          id: "subfield-networking",
          name: "Networking",
          children: [
            {
              id: "network-engineer",
              name: "Network Engineer",
              value: 1,
              relatedTo: ["telecom-eng", "cloud-architect"],
            },
            {
              id: "network-admin",
              name: "Network Administrator",
              value: 1,
              relatedTo: ["sysadmin", "network-engineer"],
            },
            {
              id: "sysadmin",
              name: "Systems Administrator",
              value: 1,
              relatedTo: ["platform-engineer", "network-admin"],
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
            {
              id: "qa-engineer",
              name: "QA Engineer",
              value: 1,
              relatedTo: ["test-automation-eng"],
            },
            {
              id: "test-automation-eng",
              name: "Test Automation Eng.",
              value: 1,
              relatedTo: ["qa-engineer", "sre"],
            },
          ],
        },
        {
          id: "subfield-ux-research",
          name: "UX Research",
          children: [
            {
              id: "ux-researcher",
              name: "UX Researcher",
              value: 1,
              relatedTo: [
                "ui-ux-designer",
                "market-researcher",
                "cognitive-psychologist",
              ],
            },
            {
              id: "usability-analyst",
              name: "Usability Analyst",
              value: 1,
              relatedTo: ["ux-researcher", "data-analyst"],
            },
          ],
        },
      ],
    },
    {
      id: "field-emerging-tech",
      name: "Emerging Technology",
      children: [
        {
          id: "subfield-xr",
          name: "AR / VR / XR",
          children: [
            {
              id: "xr-developer",
              name: "XR Developer",
              value: 1,
              relatedTo: ["graphics-programmer", "ui-ux-designer"],
            },
            {
              id: "xr-designer",
              name: "XR Experience Designer",
              value: 1,
              relatedTo: ["product-designer", "game-designer"],
            },
          ],
        },
        {
          id: "subfield-blockchain",
          name: "Blockchain & Web3",
          children: [
            {
              id: "smart-contract-dev",
              name: "Smart Contract Dev",
              value: 1,
              relatedTo: ["cryptographer", "backend-dev"],
            },
            {
              id: "blockchain-architect",
              name: "Blockchain Architect",
              value: 1,
              relatedTo: ["security-architect", "cloud-architect"],
            },
          ],
        },
        {
          id: "subfield-pl-research",
          name: "Programming Languages",
          children: [
            {
              id: "pl-researcher",
              name: "PL Researcher",
              value: 1,
              relatedTo: ["compiler-eng", "mathematician", "professor"],
            },
          ],
        },
      ],
    },
  ],
};
