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
              relatedTo: ["data-analyst"],
            },
            {
              id: "investment-banker",
              name: "Investment Banker",
              value: 1,
            },
            {
              id: "actuary",
              name: "Actuary",
              value: 1,
              relatedTo: ["actuarial-scientist", "statistician"],
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
            },
            { id: "auditor", name: "Auditor", value: 1 },
            {
              id: "forensic-accountant",
              name: "Forensic Accountant",
              value: 1,
              relatedTo: ["forensic-chemist", "forensic-investigator"],
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
              relatedTo: ["operations-researcher", "logistics-coordinator"],
            },
            {
              id: "logistics-coordinator",
              name: "Logistics Coordinator",
              value: 1,
            },
            {
              id: "project-manager",
              name: "Project Manager",
              value: 1,
              relatedTo: ["technical-program-manager"],
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
            },
            {
              id: "hr-business-partner",
              name: "HR Business Partner",
              value: 1,
            },
            {
              id: "comp-benefits-analyst",
              name: "Comp & Benefits Analyst",
              value: 1,
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
              relatedTo: ["data-analyst"],
            },
            {
              id: "brand-strategist",
              name: "Brand Strategist",
              value: 1,
              relatedTo: ["graphic-designer", "copywriter"],
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
              relatedTo: ["strategy-analyst"],
            },
            {
              id: "strategy-analyst",
              name: "Strategy Analyst",
              value: 1,
              relatedTo: ["data-analyst"],
            },
            {
              id: "it-consultant",
              name: "IT Consultant",
              value: 1,
              relatedTo: ["cloud-architect"],
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
              relatedTo: ["product-manager"],
            },
            {
              id: "venture-capitalist",
              name: "Venture Capitalist",
              value: 1,
              relatedTo: ["investment-banker", "financial-analyst"],
            },
          ],
        },
      ],
    },
  ],
};
