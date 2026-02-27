// data/domains/business.ts
import type { TreeNode } from "../types";

export const businessDomain: TreeNode = {
  id: "domain-business",
  name: "Business & Finance",
  children: [
    {
      name: "Finance & Accounting",
      children: [
        {
          name: "Corporate Finance",
          children: [
            { id: "financial-analyst", name: "Financial Analyst", value: 1 },
            { id: "investment-banker", name: "Investment Banker", value: 1 },
            { id: "actuary", name: "Actuary", value: 1 },
          ],
        },
        {
          name: "Accounting",
          children: [
            { id: "cpa", name: "Certified Public Accountant", value: 1 },
            { id: "auditor", name: "Auditor", value: 1 },
            {
              id: "forensic-accountant",
              name: "Forensic Accountant",
              value: 1,
            },
          ],
        },
      ],
    },
    {
      name: "Management & Strategy",
      children: [
        {
          name: "Operations",
          children: [
            { id: "supply-chain-mgr", name: "Supply Chain Manager", value: 1 },
            {
              id: "logistics-coordinator",
              name: "Logistics Coordinator",
              value: 1,
            },
            { id: "project-manager", name: "Project Manager", value: 1 },
          ],
        },
        {
          name: "Human Resources",
          children: [
            { id: "talent-acquisition", name: "Talent Acquisition", value: 1 },
            {
              id: "hr-business-partner",
              name: "HR Business Partner",
              value: 1,
            },
          ],
        },
      ],
    },
    {
      name: "Marketing & Sales",
      children: [
        {
          name: "Marketing",
          children: [
            {
              id: "product-marketing-mgr",
              name: "Product Marketing Mgr",
              value: 1,
            },
            { id: "seo-specialist", name: "SEO Specialist", value: 1 },
            { id: "brand-strategist", name: "Brand Strategist", value: 1 },
          ],
        },
        {
          name: "Sales",
          children: [
            { id: "account-executive", name: "Account Executive", value: 1 },
            { id: "sales-engineer", name: "Sales Engineer", value: 1 },
            { id: "customer-success", name: "Customer Success Mgr", value: 1 },
          ],
        },
      ],
    },
  ],
};
