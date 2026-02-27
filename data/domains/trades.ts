import type { TreeNode } from "../types";

export const tradesDomain: TreeNode = {
  id: "domain-trades",
  name: "Trades & Construction",
  children: [
    {
      id: "field-construction",
      name: "Construction",
      children: [
        {
          id: "subfield-building-trades",
          name: "Building Trades",
          children: [
            {
              id: "carpenter",
              name: "Carpenter",
              value: 1,
              relatedTo: ["set-designer"],
            },
            {
              id: "mason",
              name: "Mason / Bricklayer",
              value: 1,
            },
            {
              id: "roofer",
              name: "Roofer",
              value: 1,
            },
            {
              id: "glazier",
              name: "Glazier",
              value: 1,
            },
            {
              id: "ironworker",
              name: "Ironworker",
              value: 1,
              relatedTo: ["structural-eng", "welder"],
            },
          ],
        },
        {
          id: "subfield-construction-mgmt",
          name: "Construction Management",
          children: [
            {
              id: "construction-manager",
              name: "Construction Manager",
              value: 1,
              relatedTo: ["project-manager", "architect"],
            },
            {
              id: "construction-estimator",
              name: "Construction Estimator",
              value: 1,
              relatedTo: ["appraiser", "construction-manager"],
            },
            {
              id: "building-inspector",
              name: "Building Inspector",
              value: 1,
              relatedTo: ["compliance-officer", "structural-eng"],
            },
          ],
        },
      ],
    },
    {
      id: "field-mechanical-trades",
      name: "Mechanical Trades",
      children: [
        {
          id: "subfield-automotive-trades",
          name: "Automotive",
          children: [
            {
              id: "automotive-technician",
              name: "Automotive Technician",
              value: 1,
              relatedTo: ["automotive-eng"],
            },
            {
              id: "diesel-mechanic",
              name: "Diesel Mechanic",
              value: 1,
            },
            {
              id: "aircraft-mechanic",
              name: "Aircraft Mechanic",
              value: 1,
              relatedTo: ["avionics-eng", "aircraft-design"],
            },
          ],
        },
        {
          id: "subfield-metalwork",
          name: "Metalwork & Fabrication",
          children: [
            {
              id: "welder",
              name: "Welder",
              value: 1,
              relatedTo: ["metallurgist", "ironworker"],
            },
            {
              id: "cnc-machinist",
              name: "CNC Machinist",
              value: 1,
              relatedTo: ["manufacturing-eng"],
            },
            {
              id: "sheet-metal-worker",
              name: "Sheet Metal Worker",
              value: 1,
            },
            {
              id: "tool-die-maker",
              name: "Tool & Die Maker",
              value: 1,
              relatedTo: ["cnc-machinist", "manufacturing-eng"],
            },
          ],
        },
        {
          id: "subfield-hvac-plumbing",
          name: "HVAC & Plumbing",
          children: [
            {
              id: "hvac-technician",
              name: "HVAC Technician",
              value: 1,
              relatedTo: ["hvac-engineer"],
            },
            {
              id: "plumber",
              name: "Plumber",
              value: 1,
              relatedTo: ["water-treatment-eng"],
            },
            {
              id: "pipefitter",
              name: "Pipefitter / Steamfitter",
              value: 1,
              relatedTo: ["plumber", "process-plant-eng"],
            },
          ],
        },
      ],
    },
    {
      id: "field-electrical-trades",
      name: "Electrical Trades",
      children: [
        {
          id: "subfield-electrical-work",
          name: "Electrical Work",
          children: [
            {
              id: "electrician",
              name: "Electrician",
              value: 1,
              relatedTo: ["power-systems-eng"],
            },
            {
              id: "lineworker",
              name: "Power Lineworker",
              value: 1,
              relatedTo: ["electrician", "renewable-energy-eng"],
            },
            {
              id: "elevator-technician",
              name: "Elevator Technician",
              value: 1,
              relatedTo: ["electrician"],
            },
          ],
        },
        {
          id: "subfield-telecom-install",
          name: "Telecom & Low Voltage",
          children: [
            {
              id: "telecom-installer",
              name: "Telecom Installer",
              value: 1,
              relatedTo: ["telecom-eng", "network-engineer"],
            },
            {
              id: "solar-installer",
              name: "Solar Panel Installer",
              value: 1,
              relatedTo: ["renewable-energy-eng", "electrician"],
            },
            {
              id: "security-systems-tech",
              name: "Security Systems Tech",
              value: 1,
              relatedTo: ["security-analyst", "electrician"],
            },
          ],
        },
      ],
    },
    {
      id: "field-landscape-outdoor",
      name: "Landscape & Outdoor",
      children: [
        {
          id: "subfield-landscaping",
          name: "Landscaping",
          children: [
            {
              id: "landscape-architect",
              name: "Landscape Architect",
              value: 1,
              relatedTo: ["architect", "urban-planner", "horticulturist"],
            },
            {
              id: "arborist",
              name: "Arborist",
              value: 1,
              relatedTo: ["botanist", "horticulturist"],
            },
            {
              id: "irrigation-specialist",
              name: "Irrigation Specialist",
              value: 1,
              relatedTo: ["water-treatment-eng", "agricultural-eng"],
            },
          ],
        },
        {
          id: "subfield-heavy-equipment",
          name: "Heavy Equipment",
          children: [
            {
              id: "crane-operator",
              name: "Crane Operator",
              value: 1,
              relatedTo: ["construction-manager"],
            },
            {
              id: "heavy-equipment-operator",
              name: "Heavy Equipment Operator",
              value: 1,
              relatedTo: ["mining-eng"],
            },
          ],
        },
      ],
    },
    {
      id: "field-hospitality-services",
      name: "Hospitality & Services",
      children: [
        {
          id: "subfield-hospitality",
          name: "Hospitality",
          children: [
            {
              id: "hotel-manager",
              name: "Hotel Manager",
              value: 1,
              relatedTo: ["restaurant-manager", "event-planner"],
            },
            {
              id: "restaurant-manager",
              name: "Restaurant Manager",
              value: 1,
              relatedTo: ["chef", "event-planner"],
            },
            {
              id: "concierge",
              name: "Concierge",
              value: 1,
            },
          ],
        },
        {
          id: "subfield-transportation-services",
          name: "Transportation",
          children: [
            {
              id: "commercial-pilot",
              name: "Commercial Pilot",
              value: 1,
              relatedTo: ["air-traffic-controller", "avionics-eng"],
            },
            {
              id: "air-traffic-controller",
              name: "Air Traffic Controller",
              value: 1,
              relatedTo: ["commercial-pilot"],
            },
            {
              id: "ship-captain",
              name: "Ship Captain",
              value: 1,
              relatedTo: ["naval-architect", "offshore-eng"],
            },
          ],
        },
      ],
    },
  ],
};
