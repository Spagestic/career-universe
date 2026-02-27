import type { TreeNode } from "../types";

export const lawDomain: TreeNode = {
  id: "domain-law",
  name: "Law & Public Policy",
  children: [
    {
      id: "field-legal-practice",
      name: "Legal Practice",
      children: [
        {
          id: "subfield-corporate-law",
          name: "Corporate & Civil Law",
          children: [
            {
              id: "corporate-lawyer",
              name: "Corporate Lawyer",
              value: 1,
              relatedTo: ["compliance-officer"],
            },
            {
              id: "ip-lawyer",
              name: "Intellectual Property Lawyer",
              value: 1,
              relatedTo: ["patent-agent"],
            },
            {
              id: "contract-lawyer",
              name: "Contract Lawyer",
              value: 1,
            },
          ],
        },
        {
          id: "subfield-criminal-law",
          name: "Criminal Law",
          children: [
            {
              id: "criminal-defense-attorney",
              name: "Criminal Defense Attorney",
              value: 1,
            },
            {
              id: "prosecutor",
              name: "Prosecutor",
              value: 1,
            },
            {
              id: "judge",
              name: "Judge",
              value: 1,
            },
          ],
        },
        {
          id: "subfield-legal-support",
          name: "Legal Support",
          children: [
            { id: "paralegal", name: "Paralegal", value: 1 },
            {
              id: "legal-analyst",
              name: "Legal Analyst",
              value: 1,
            },
            {
              id: "patent-agent",
              name: "Patent Agent",
              value: 1,
              relatedTo: ["ip-lawyer"],
            },
            {
              id: "compliance-officer",
              name: "Compliance Officer",
              value: 1,
              relatedTo: ["auditor", "corporate-lawyer"],
            },
          ],
        },
      ],
    },
    {
      id: "field-public-policy-government",
      name: "Public Policy & Government",
      children: [
        {
          id: "subfield-policy",
          name: "Policy & Analysis",
          children: [
            {
              id: "policy-analyst",
              name: "Policy Analyst",
              value: 1,
              relatedTo: [
                "climatologist",
                "epidemiologist",
                "public-health-analyst",
              ],
            },
            {
              id: "legislative-aide",
              name: "Legislative Aide",
              value: 1,
            },
            {
              id: "economist",
              name: "Economist",
              value: 1,
              relatedTo: ["statistician", "financial-analyst", "data-analyst"],
            },
          ],
        },
        {
          id: "subfield-international-relations",
          name: "International Relations",
          children: [
            {
              id: "diplomat",
              name: "Diplomat",
              value: 1,
            },
            {
              id: "intelligence-analyst",
              name: "Intelligence Analyst",
              value: 1,
              relatedTo: ["data-analyst", "security-analyst"],
            },
          ],
        },
        {
          id: "subfield-urban-planning",
          name: "Urban & Regional Planning",
          children: [
            {
              id: "urban-planner",
              name: "Urban Planner",
              value: 1,
              relatedTo: [
                "architect",
                "conservation-scientist",
                "policy-analyst",
              ],
            },
            {
              id: "city-manager",
              name: "City Manager",
              value: 1,
            },
            {
              id: "transportation-planner",
              name: "Transportation Planner",
              value: 1,
              relatedTo: ["civil-eng", "urban-planner"],
            },
          ],
        },
      ],
    },
    {
      id: "field-criminal-justice",
      name: "Criminal Justice",
      children: [
        {
          id: "subfield-investigation",
          name: "Investigation",
          children: [
            {
              id: "detective",
              name: "Detective",
              value: 1,
              relatedTo: ["forensic-investigator", "security-analyst"],
            },
            {
              id: "forensic-investigator",
              name: "Forensic Investigator",
              value: 1,
              relatedTo: [
                "forensic-chemist",
                "forensic-accountant",
                "detective",
              ],
            },
          ],
        },
        {
          id: "subfield-corrections-support",
          name: "Corrections & Support",
          children: [
            {
              id: "probation-officer",
              name: "Probation Officer",
              value: 1,
            },
            {
              id: "victim-advocate",
              name: "Victim Advocate",
              value: 1,
              relatedTo: ["school-counselor"],
            },
            {
              id: "clinical-psychologist",
              name: "Clinical Psychologist",
              value: 1,
              relatedTo: ["psychiatrist", "school-counselor"],
            },
          ],
        },
      ],
    },
  ],
};
