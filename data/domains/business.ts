import type { TreeNode } from "../types";

export const businessDomain: TreeNode = {
  id: "domain-business",
  name: "Business & Finance",
  children: [
    {
      id: "field-finance-accounting",
      name: "Finance & Accounting",
      children: [
        {
          id: "subfield-corporate-finance",
          name: "Corporate Finance",
          children: [
            {
              id: "financial-analyst",
              name: "Financial Analyst",
              value: 1,
              relatedTo: ["data-analyst", "economist"],
            },
            {
              id: "investment-banker",
              name: "Investment Banker",
              value: 1,
              relatedTo: ["venture-capitalist"],
            },
            {
              id: "actuary",
              name: "Actuary",
              value: 1,
              relatedTo: ["actuarial-scientist", "statistician"],
            },
            {
              id: "financial-planner",
              name: "Financial Planner",
              value: 1,
              relatedTo: ["wealth-manager", "cpa"],
            },
            {
              id: "wealth-manager",
              name: "Wealth Manager",
              value: 1,
              relatedTo: ["financial-planner", "investment-banker"],
            },
          ],
        },
        {
          id: "subfield-accounting",
          name: "Accounting",
          children: [
            {
              id: "cpa",
              name: "Certified Public Accountant",
              value: 1,
              relatedTo: ["financial-planner"],
            },
            {
              id: "auditor",
              name: "Auditor",
              value: 1,
              relatedTo: ["compliance-officer"],
            },
            {
              id: "forensic-accountant",
              name: "Forensic Accountant",
              value: 1,
              relatedTo: ["forensic-chemist", "forensic-investigator"],
            },
            {
              id: "tax-advisor",
              name: "Tax Advisor",
              value: 1,
              relatedTo: ["cpa", "corporate-lawyer"],
            },
          ],
        },
        {
          id: "subfield-insurance",
          name: "Insurance",
          children: [
            {
              id: "underwriter",
              name: "Underwriter",
              value: 1,
              relatedTo: ["actuary", "risk-analyst"],
            },
            {
              id: "claims-adjuster",
              name: "Claims Adjuster",
              value: 1,
              relatedTo: ["forensic-investigator"],
            },
            {
              id: "risk-analyst",
              name: "Risk Analyst",
              value: 1,
              relatedTo: ["financial-analyst", "data-analyst"],
            },
          ],
        },
      ],
    },
    {
      id: "field-management-strategy",
      name: "Management & Strategy",
      children: [
        {
          id: "subfield-operations",
          name: "Operations",
          children: [
            {
              id: "supply-chain-mgr",
              name: "Supply Chain Manager",
              value: 1,
              relatedTo: [
                "operations-researcher",
                "logistics-coordinator",
                "industrial-eng",
              ],
            },
            {
              id: "logistics-coordinator",
              name: "Logistics Coordinator",
              value: 1,
              relatedTo: ["transportation-planner"],
            },
            {
              id: "project-manager",
              name: "Project Manager",
              value: 1,
              relatedTo: ["technical-program-manager", "film-producer"],
            },
          ],
        },
        {
          id: "subfield-human-resources",
          name: "Human Resources",
          children: [
            {
              id: "talent-acquisition",
              name: "Talent Acquisition",
              value: 1,
              relatedTo: ["hr-business-partner", "io-psychologist"],
            },
            {
              id: "hr-business-partner",
              name: "HR Business Partner",
              value: 1,
              relatedTo: ["corporate-trainer"],
            },
            {
              id: "comp-benefits-analyst",
              name: "Comp & Benefits Analyst",
              value: 1,
              relatedTo: ["data-analyst"],
            },
            {
              id: "io-psychologist",
              name: "I/O Psychologist",
              value: 1,
              relatedTo: [
                "talent-acquisition",
                "organizational-dev",
                "cognitive-psychologist",
              ],
            },
            {
              id: "organizational-dev",
              name: "Organizational Dev Specialist",
              value: 1,
              relatedTo: ["io-psychologist", "management-consultant"],
            },
          ],
        },
        {
          id: "subfield-real-estate",
          name: "Real Estate",
          children: [
            {
              id: "real-estate-agent",
              name: "Real Estate Agent",
              value: 1,
              relatedTo: ["appraiser"],
            },
            {
              id: "real-estate-developer",
              name: "Real Estate Developer",
              value: 1,
              relatedTo: ["urban-planner", "architect"],
            },
            {
              id: "appraiser",
              name: "Property Appraiser",
              value: 1,
              relatedTo: ["surveyor"],
            },
          ],
        },
      ],
    },
    {
      id: "field-marketing-sales",
      name: "Marketing & Sales",
      children: [
        {
          id: "subfield-marketing",
          name: "Marketing",
          children: [
            {
              id: "product-marketing-mgr",
              name: "Product Marketing Mgr",
              value: 1,
              relatedTo: ["product-manager", "brand-strategist"],
            },
            {
              id: "seo-specialist",
              name: "SEO Specialist",
              value: 1,
              relatedTo: ["data-analyst", "content-strategist"],
            },
            {
              id: "brand-strategist",
              name: "Brand Strategist",
              value: 1,
              relatedTo: ["graphic-designer", "copywriter"],
            },
            {
              id: "market-researcher",
              name: "Market Researcher",
              value: 1,
              relatedTo: ["data-analyst", "ux-researcher", "survey-researcher"],
            },
            {
              id: "social-media-manager",
              name: "Social Media Manager",
              value: 1,
              relatedTo: ["content-strategist", "public-relations-specialist"],
            },
            {
              id: "public-relations-specialist",
              name: "PR Specialist",
              value: 1,
              relatedTo: [
                "journalist",
                "social-media-manager",
                "communications-director",
              ],
            },
          ],
        },
        {
          id: "subfield-sales",
          name: "Sales",
          children: [
            {
              id: "account-executive",
              name: "Account Executive",
              value: 1,
              relatedTo: ["sales-engineer"],
            },
            {
              id: "sales-engineer",
              name: "Sales Engineer",
              value: 1,
              relatedTo: ["account-executive", "cloud-architect"],
            },
            {
              id: "customer-success",
              name: "Customer Success Mgr",
              value: 1,
            },
            {
              id: "business-dev-rep",
              name: "Business Dev Rep",
              value: 1,
              relatedTo: ["account-executive", "startup-founder"],
            },
          ],
        },
      ],
    },
    {
      id: "field-consulting-entrepreneurship",
      name: "Consulting & Entrepreneurship",
      children: [
        {
          id: "subfield-consulting",
          name: "Consulting",
          children: [
            {
              id: "management-consultant",
              name: "Management Consultant",
              value: 1,
              relatedTo: ["strategy-analyst", "organizational-dev"],
            },
            {
              id: "strategy-analyst",
              name: "Strategy Analyst",
              value: 1,
              relatedTo: ["data-analyst", "economist"],
            },
            {
              id: "it-consultant",
              name: "IT Consultant",
              value: 1,
              relatedTo: ["cloud-architect", "security-architect"],
            },
            {
              id: "sustainability-consultant",
              name: "Sustainability Consultant",
              value: 1,
              relatedTo: [
                "environmental-consultant",
                "renewable-energy-eng",
                "climatologist",
              ],
            },
          ],
        },
        {
          id: "subfield-entrepreneurship",
          name: "Entrepreneurship",
          children: [
            {
              id: "startup-founder",
              name: "Startup Founder",
              value: 1,
              relatedTo: ["product-manager", "venture-capitalist"],
            },
            {
              id: "venture-capitalist",
              name: "Venture Capitalist",
              value: 1,
              relatedTo: ["investment-banker", "financial-analyst"],
            },
            {
              id: "social-entrepreneur",
              name: "Social Entrepreneur",
              value: 1,
              relatedTo: [
                "startup-founder",
                "nonprofit-director",
                "community-health-worker",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "field-communications",
      name: "Communications",
      children: [
        {
          id: "subfield-corporate-comms",
          name: "Corporate Communications",
          children: [
            {
              id: "communications-director",
              name: "Communications Director",
              value: 1,
              relatedTo: ["public-relations-specialist", "brand-strategist"],
            },
            {
              id: "internal-comms-mgr",
              name: "Internal Comms Manager",
              value: 1,
              relatedTo: ["hr-business-partner"],
            },
            {
              id: "speechwriter",
              name: "Speechwriter",
              value: 1,
              relatedTo: ["copywriter", "screenwriter"],
            },
          ],
        },
        {
          id: "subfield-events",
          name: "Events & Conferences",
          children: [
            {
              id: "event-planner",
              name: "Event Planner",
              value: 1,
              relatedTo: ["project-manager", "restaurant-manager"],
            },
            {
              id: "conference-producer",
              name: "Conference Producer",
              value: 1,
              relatedTo: ["event-planner", "film-producer"],
            },
          ],
        },
      ],
    },
  ],
};
