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
            {
              id: "k12-teacher",
              name: "K-12 Teacher",
              value: 1,
            },
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
              relatedTo: [
                "planetarium-director",
                "health-educator",
                "museum-curator",
              ],
            },
            {
              id: "esl-teacher",
              name: "ESL / ELL Teacher",
              value: 1,
              relatedTo: ["applied-linguist", "k12-teacher"],
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
              relatedTo: ["clinical-psychologist", "career-counselor"],
            },
            {
              id: "school-principal",
              name: "School Principal",
              value: 1,
              relatedTo: ["superintendent"],
            },
            {
              id: "superintendent",
              name: "Superintendent",
              value: 1,
              relatedTo: ["school-principal"],
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
              relatedTo: ["postdoc-researcher", "pl-researcher"],
            },
            {
              id: "postdoc-researcher",
              name: "Postdoctoral Researcher",
              value: 1,
              relatedTo: ["research-scientist"],
            },
            {
              id: "academic-advisor",
              name: "Academic Advisor",
              value: 1,
              relatedTo: ["career-counselor"],
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
              relatedTo: ["data-scientist", "postdoc-researcher"],
            },
            {
              id: "grants-manager",
              name: "Grants Manager",
              value: 1,
              relatedTo: ["nonprofit-director"],
            },
            {
              id: "department-chair",
              name: "Department Chair",
              value: 1,
              relatedTo: ["professor"],
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
              relatedTo: ["instructional-designer", "k12-teacher"],
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
              relatedTo: ["ml-engineer", "cognitive-psychologist"],
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
              relatedTo: ["io-psychologist"],
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
              relatedTo: ["management-consultant", "io-psychologist"],
            },
            {
              id: "career-counselor",
              name: "Career Counselor",
              value: 1,
              relatedTo: ["school-counselor", "academic-advisor"],
            },
          ],
        },
      ],
    },
    {
      id: "field-library-museum",
      name: "Library & Museum",
      children: [
        {
          id: "subfield-library-science",
          name: "Library Science",
          children: [
            {
              id: "librarian",
              name: "Librarian",
              value: 1,
              relatedTo: ["archivist", "information-architect"],
            },
            {
              id: "archivist",
              name: "Archivist",
              value: 1,
              relatedTo: ["librarian", "museum-curator"],
            },
            {
              id: "information-architect",
              name: "Information Architect",
              value: 1,
              relatedTo: ["ui-ux-designer", "librarian"],
            },
          ],
        },
        {
          id: "subfield-museum",
          name: "Museum & Heritage",
          children: [
            {
              id: "museum-curator",
              name: "Museum Curator",
              value: 1,
              relatedTo: [
                "archivist",
                "anthropologist",
                "planetarium-director",
              ],
            },
            {
              id: "exhibit-designer",
              name: "Exhibit Designer",
              value: 1,
              relatedTo: ["interior-designer", "xr-designer"],
            },
          ],
        },
      ],
    },
  ],
};
