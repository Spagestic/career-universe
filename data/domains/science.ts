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
              name: "Quantum Hardware Eng.",
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
            {
              id: "astrophysicist",
              name: "Astrophysicist",
              value: 1,
              relatedTo: ["spacecraft-eng", "cosmologist"],
            },
            {
              id: "cosmologist",
              name: "Cosmologist",
              value: 1,
              relatedTo: ["astrophysicist", "computational-mathematician"],
            },
            {
              id: "planetarium-director",
              name: "Planetarium Director",
              value: 1,
              relatedTo: ["science-educator", "museum-curator"],
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
              relatedTo: ["nuclear-eng"],
            },
            {
              id: "detector-engineer",
              name: "Detector Engineer",
              value: 1,
              relatedTo: ["electronics-eng", "optoelectronics-eng"],
            },
            {
              id: "theoretical-physicist",
              name: "Theoretical Physicist",
              value: 1,
              relatedTo: ["mathematician", "computational-mathematician"],
            },
          ],
        },
        {
          id: "subfield-applied-physics",
          name: "Applied Physics",
          children: [
            {
              id: "plasma-physicist",
              name: "Plasma Physicist",
              value: 1,
              relatedTo: ["nuclear-eng", "materials-scientist"],
            },
            {
              id: "laser-scientist",
              name: "Laser Scientist",
              value: 1,
              relatedTo: ["optoelectronics-eng", "medical-physicist"],
            },
            {
              id: "medical-physicist",
              name: "Medical Physicist",
              value: 1,
              relatedTo: ["radiologist", "medical-imaging-eng"],
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
              relatedTo: ["family-physician", "genomics-researcher"],
            },
            {
              id: "genomics-researcher",
              name: "Genomics Researcher",
              value: 1,
              relatedTo: ["bioinformatician", "genetic-counselor"],
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
              relatedTo: ["conservation-scientist", "zoologist"],
            },
            {
              id: "conservation-scientist",
              name: "Conservation Scientist",
              value: 1,
              relatedTo: [
                "climatologist",
                "urban-planner",
                "environmental-consultant",
              ],
            },
            {
              id: "marine-biologist",
              name: "Marine Biologist",
              value: 1,
              relatedTo: ["naval-architect", "oceanographer"],
            },
            {
              id: "zoologist",
              name: "Zoologist",
              value: 1,
              relatedTo: ["wildlife-biologist", "veterinarian"],
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
              relatedTo: ["pharmacologist", "food-scientist"],
            },
            {
              id: "virologist",
              name: "Virologist",
              value: 1,
              relatedTo: ["epidemiologist", "immunologist"],
            },
            {
              id: "immunologist",
              name: "Immunologist",
              value: 1,
              relatedTo: ["virologist", "pharmacologist"],
            },
          ],
        },
        {
          id: "subfield-neuroscience",
          name: "Neuroscience",
          children: [
            {
              id: "neuroscientist",
              name: "Neuroscientist",
              value: 1,
              relatedTo: [
                "neuropsychologist",
                "computational-mathematician",
                "brain-computer-interface-eng",
              ],
            },
            {
              id: "neuroimaging-specialist",
              name: "Neuroimaging Specialist",
              value: 1,
              relatedTo: ["medical-imaging-eng", "radiologist"],
            },
            {
              id: "brain-computer-interface-eng",
              name: "BCI Engineer",
              value: 1,
              relatedTo: [
                "neuroscientist",
                "embedded-systems-eng",
                "prosthetics-designer",
              ],
            },
          ],
        },
        {
          id: "subfield-botany",
          name: "Botany & Plant Science",
          children: [
            {
              id: "botanist",
              name: "Botanist",
              value: 1,
              relatedTo: ["horticulturist", "agronomist"],
            },
            {
              id: "plant-geneticist",
              name: "Plant Geneticist",
              value: 1,
              relatedTo: ["genomics-researcher", "agronomist"],
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
              relatedTo: ["pharmacologist", "biochemist"],
            },
            {
              id: "polymer-scientist",
              name: "Polymer Scientist",
              value: 1,
              relatedTo: ["materials-scientist", "corrosion-eng"],
            },
            {
              id: "biochemist",
              name: "Biochemist",
              value: 1,
              relatedTo: ["medicinal-chemist", "pharmacologist"],
            },
          ],
        },
        {
          id: "subfield-analytical-chem",
          name: "Analytical Chemistry",
          children: [
            {
              id: "lab-analyst",
              name: "Lab Analyst",
              value: 1,
              relatedTo: ["clinical-lab-tech"],
            },
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
        {
          id: "subfield-physical-chem",
          name: "Physical & Materials Chem",
          children: [
            {
              id: "materials-scientist",
              name: "Materials Scientist",
              value: 1,
              relatedTo: ["metallurgist", "polymer-scientist", "corrosion-eng"],
            },
            {
              id: "electrochemist",
              name: "Electrochemist",
              value: 1,
              relatedTo: ["battery-engineer", "renewable-energy-eng"],
            },
            {
              id: "nanotechnologist",
              name: "Nanotechnologist",
              value: 1,
              relatedTo: ["materials-scientist", "semiconductor-eng"],
            },
          ],
        },
      ],
    },
    {
      id: "field-earth-sciences",
      name: "Earth & Ocean Sciences",
      children: [
        {
          id: "subfield-geology",
          name: "Geology",
          children: [
            {
              id: "geologist",
              name: "Geologist",
              value: 1,
              relatedTo: ["mining-eng", "petroleum-eng"],
            },
            {
              id: "seismologist",
              name: "Seismologist",
              value: 1,
              relatedTo: ["structural-eng"],
            },
            {
              id: "volcanologist",
              name: "Volcanologist",
              value: 1,
              relatedTo: ["geologist", "seismologist"],
            },
          ],
        },
        {
          id: "subfield-meteorology",
          name: "Meteorology & Climate",
          children: [
            {
              id: "meteorologist",
              name: "Meteorologist",
              value: 1,
              relatedTo: ["climatologist", "broadcast-eng"],
            },
            {
              id: "climatologist",
              name: "Climatologist",
              value: 1,
              relatedTo: [
                "conservation-scientist",
                "policy-analyst",
                "environmental-consultant",
              ],
            },
          ],
        },
        {
          id: "subfield-oceanography",
          name: "Oceanography",
          children: [
            {
              id: "oceanographer",
              name: "Oceanographer",
              value: 1,
              relatedTo: ["marine-biologist", "climatologist"],
            },
            {
              id: "hydrologist",
              name: "Hydrologist",
              value: 1,
              relatedTo: ["water-treatment-eng", "environmental-consultant"],
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
              relatedTo: ["cryptographer", "theoretical-physicist"],
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
              relatedTo: ["ml-engineer", "neuroscientist"],
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
              relatedTo: ["data-analyst", "biostatistician", "actuary"],
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
              relatedTo: ["actuary", "statistician"],
            },
          ],
        },
      ],
    },
  ],
};
