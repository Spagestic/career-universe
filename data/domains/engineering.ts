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
              name: "Architectural Eng.",
              value: 1,
              relatedTo: ["interior-designer", "architect"],
            },
            {
              id: "surveyor",
              name: "Surveyor",
              value: 1,
              relatedTo: ["gis-specialist", "urban-planner"],
            },
            {
              id: "geotechnical-eng",
              name: "Geotechnical Engineer",
              value: 1,
              relatedTo: ["geologist", "mining-eng"],
            },
          ],
        },
        {
          id: "subfield-environmental-eng",
          name: "Environmental Eng",
          children: [
            {
              id: "water-treatment-eng",
              name: "Water Treatment Eng.",
              value: 1,
              relatedTo: ["hydrologist"],
            },
            {
              id: "bio-systems-eng",
              name: "Bio-Systems Eng.",
              value: 1,
              relatedTo: ["agricultural-eng"],
            },
            {
              id: "agricultural-eng",
              name: "Agricultural Eng.",
              value: 1,
              relatedTo: ["agronomist", "precision-ag-tech"],
            },
            {
              id: "renewable-energy-eng",
              name: "Renewable Energy Eng.",
              value: 1,
              relatedTo: [
                "power-systems-eng",
                "electrochemist",
                "sustainability-consultant",
              ],
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
            {
              id: "propulsion-eng",
              name: "Propulsion Engineer",
              value: 1,
              relatedTo: ["aerospace-propulsion"],
            },
            {
              id: "offshore-eng",
              name: "Offshore Engineer",
              value: 1,
              relatedTo: ["petroleum-eng", "oceanographer"],
            },
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
              name: "Manufacturing Eng.",
              value: 1,
              relatedTo: ["industrial-eng", "cnc-machinist"],
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
              relatedTo: ["automotive-technician", "battery-engineer"],
            },
            {
              id: "hvac-engineer",
              name: "HVAC Engineer",
              value: 1,
              relatedTo: ["hvac-technician"],
            },
            {
              id: "industrial-eng",
              name: "Industrial Engineer",
              value: 1,
              relatedTo: [
                "operations-researcher",
                "supply-chain-mgr",
                "manufacturing-eng",
              ],
            },
          ],
        },
        {
          id: "subfield-aerospace-eng",
          name: "Aerospace Eng",
          children: [
            {
              id: "aerodynamics-eng",
              name: "Aerodynamics Eng.",
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
              relatedTo: ["aerospace-propulsion"],
            },
            {
              id: "aerospace-propulsion",
              name: "Aerospace Propulsion Eng.",
              value: 1,
              relatedTo: ["propulsion-eng", "aircraft-design"],
            },
            {
              id: "avionics-eng",
              name: "Avionics Engineer",
              value: 1,
              relatedTo: ["electronics-eng", "embedded-systems-eng"],
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
              relatedTo: ["polymer-scientist", "materials-scientist"],
            },
            {
              id: "mining-eng",
              name: "Mining Engineer",
              value: 1,
              relatedTo: ["geologist", "geotechnical-eng"],
            },
            {
              id: "metallurgist",
              name: "Metallurgical Eng.",
              value: 1,
              relatedTo: ["materials-scientist", "welder"],
            },
            {
              id: "battery-engineer",
              name: "Battery Engineer",
              value: 1,
              relatedTo: [
                "electrochemist",
                "renewable-energy-eng",
                "automotive-eng",
              ],
            },
            {
              id: "semiconductor-eng",
              name: "Semiconductor Engineer",
              value: 1,
              relatedTo: ["nanotechnologist", "electronics-eng", "fpga-eng"],
            },
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
              name: "Power Systems Eng.",
              value: 1,
              relatedTo: ["renewable-energy-eng", "electrician"],
            },
            {
              id: "control-systems-eng",
              name: "Control Systems Eng.",
              value: 1,
              relatedTo: ["robotics-eng", "industrial-eng"],
            },
            {
              id: "electronics-eng",
              name: "Electronics Engineer",
              value: 1,
              relatedTo: [
                "embedded-systems-eng",
                "quantum-hardware-eng",
                "semiconductor-eng",
              ],
            },
            {
              id: "telecom-eng",
              name: "Telecom Engineer",
              value: 1,
              relatedTo: ["network-hardware-eng", "broadcast-eng"],
            },
          ],
        },
        {
          id: "subfield-computer-eng",
          name: "Computer Eng",
          children: [
            {
              id: "embedded-systems-eng",
              name: "Embedded Systems Eng.",
              value: 1,
              relatedTo: [
                "robotics-eng",
                "fpga-eng",
                "avionics-eng",
                "brain-computer-interface-eng",
              ],
            },
            {
              id: "fpga-eng",
              name: "FPGA Engineer",
              value: 1,
              relatedTo: ["quantum-hardware-eng", "semiconductor-eng"],
            },
            {
              id: "network-hardware-eng",
              name: "Network Hardware Eng.",
              value: 1,
              relatedTo: ["telecom-eng"],
            },
          ],
        },
        {
          id: "subfield-photonics-audio",
          name: "Photonics & Audio",
          children: [
            {
              id: "optoelectronics-eng",
              name: "Optoelectronics Eng.",
              value: 1,
              relatedTo: ["laser-scientist", "detector-engineer"],
            },
            {
              id: "broadcast-eng",
              name: "Broadcast Engineer",
              value: 1,
              relatedTo: ["telecom-eng", "video-editor"],
            },
            {
              id: "acoustical-eng",
              name: "Acoustical Engineer",
              value: 1,
              relatedTo: ["sound-designer", "architect"],
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
              name: "Process Plant Eng.",
              value: 1,
              relatedTo: ["industrial-eng"],
            },
            {
              id: "petroleum-eng",
              name: "Petroleum Engineer",
              value: 1,
              relatedTo: ["geologist", "offshore-eng"],
            },
            {
              id: "nuclear-eng",
              name: "Nuclear Engineer",
              value: 1,
              relatedTo: ["accelerator-physicist", "plasma-physicist"],
            },
            {
              id: "food-process-eng",
              name: "Food Process Engineer",
              value: 1,
              relatedTo: ["food-scientist", "manufacturing-eng"],
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
              relatedTo: [
                "industrial-designer",
                "occupational-therapist",
                "brain-computer-interface-eng",
              ],
            },
            {
              id: "medical-imaging-eng",
              name: "Medical Imaging Tech",
              value: 1,
              relatedTo: [
                "radiologist",
                "medical-physicist",
                "neuroimaging-specialist",
              ],
            },
            {
              id: "biomedical-data-eng",
              name: "Biomedical Data Eng.",
              value: 1,
              relatedTo: ["bioinformatician", "data-engineer"],
            },
          ],
        },
      ],
    },
  ],
};
