// data/domains/engineering.ts
import type { TreeNode } from "../types";

export const engineeringDomain: TreeNode = {
  id: "domain-engineering",
  name: "Engineering",
  children: [
    {
      name: "Civil & Environment",
      children: [
        {
          name: "Civil Engineering",
          children: [
            { id: "structural-eng", name: "Structural Engineer", value: 1 },
            { id: "architectural-eng", name: "Architectural Eng.", value: 1 },
            { id: "surveyor", name: "Surveyor", value: 1 },
          ],
        },
        {
          name: "Environmental Eng",
          children: [
            {
              id: "water-treatment-eng",
              name: "Water Treatment Eng.",
              value: 1,
            },
            { id: "bio-systems-eng", name: "Bio-Systems Eng.", value: 1 },
            { id: "agricultural-eng", name: "Agricultural Eng.", value: 1 },
          ],
        },
        {
          name: "Marine Engineering",
          children: [
            { id: "naval-architect", name: "Naval Architect", value: 1 },
            { id: "propulsion-eng", name: "Propulsion Engineer", value: 1 },
          ],
        },
      ],
    },
    {
      name: "Mechanical & Aerospace",
      children: [
        {
          name: "Mechanical Eng",
          children: [
            { id: "manufacturing-eng", name: "Manufacturing Eng.", value: 1 },
            { id: "robotics-eng", name: "Robotics & Mechatronics", value: 1 },
            { id: "automotive-eng", name: "Automotive Engineer", value: 1 },
          ],
        },
        {
          name: "Aerospace Eng",
          children: [
            { id: "aerodynamics-eng", name: "Aerodynamics Eng.", value: 1 },
            { id: "spacecraft-eng", name: "Spacecraft / Satellite", value: 1 },
            {
              id: "aircraft-design",
              name: "Aircraft / Rocket Design",
              value: 1,
            },
          ],
        },
        {
          name: "Materials & Mining",
          children: [
            { id: "corrosion-eng", name: "Corrosion Engineer", value: 1 },
            { id: "mining-eng", name: "Mining Engineer", value: 1 },
            { id: "metallurgist", name: "Metallurgical Eng.", value: 1 },
          ],
        },
      ],
    },
    {
      name: "Electrical & Computing",
      children: [
        {
          name: "Electrical Eng",
          children: [
            { id: "power-systems-eng", name: "Power Systems Eng.", value: 1 },
            {
              id: "control-systems-eng",
              name: "Control Systems Eng.",
              value: 1,
            },
            { id: "electronics-eng", name: "Electronics Engineer", value: 1 },
          ],
        },
        {
          name: "Computer Eng",
          children: [
            {
              id: "embedded-systems-eng",
              name: "Embedded Systems Eng.",
              value: 1,
            },
            { id: "fpga-eng", name: "FPGA Engineer", value: 1 },
            {
              id: "network-hardware-eng",
              name: "Network Hardware Eng.",
              value: 1,
            },
          ],
        },
        {
          name: "Photonics & Audio",
          children: [
            {
              id: "optoelectronics-eng",
              name: "Optoelectronics Eng.",
              value: 1,
            },
            { id: "broadcast-eng", name: "Broadcast Engineer", value: 1 },
            { id: "acoustical-eng", name: "Acoustical Engineer", value: 1 },
          ],
        },
      ],
    },
    {
      name: "Chemical & Biological",
      children: [
        {
          name: "Chemical Eng",
          children: [
            { id: "process-plant-eng", name: "Process Plant Eng.", value: 1 },
            { id: "petroleum-eng", name: "Petroleum Engineer", value: 1 },
            { id: "nuclear-eng", name: "Nuclear Engineer", value: 1 },
          ],
        },
        {
          name: "Biomedical Eng",
          children: [
            { id: "tissue-eng", name: "Tissue Engineer", value: 1 },
            {
              id: "prosthetics-designer",
              name: "Prosthetics Designer",
              value: 1,
            },
            {
              id: "medical-imaging-eng",
              name: "Medical Imaging Tech",
              value: 1,
            },
          ],
        },
      ],
    },
  ],
};
