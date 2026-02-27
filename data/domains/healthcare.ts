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
              relatedTo: ["genetic-counselor", "nurse-practitioner"],
            },
            {
              id: "pediatrician",
              name: "Pediatrician",
              value: 1,
              relatedTo: ["family-physician"],
            },
            {
              id: "internal-medicine",
              name: "Internal Medicine Dr.",
              value: 1,
            },
            {
              id: "geriatrician",
              name: "Geriatrician",
              value: 1,
              relatedTo: ["occupational-therapist", "social-worker"],
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
              relatedTo: ["clinical-psychologist", "neuropsychologist"],
            },
            {
              id: "dentist",
              name: "Dentist",
              value: 1,
              relatedTo: ["orthodontist"],
            },
            {
              id: "orthodontist",
              name: "Orthodontist",
              value: 1,
              relatedTo: ["dentist"],
            },
            {
              id: "dermatologist",
              name: "Dermatologist",
              value: 1,
            },
            {
              id: "cardiologist",
              name: "Cardiologist",
              value: 1,
              relatedTo: ["internal-medicine"],
            },
            {
              id: "ophthalmologist",
              name: "Ophthalmologist",
              value: 1,
              relatedTo: ["optometrist"],
            },
            {
              id: "optometrist",
              name: "Optometrist",
              value: 1,
              relatedTo: ["ophthalmologist"],
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
              relatedTo: ["nurse-practitioner"],
            },
            {
              id: "nurse-practitioner",
              name: "Nurse Practitioner",
              value: 1,
              relatedTo: ["family-physician"],
            },
            {
              id: "crna",
              name: "Nurse Anesthetist",
              value: 1,
              relatedTo: ["anesthesiologist"],
            },
            {
              id: "nurse-midwife",
              name: "Nurse Midwife",
              value: 1,
              relatedTo: ["registered-nurse"],
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
              relatedTo: ["sports-medicine-physician", "athletic-trainer"],
            },
            {
              id: "occupational-therapist",
              name: "Occupational Therapist",
              value: 1,
              relatedTo: [
                "prosthetics-designer",
                "geriatrician",
                "music-therapist",
              ],
            },
            {
              id: "speech-pathologist",
              name: "Speech Pathologist",
              value: 1,
              relatedTo: ["computational-linguist", "special-ed-teacher"],
            },
            {
              id: "dance-therapist",
              name: "Dance/Movement Therapist",
              value: 1,
              relatedTo: ["choreographer", "clinical-psychologist"],
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
              relatedTo: [
                "medicinal-chemist",
                "pharmacist",
                "biochemist",
                "immunologist",
              ],
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
              relatedTo: ["medical-imaging-eng", "medical-physicist"],
            },
            {
              id: "clinical-lab-tech",
              name: "Clinical Lab Tech",
              value: 1,
              relatedTo: ["lab-analyst"],
            },
            {
              id: "phlebotomist",
              name: "Phlebotomist",
              value: 1,
            },
            {
              id: "pathologist",
              name: "Pathologist",
              value: 1,
              relatedTo: ["microbiologist", "surgeon"],
            },
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
              relatedTo: ["policy-analyst", "epidemiologist"],
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
              relatedTo: ["science-educator", "community-health-worker"],
            },
            {
              id: "community-health-worker",
              name: "Community Health Worker",
              value: 1,
              relatedTo: ["social-worker", "social-entrepreneur"],
            },
          ],
        },
      ],
    },
    {
      id: "field-veterinary",
      name: "Veterinary Medicine",
      children: [
        {
          id: "subfield-clinical-vet",
          name: "Clinical Veterinary",
          children: [
            {
              id: "veterinarian",
              name: "Veterinarian",
              value: 1,
              relatedTo: ["zoologist", "family-physician"],
            },
            {
              id: "veterinary-surgeon",
              name: "Veterinary Surgeon",
              value: 1,
              relatedTo: ["surgeon", "veterinarian"],
            },
          ],
        },
        {
          id: "subfield-vet-specialties",
          name: "Veterinary Specialties",
          children: [
            {
              id: "vet-pathologist",
              name: "Veterinary Pathologist",
              value: 1,
              relatedTo: ["pathologist", "microbiologist"],
            },
            {
              id: "animal-behaviorist",
              name: "Animal Behaviorist",
              value: 1,
              relatedTo: ["zoologist", "behavioral-psychologist"],
            },
            {
              id: "vet-technician",
              name: "Veterinary Technician",
              value: 1,
              relatedTo: ["registered-nurse"],
            },
          ],
        },
      ],
    },
    {
      id: "field-sports-medicine",
      name: "Sports Medicine & Fitness",
      children: [
        {
          id: "subfield-sports-med",
          name: "Sports Medicine",
          children: [
            {
              id: "sports-medicine-physician",
              name: "Sports Medicine Physician",
              value: 1,
              relatedTo: ["physical-therapist", "orthopedic-surgeon"],
            },
            {
              id: "orthopedic-surgeon",
              name: "Orthopedic Surgeon",
              value: 1,
              relatedTo: ["surgeon", "sports-medicine-physician"],
            },
            {
              id: "athletic-trainer",
              name: "Athletic Trainer",
              value: 1,
              relatedTo: ["physical-therapist", "strength-coach"],
            },
          ],
        },
        {
          id: "subfield-fitness",
          name: "Fitness & Wellness",
          children: [
            {
              id: "strength-coach",
              name: "Strength & Conditioning Coach",
              value: 1,
              relatedTo: ["athletic-trainer", "exercise-physiologist"],
            },
            {
              id: "exercise-physiologist",
              name: "Exercise Physiologist",
              value: 1,
              relatedTo: ["sports-medicine-physician"],
            },
            {
              id: "nutritionist",
              name: "Nutritionist / Dietitian",
              value: 1,
              relatedTo: ["food-scientist", "health-educator"],
            },
          ],
        },
      ],
    },
  ],
};
