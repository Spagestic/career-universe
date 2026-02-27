import type { TreeNode } from "../types";

export const agricultureDomain: TreeNode = {
  id: "domain-agriculture",
  name: "Agriculture & Environment",
  children: [
    {
      id: "field-crop-animal",
      name: "Crop & Animal Science",
      children: [
        {
          id: "subfield-agronomy",
          name: "Agronomy & Crop Science",
          children: [
            {
              id: "agronomist",
              name: "Agronomist",
              value: 1,
              relatedTo: [
                "plant-geneticist",
                "agricultural-eng",
                "soil-scientist",
              ],
            },
            {
              id: "precision-ag-tech",
              name: "Precision Ag Technologist",
              value: 1,
              relatedTo: [
                "agricultural-eng",
                "data-scientist",
                "gis-specialist",
              ],
            },
            {
              id: "seed-scientist",
              name: "Seed Scientist",
              value: 1,
              relatedTo: ["plant-geneticist", "agronomist"],
            },
          ],
        },
        {
          id: "subfield-animal-science",
          name: "Animal Science",
          children: [
            {
              id: "animal-scientist",
              name: "Animal Scientist",
              value: 1,
              relatedTo: ["veterinarian", "zoologist"],
            },
            {
              id: "dairy-scientist",
              name: "Dairy Scientist",
              value: 1,
              relatedTo: ["food-scientist", "animal-scientist"],
            },
            {
              id: "aquaculture-manager",
              name: "Aquaculture Manager",
              value: 1,
              relatedTo: ["marine-biologist", "animal-scientist"],
            },
          ],
        },
        {
          id: "subfield-soil-science",
          name: "Soil & Land",
          children: [
            {
              id: "soil-scientist",
              name: "Soil Scientist",
              value: 1,
              relatedTo: ["geologist", "agronomist"],
            },
            {
              id: "land-manager",
              name: "Land Manager",
              value: 1,
              relatedTo: ["conservation-scientist", "landscape-architect"],
            },
          ],
        },
      ],
    },
    {
      id: "field-food-science",
      name: "Food Science & Safety",
      children: [
        {
          id: "subfield-food-tech",
          name: "Food Technology",
          children: [
            {
              id: "food-scientist",
              name: "Food Scientist",
              value: 1,
              relatedTo: [
                "microbiologist",
                "chef",
                "food-process-eng",
                "nutritionist",
              ],
            },
            {
              id: "flavor-chemist",
              name: "Flavor Chemist",
              value: 1,
              relatedTo: ["food-scientist", "biochemist"],
            },
            {
              id: "food-safety-inspector",
              name: "Food Safety Inspector",
              value: 1,
              relatedTo: ["microbiologist", "compliance-officer"],
            },
          ],
        },
        {
          id: "subfield-brewing-fermentation",
          name: "Brewing & Fermentation",
          children: [
            {
              id: "brewmaster",
              name: "Brewmaster",
              value: 1,
              relatedTo: ["food-scientist", "biochemist"],
            },
            {
              id: "fermentation-scientist",
              name: "Fermentation Scientist",
              value: 1,
              relatedTo: ["microbiologist", "biochemist"],
            },
          ],
        },
        {
          id: "subfield-textile",
          name: "Textile & Fiber Science",
          children: [
            {
              id: "textile-technologist",
              name: "Textile Technologist",
              value: 1,
              relatedTo: ["fashion-designer", "materials-scientist"],
            },
          ],
        },
      ],
    },
    {
      id: "field-forestry-natural-resources",
      name: "Forestry & Natural Resources",
      children: [
        {
          id: "subfield-forestry",
          name: "Forestry",
          children: [
            {
              id: "forester",
              name: "Forester",
              value: 1,
              relatedTo: ["conservation-scientist", "land-manager"],
            },
            {
              id: "wildfire-scientist",
              name: "Wildfire Scientist",
              value: 1,
              relatedTo: ["climatologist", "meteorologist"],
            },
            {
              id: "forest-ecologist",
              name: "Forest Ecologist",
              value: 1,
              relatedTo: ["wildlife-biologist", "botanist"],
            },
          ],
        },
        {
          id: "subfield-horticulture",
          name: "Horticulture",
          children: [
            {
              id: "horticulturist",
              name: "Horticulturist",
              value: 1,
              relatedTo: ["botanist", "landscape-architect", "arborist"],
            },
            {
              id: "viticulturist",
              name: "Viticulturist",
              value: 1,
              relatedTo: ["horticulturist", "sommelier"],
            },
          ],
        },
      ],
    },
    {
      id: "field-environmental-mgmt",
      name: "Environmental Management",
      children: [
        {
          id: "subfield-env-consulting",
          name: "Environmental Consulting",
          children: [
            {
              id: "environmental-consultant",
              name: "Environmental Consultant",
              value: 1,
              relatedTo: [
                "sustainability-consultant",
                "conservation-scientist",
                "environmental-lawyer",
              ],
            },
            {
              id: "env-impact-assessor",
              name: "Env. Impact Assessor",
              value: 1,
              relatedTo: ["environmental-consultant", "urban-planner"],
            },
          ],
        },
        {
          id: "subfield-waste-water",
          name: "Waste & Water Management",
          children: [
            {
              id: "water-resource-manager",
              name: "Water Resource Manager",
              value: 1,
              relatedTo: ["hydrologist", "water-treatment-eng"],
            },
            {
              id: "waste-management-specialist",
              name: "Waste Management Specialist",
              value: 1,
              relatedTo: ["environmental-consultant"],
            },
          ],
        },
        {
          id: "subfield-wildlife-mgmt",
          name: "Wildlife Management",
          children: [
            {
              id: "park-ranger",
              name: "Park Ranger",
              value: 1,
              relatedTo: ["conservation-scientist", "forester"],
            },
            {
              id: "wildlife-manager",
              name: "Wildlife Manager",
              value: 1,
              relatedTo: ["wildlife-biologist", "conservation-scientist"],
            },
          ],
        },
      ],
    },
  ],
};
