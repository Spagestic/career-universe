import type { TreeNode } from "../types";

export const scienceDomain: TreeNode = {
  id: "domain-science",
  name: "Science",
  children: [
    {
      id: "field-physics",
      name: "Physics",
      children: [
        {
          id: "subfield-quantum-physics",
          name: "Quantum Physics",
          children: [
            {
              id: "quantum-researcher",
              name: "Quantum Researcher",
              value: 1,
              relatedTo: ["cryptographer", "quantum-software-dev"],
            },
            {
              id: "quantum-hardware-eng",
              name: "Quantum Hardware Engineer",
              value: 1,
              relatedTo: ["electronics-eng", "fpga-eng"],
            },
            {
              id: "quantum-software-dev",
              name: "Quantum Software Dev",
              value: 1,
              relatedTo: ["systems-programmer", "cryptographer"],
            },
          ],
        },
        {
          id: "subfield-astrophysics",
          name: "Astrophysics",
          children: [
            { id: "astrophysicist", name: "Astrophysicist", value: 1 },
            {
              id: "cosmologist",
              name: "Cosmologist",
              value: 1,
            },
            {
              id: "planetarium-director",
              name: "Planetarium Director",
              value: 1,
              relatedTo: ["science-educator"],
            },
          ],
        },
        {
          id: "subfield-particle-physics",
          name: "Particle Physics",
          children: [
            {
              id: "accelerator-physicist",
              name: "Accelerator Physicist",
              value: 1,
            },
            {
              id: "detector-engineer",
              name: "Detector Engineer",
              value: 1,
              relatedTo: ["electronics-eng"],
            },
          ],
        },
      ],
    },
    {
      id: "field-biology",
      name: "Biology",
      children: [
        {
          id: "subfield-genetics",
          name: "Genetics",
          children: [
            {
              id: "genetic-counselor",
              name: "Genetic Counselor",
              value: 1,
              relatedTo: ["family-physician"],
            },
            {
              id: "genomics-researcher",
              name: "Genomics Researcher",
              value: 1,
              relatedTo: ["bioinformatician"],
            },
            {
              id: "bioinformatician",
              name: "Bioinformatician",
              value: 1,
              relatedTo: [
                "data-scientist",
                "genomics-researcher",
                "biostatistician",
              ],
            },
          ],
        },
        {
          id: "subfield-ecology",
          name: "Ecology",
          children: [
            {
              id: "wildlife-biologist",
              name: "Wildlife Biologist",
              value: 1,
            },
            {
              id: "conservation-scientist",
              name: "Conservation Scientist",
              value: 1,
              relatedTo: ["climatologist", "urban-planner"],
            },
            {
              id: "marine-biologist",
              name: "Marine Biologist",
              value: 1,
              relatedTo: ["naval-architect"],
            },
          ],
        },
        {
          id: "subfield-microbiology",
          name: "Microbiology",
          children: [
            {
              id: "microbiologist",
              name: "Microbiologist",
              value: 1,
              relatedTo: ["pharmacologist"],
            },
            {
              id: "virologist",
              name: "Virologist",
              value: 1,
              relatedTo: ["epidemiologist"],
            },
          ],
        },
      ],
    },
    {
      id: "field-chemistry",
      name: "Chemistry",
      children: [
        {
          id: "subfield-organic-chem",
          name: "Organic Chemistry",
          children: [
            {
              id: "medicinal-chemist",
              name: "Medicinal Chemist",
              value: 1,
              relatedTo: ["pharmacologist"],
            },
            {
              id: "polymer-scientist",
              name: "Polymer Scientist",
              value: 1,
              relatedTo: ["corrosion-eng"],
            },
          ],
        },
        {
          id: "subfield-analytical-chem",
          name: "Analytical Chemistry",
          children: [
            { id: "lab-analyst", name: "Lab Analyst", value: 1 },
            {
              id: "forensic-chemist",
              name: "Forensic Chemist",
              value: 1,
              relatedTo: ["forensic-accountant", "forensic-investigator"],
            },
            {
              id: "toxicologist",
              name: "Toxicologist",
              value: 1,
              relatedTo: ["pharmacologist", "forensic-chemist"],
            },
          ],
        },
      ],
    },
    {
      id: "field-earth-sciences",
      name: "Earth Sciences",
      children: [
        {
          id: "subfield-geology",
          name: "Geology",
          children: [
            {
              id: "geologist",
              name: "Geologist",
              value: 1,
              relatedTo: ["mining-eng"],
            },
            {
              id: "seismologist",
              name: "Seismologist",
              value: 1,
              relatedTo: ["structural-eng"],
            },
          ],
        },
        {
          id: "subfield-meteorology",
          name: "Meteorology",
          children: [
            { id: "meteorologist", name: "Meteorologist", value: 1 },
            {
              id: "climatologist",
              name: "Climatologist",
              value: 1,
              relatedTo: ["conservation-scientist", "policy-analyst"],
            },
          ],
        },
      ],
    },
    {
      id: "field-mathematics",
      name: "Mathematics & Statistics",
      children: [
        {
          id: "subfield-pure-applied-math",
          name: "Pure & Applied Math",
          children: [
            {
              id: "mathematician",
              name: "Mathematician",
              value: 1,
              relatedTo: ["cryptographer"],
            },
            {
              id: "operations-researcher",
              name: "Operations Researcher",
              value: 1,
              relatedTo: ["supply-chain-mgr", "data-scientist"],
            },
            {
              id: "computational-mathematician",
              name: "Computational Mathematician",
              value: 1,
              relatedTo: ["ml-engineer"],
            },
          ],
        },
        {
          id: "subfield-statistics",
          name: "Statistics",
          children: [
            {
              id: "statistician",
              name: "Statistician",
              value: 1,
              relatedTo: ["data-analyst", "biostatistician"],
            },
            {
              id: "biostatistician",
              name: "Biostatistician",
              value: 1,
              relatedTo: ["epidemiologist", "statistician", "data-scientist"],
            },
            {
              id: "actuarial-scientist",
              name: "Actuarial Scientist",
              value: 1,
              relatedTo: ["actuary"],
            },
          ],
        },
      ],
    },
  ],
};
