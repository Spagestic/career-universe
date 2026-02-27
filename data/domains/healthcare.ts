import type { TreeNode } from "../types";

export const healthcareDomain: TreeNode = {
  id: "domain-healthcare",
  name: "Healthcare & Medicine",
  children: [
    {
      id: "field-clinical-medicine",
      name: "Clinical Medicine",
      children: [
        {
          id: "subfield-primary-care",
          name: "Primary Care",
          children: [
            {
              id: "family-physician",
              name: "Family Physician",
              value: 1,
              relatedTo: ["genetic-counselor"],
            },
            { id: "pediatrician", name: "Pediatrician", value: 1 },
            {
              id: "internal-medicine",
              name: "Internal Medicine Dr.",
              value: 1,
            },
          ],
        },
        {
          id: "subfield-specialties",
          name: "Specialties",
          children: [
            {
              id: "surgeon",
              name: "Surgeon",
              value: 1,
              relatedTo: ["tissue-eng", "anesthesiologist"],
            },
            {
              id: "anesthesiologist",
              name: "Anesthesiologist",
              value: 1,
              relatedTo: ["crna"],
            },
            {
              id: "psychiatrist",
              name: "Psychiatrist",
              value: 1,
              relatedTo: ["clinical-psychologist"],
            },
            {
              id: "dentist",
              name: "Dentist",
              value: 1,
            },
          ],
        },
      ],
    },
    {
      id: "field-nursing-allied",
      name: "Nursing & Allied Health",
      children: [
        {
          id: "subfield-nursing",
          name: "Nursing",
          children: [
            {
              id: "registered-nurse",
              name: "Registered Nurse (RN)",
              value: 1,
            },
            {
              id: "nurse-practitioner",
              name: "Nurse Practitioner",
              value: 1,
            },
            {
              id: "crna",
              name: "Nurse Anesthetist",
              value: 1,
              relatedTo: ["anesthesiologist"],
            },
          ],
        },
        {
          id: "subfield-therapy-rehab",
          name: "Therapy & Rehab",
          children: [
            {
              id: "physical-therapist",
              name: "Physical Therapist",
              value: 1,
            },
            {
              id: "occupational-therapist",
              name: "Occupational Therapist",
              value: 1,
              relatedTo: ["prosthetics-designer"],
            },
            {
              id: "speech-pathologist",
              name: "Speech Pathologist",
              value: 1,
            },
          ],
        },
      ],
    },
    {
      id: "field-diagnostics-pharmacy",
      name: "Diagnostics & Pharmacy",
      children: [
        {
          id: "subfield-pharmacy",
          name: "Pharmacy",
          children: [
            {
              id: "pharmacist",
              name: "Pharmacist",
              value: 1,
              relatedTo: ["pharmacologist"],
            },
            {
              id: "pharmacologist",
              name: "Pharmacologist",
              value: 1,
              relatedTo: ["medicinal-chemist", "pharmacist"],
            },
          ],
        },
        {
          id: "subfield-diagnostics",
          name: "Diagnostics",
          children: [
            {
              id: "radiologist",
              name: "Radiologist",
              value: 1,
              relatedTo: ["medical-imaging-eng"],
            },
            {
              id: "clinical-lab-tech",
              name: "Clinical Lab Tech",
              value: 1,
              relatedTo: ["lab-analyst"],
            },
            { id: "phlebotomist", name: "Phlebotomist", value: 1 },
          ],
        },
      ],
    },
    {
      id: "field-public-health",
      name: "Public Health",
      children: [
        {
          id: "subfield-epidemiology",
          name: "Epidemiology",
          children: [
            {
              id: "epidemiologist",
              name: "Epidemiologist",
              value: 1,
              relatedTo: ["biostatistician", "virologist", "data-scientist"],
            },
            {
              id: "public-health-analyst",
              name: "Public Health Analyst",
              value: 1,
              relatedTo: ["policy-analyst"],
            },
          ],
        },
        {
          id: "subfield-health-promotion",
          name: "Health Promotion",
          children: [
            {
              id: "health-educator",
              name: "Health Educator",
              value: 1,
              relatedTo: ["science-educator"],
            },
            {
              id: "community-health-worker",
              name: "Community Health Worker",
              value: 1,
            },
          ],
        },
      ],
    },
  ],
};
