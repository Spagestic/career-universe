// data/domains/healthcare.ts
import type { TreeNode } from "../types";

export const healthcareDomain: TreeNode = {
  id: "domain-healthcare",
  name: "Healthcare & Medicine",
  children: [
    {
      name: "Clinical Medicine",
      children: [
        {
          name: "Primary Care",
          children: [
            { id: "family-physician", name: "Family Physician", value: 1 },
            { id: "pediatrician", name: "Pediatrician", value: 1 },
            {
              id: "internal-medicine",
              name: "Internal Medicine Dr.",
              value: 1,
            },
          ],
        },
        {
          name: "Specialties",
          children: [
            { id: "surgeon", name: "Surgeon", value: 1 },
            { id: "anesthesiologist", name: "Anesthesiologist", value: 1 },
            { id: "psychiatrist", name: "Psychiatrist", value: 1 },
          ],
        },
      ],
    },
    {
      name: "Nursing & Allied Health",
      children: [
        {
          name: "Nursing",
          children: [
            { id: "registered-nurse", name: "Registered Nurse (RN)", value: 1 },
            { id: "nurse-practitioner", name: "Nurse Practitioner", value: 1 },
            { id: "crna", name: "Nurse Anesthetist", value: 1 },
          ],
        },
        {
          name: "Therapy & Rehab",
          children: [
            { id: "physical-therapist", name: "Physical Therapist", value: 1 },
            {
              id: "occupational-therapist",
              name: "Occupational Therapist",
              value: 1,
            },
            { id: "speech-pathologist", name: "Speech Pathologist", value: 1 },
          ],
        },
      ],
    },
    {
      name: "Diagnostics & Pharmacy",
      children: [
        {
          name: "Pharmacy",
          children: [
            { id: "pharmacist", name: "Pharmacist", value: 1 },
            { id: "pharmacologist", name: "Pharmacologist", value: 1 },
          ],
        },
        {
          name: "Diagnostics",
          children: [
            { id: "radiologist", name: "Radiologist", value: 1 },
            { id: "clinical-lab-tech", name: "Clinical Lab Tech", value: 1 },
            { id: "phlebotomist", name: "Phlebotomist", value: 1 },
          ],
        },
      ],
    },
  ],
};
