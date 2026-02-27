// data/domains/science.ts
import type { TreeNode } from "../types";

export const scienceDomain: TreeNode = {
  id: "domain-science",
  name: "Science",
  children: [
    {
      name: "Physics",
      children: [
        {
          name: "Quantum Physics",
          children: [
            { id: "quantum-researcher", name: "Quantum Researcher", value: 1 },
            { id: "quantum-hardware", name: "Quantum Hardware Eng.", value: 1 },
            { id: "quantum-software", name: "Quantum Software Dev", value: 1 },
          ],
        },
        {
          name: "Astrophysics",
          children: [
            { id: "astrophysicist", name: "Astrophysicist", value: 1 },
            { id: "cosmologist", name: "Cosmologist", value: 1 },
            {
              id: "planetarium-director",
              name: "Planetarium Director",
              value: 1,
            },
          ],
        },
        {
          name: "Particle Physics",
          children: [
            {
              id: "accelerator-physicist",
              name: "Accelerator Physicist",
              value: 1,
            },
            { id: "detector-engineer", name: "Detector Engineer", value: 1 },
          ],
        },
      ],
    },
    {
      name: "Biology",
      children: [
        {
          name: "Genetics",
          children: [
            { id: "genetic-counselor", name: "Genetic Counselor", value: 1 },
            {
              id: "genomics-researcher",
              name: "Genomics Researcher",
              value: 1,
            },
            { id: "bioinformatician", name: "Bioinformatician", value: 1 },
          ],
        },
        {
          name: "Ecology",
          children: [
            { id: "wildlife-biologist", name: "Wildlife Biologist", value: 1 },
            {
              id: "conservation-scientist",
              name: "Conservation Scientist",
              value: 1,
            },
            { id: "marine-biologist", name: "Marine Biologist", value: 1 },
          ],
        },
        {
          name: "Microbiology",
          children: [
            { id: "microbiologist", name: "Microbiologist", value: 1 },
            { id: "virologist", name: "Virologist", value: 1 },
          ],
        },
      ],
    },
    {
      name: "Chemistry",
      children: [
        {
          name: "Organic Chemistry",
          children: [
            { id: "medicinal-chemist", name: "Medicinal Chemist", value: 1 },
            { id: "polymer-scientist", name: "Polymer Scientist", value: 1 },
          ],
        },
        {
          name: "Analytical Chemistry",
          children: [
            { id: "lab-analyst", name: "Lab Analyst", value: 1 },
            { id: "forensic-chemist", name: "Forensic Chemist", value: 1 },
            { id: "toxicologist", name: "Toxicologist", value: 1 },
          ],
        },
      ],
    },
    {
      name: "Earth Sciences",
      children: [
        {
          name: "Geology",
          children: [
            { id: "geologist", name: "Geologist", value: 1 },
            { id: "seismologist", name: "Seismologist", value: 1 },
          ],
        },
        {
          name: "Meteorology",
          children: [
            { id: "meteorologist", name: "Meteorologist", value: 1 },
            { id: "climatologist", name: "Climatologist", value: 1 },
          ],
        },
      ],
    },
  ],
};
