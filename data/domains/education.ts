import type { TreeNode } from "../types";

export const educationDomain: TreeNode = {
  id: "domain-education",
  name: "Education & Research",
  children: [
    {
      id: "field-k12-education",
      name: "K-12 Education",
      children: [
        {
          id: "subfield-teaching",
          name: "Teaching",
          children: [
            { id: "k12-teacher", name: "K-12 Teacher", value: 1 },
            {
              id: "special-ed-teacher",
              name: "Special Education Teacher",
              value: 1,
              relatedTo: ["speech-pathologist", "occupational-therapist"],
            },
            {
              id: "science-educator",
              name: "Science Educator",
              value: 1,
              relatedTo: ["planetarium-director", "health-educator"],
            },
          ],
        },
        {
          id: "subfield-school-leadership",
          name: "School Leadership",
          children: [
            {
              id: "school-counselor",
              name: "School Counselor",
              value: 1,
              relatedTo: ["clinical-psychologist"],
            },
            {
              id: "school-principal",
              name: "School Principal",
              value: 1,
            },
            {
              id: "superintendent",
              name: "Superintendent",
              value: 1,
            },
          ],
        },
      ],
    },
    {
      id: "field-higher-education",
      name: "Higher Education & Research",
      children: [
        {
          id: "subfield-academia",
          name: "Academia",
          children: [
            {
              id: "professor",
              name: "Professor",
              value: 1,
            },
            {
              id: "postdoc-researcher",
              name: "Postdoctoral Researcher",
              value: 1,
            },
            {
              id: "academic-advisor",
              name: "Academic Advisor",
              value: 1,
            },
          ],
        },
        {
          id: "subfield-research-admin",
          name: "Research Administration",
          children: [
            {
              id: "research-scientist",
              name: "Research Scientist",
              value: 1,
              relatedTo: ["data-scientist"],
            },
            {
              id: "grants-manager",
              name: "Grants Manager",
              value: 1,
            },
            {
              id: "department-chair",
              name: "Department Chair",
              value: 1,
            },
          ],
        },
      ],
    },
    {
      id: "field-edtech",
      name: "Educational Technology",
      children: [
        {
          id: "subfield-instructional-design",
          name: "Instructional Design",
          children: [
            {
              id: "instructional-designer",
              name: "Instructional Designer",
              value: 1,
              relatedTo: [
                "technical-writer",
                "edtech-developer",
                "curriculum-developer",
              ],
            },
            {
              id: "curriculum-developer",
              name: "Curriculum Developer",
              value: 1,
              relatedTo: ["instructional-designer"],
            },
          ],
        },
        {
          id: "subfield-learning-tech",
          name: "Learning Technology",
          children: [
            {
              id: "edtech-developer",
              name: "EdTech Developer",
              value: 1,
              relatedTo: ["frontend-dev", "instructional-designer"],
            },
            {
              id: "learning-engineer",
              name: "Learning Engineer",
              value: 1,
              relatedTo: ["ml-engineer"],
            },
          ],
        },
      ],
    },
    {
      id: "field-training-development",
      name: "Training & Development",
      children: [
        {
          id: "subfield-corporate-training",
          name: "Corporate Training",
          children: [
            {
              id: "corporate-trainer",
              name: "Corporate Trainer",
              value: 1,
              relatedTo: ["hr-business-partner"],
            },
            {
              id: "learning-specialist",
              name: "Learning & Dev Specialist",
              value: 1,
            },
          ],
        },
        {
          id: "subfield-coaching",
          name: "Coaching & Mentoring",
          children: [
            {
              id: "executive-coach",
              name: "Executive Coach",
              value: 1,
              relatedTo: ["management-consultant"],
            },
            {
              id: "career-counselor",
              name: "Career Counselor",
              value: 1,
              relatedTo: ["school-counselor"],
            },
          ],
        },
      ],
    },
  ],
};
