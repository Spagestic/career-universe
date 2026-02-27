import type { TreeNode } from "../types";

export const engineeringDomain: TreeNode = {
  id: "domain-engineering",
  name: "Engineering",
  children: [
    {
      id: "field-civil-environment",
      name: "Civil & Environment",
      children: [
        {
          id: "subfield-civil-eng",
          name: "Civil Engineering",
          children: [
            {
              id: "structural-eng",
              name: "Structural Engineer",
              value: 1,
              relatedTo: ["seismologist", "architectural-eng"],
            },
            {
              id: "architectural-eng",
              name: "Architectural Engineer",
              value: 1,
              relatedTo: ["interior-designer"],
            },
            { id: "surveyor", name: "Surveyor", value: 1 },
          ],
        },
        {
          id: "subfield-environmental-eng",
          name: "Environmental Eng",
          children: [
            {
              id: "water-treatment-eng",
              name: "Water Treatment Engineer",
              value: 1,
            },
            { id: "bio-systems-eng", name: "Bio-Systems Engineer", value: 1 },
            {
              id: "agricultural-eng",
              name: "Agricultural Engineer",
              value: 1,
            },
          ],
        },
        {
          id: "subfield-marine-eng",
          name: "Marine Engineering",
          children: [
            {
              id: "naval-architect",
              name: "Naval Architect",
              value: 1,
              relatedTo: ["marine-biologist"],
            },
            { id: "propulsion-eng", name: "Propulsion Engineer", value: 1 },
          ],
        },
      ],
    },
    {
      id: "field-mechanical-aerospace",
      name: "Mechanical & Aerospace",
      children: [
        {
          id: "subfield-mechanical-eng",
          name: "Mechanical Eng",
          children: [
            {
              id: "manufacturing-eng",
              name: "Manufacturing Engineer",
              value: 1,
            },
            {
              id: "robotics-eng",
              name: "Robotics & Mechatronics",
              value: 1,
              relatedTo: [
                "embedded-systems-eng",
                "control-systems-eng",
                "ml-engineer",
              ],
            },
            {
              id: "automotive-eng",
              name: "Automotive Engineer",
              value: 1,
            },
          ],
        },
        {
          id: "subfield-aerospace-eng",
          name: "Aerospace Eng",
          children: [
            {
              id: "aerodynamics-eng",
              name: "Aerodynamics Engineer",
              value: 1,
            },
            {
              id: "spacecraft-eng",
              name: "Spacecraft / Satellite",
              value: 1,
              relatedTo: ["astrophysicist"],
            },
            {
              id: "aircraft-design",
              name: "Aircraft / Rocket Design",
              value: 1,
            },
          ],
        },
        {
          id: "subfield-materials-mining",
          name: "Materials & Mining",
          children: [
            {
              id: "corrosion-eng",
              name: "Corrosion Engineer",
              value: 1,
              relatedTo: ["polymer-scientist"],
            },
            {
              id: "mining-eng",
              name: "Mining Engineer",
              value: 1,
              relatedTo: ["geologist"],
            },
            { id: "metallurgist", name: "Metallurgical Engineer", value: 1 },
          ],
        },
      ],
    },
    {
      id: "field-electrical-computing",
      name: "Electrical & Computing",
      children: [
        {
          id: "subfield-electrical-eng",
          name: "Electrical Eng",
          children: [
            {
              id: "power-systems-eng",
              name: "Power Systems Engineer",
              value: 1,
            },
            {
              id: "control-systems-eng",
              name: "Control Systems Engineer",
              value: 1,
              relatedTo: ["robotics-eng"],
            },
            {
              id: "electronics-eng",
              name: "Electronics Engineer",
              value: 1,
              relatedTo: ["embedded-systems-eng", "quantum-hardware-eng"],
            },
          ],
        },
        {
          id: "subfield-computer-eng",
          name: "Computer Eng",
          children: [
            {
              id: "embedded-systems-eng",
              name: "Embedded Systems Engineer",
              value: 1,
              relatedTo: ["robotics-eng", "fpga-eng"],
            },
            {
              id: "fpga-eng",
              name: "FPGA Engineer",
              value: 1,
              relatedTo: ["quantum-hardware-eng"],
            },
            {
              id: "network-hardware-eng",
              name: "Network Hardware Engineer",
              value: 1,
            },
          ],
        },
        {
          id: "subfield-photonics-audio",
          name: "Photonics & Audio",
          children: [
            {
              id: "optoelectronics-eng",
              name: "Optoelectronics Engineer",
              value: 1,
            },
            {
              id: "broadcast-eng",
              name: "Broadcast Engineer",
              value: 1,
            },
            {
              id: "acoustical-eng",
              name: "Acoustical Engineer",
              value: 1,
              relatedTo: ["sound-designer"],
            },
          ],
        },
      ],
    },
    {
      id: "field-chemical-biological",
      name: "Chemical & Biological",
      children: [
        {
          id: "subfield-chemical-eng",
          name: "Chemical Eng",
          children: [
            {
              id: "process-plant-eng",
              name: "Process Plant Engineer",
              value: 1,
            },
            {
              id: "petroleum-eng",
              name: "Petroleum Engineer",
              value: 1,
            },
            {
              id: "nuclear-eng",
              name: "Nuclear Engineer",
              value: 1,
              relatedTo: ["accelerator-physicist"],
            },
          ],
        },
        {
          id: "subfield-biomedical-eng",
          name: "Biomedical Eng",
          children: [
            {
              id: "tissue-eng",
              name: "Tissue Engineer",
              value: 1,
              relatedTo: ["surgeon", "pharmacologist"],
            },
            {
              id: "prosthetics-designer",
              name: "Prosthetics Designer",
              value: 1,
              relatedTo: ["industrial-designer", "occupational-therapist"],
            },
            {
              id: "medical-imaging-eng",
              name: "Medical Imaging Tech",
              value: 1,
              relatedTo: ["radiologist"],
            },
          ],
        },
      ],
    },
  ],
};
