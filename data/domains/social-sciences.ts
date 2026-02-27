import type { TreeNode } from "../types";

export const socialSciencesDomain: TreeNode = {
  id: "domain-social-sciences",
  name: "Social Sciences",
  children: [
    {
      id: "field-psychology",
      name: "Psychology",
      children: [
        {
          id: "subfield-clinical-counseling-psych",
          name: "Clinical & Counseling",
          children: [
            {
              id: "counseling-psychologist",
              name: "Counseling Psychologist",
              value: 1,
              relatedTo: ["clinical-psychologist", "school-counselor"],
            },
            {
              id: "neuropsychologist",
              name: "Neuropsychologist",
              value: 1,
              relatedTo: [
                "neuroscientist",
                "clinical-psychologist",
                "psychiatrist",
              ],
            },
            {
              id: "behavioral-psychologist",
              name: "Behavioral Psychologist",
              value: 1,
              relatedTo: ["ux-researcher", "animal-behaviorist"],
            },
          ],
        },
        {
          id: "subfield-applied-psych",
          name: "Applied Psychology",
          children: [
            {
              id: "cognitive-psychologist",
              name: "Cognitive Psychologist",
              value: 1,
              relatedTo: [
                "ux-researcher",
                "learning-engineer",
                "ai-ethics-researcher",
              ],
            },
            {
              id: "forensic-psychologist",
              name: "Forensic Psychologist",
              value: 1,
              relatedTo: [
                "clinical-psychologist",
                "detective",
                "criminal-defense-attorney",
              ],
            },
            {
              id: "sports-psychologist",
              name: "Sports Psychologist",
              value: 1,
              relatedTo: ["athletic-trainer", "sports-medicine-physician"],
            },
          ],
        },
      ],
    },
    {
      id: "field-sociology-anthropology",
      name: "Sociology & Anthropology",
      children: [
        {
          id: "subfield-sociology",
          name: "Sociology",
          children: [
            {
              id: "sociologist",
              name: "Sociologist",
              value: 1,
              relatedTo: ["survey-researcher", "policy-analyst"],
            },
            {
              id: "demographer",
              name: "Demographer",
              value: 1,
              relatedTo: ["statistician", "epidemiologist", "urban-planner"],
            },
            {
              id: "social-worker",
              name: "Social Worker",
              value: 1,
              relatedTo: [
                "community-health-worker",
                "victim-advocate",
                "probation-officer",
              ],
            },
            {
              id: "survey-researcher",
              name: "Survey Researcher",
              value: 1,
              relatedTo: ["market-researcher", "sociologist"],
            },
          ],
        },
        {
          id: "subfield-anthropology",
          name: "Anthropology",
          children: [
            {
              id: "anthropologist",
              name: "Anthropologist",
              value: 1,
              relatedTo: ["museum-curator", "archaeologist"],
            },
            {
              id: "archaeologist",
              name: "Archaeologist",
              value: 1,
              relatedTo: ["geologist", "anthropologist"],
            },
            {
              id: "ethnographer",
              name: "Ethnographer",
              value: 1,
              relatedTo: [
                "ux-researcher",
                "anthropologist",
                "documentary-filmmaker",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "field-political-science",
      name: "Political Science & IR",
      children: [
        {
          id: "subfield-political-science",
          name: "Political Science",
          children: [
            {
              id: "political-scientist",
              name: "Political Scientist",
              value: 1,
              relatedTo: ["policy-analyst", "economist", "legislative-aide"],
            },
            {
              id: "campaign-manager",
              name: "Campaign Manager",
              value: 1,
              relatedTo: ["public-relations-specialist", "political-scientist"],
            },
            {
              id: "lobbyist",
              name: "Lobbyist",
              value: 1,
              relatedTo: ["policy-analyst", "communications-director"],
            },
          ],
        },
        {
          id: "subfield-conflict-peace",
          name: "Conflict & Peace Studies",
          children: [
            {
              id: "humanitarian-aid-worker",
              name: "Humanitarian Aid Worker",
              value: 1,
              relatedTo: ["community-health-worker", "nonprofit-director"],
            },
            {
              id: "conflict-resolution-specialist",
              name: "Conflict Resolution Specialist",
              value: 1,
              relatedTo: ["mediator", "diplomat"],
            },
          ],
        },
      ],
    },
    {
      id: "field-linguistics",
      name: "Linguistics",
      children: [
        {
          id: "subfield-theoretical-linguistics",
          name: "Theoretical Linguistics",
          children: [
            {
              id: "computational-linguist",
              name: "Computational Linguist",
              value: 1,
              relatedTo: ["nlp-engineer", "speech-pathologist"],
            },
            {
              id: "applied-linguist",
              name: "Applied Linguist",
              value: 1,
              relatedTo: ["esl-teacher", "translator"],
            },
            {
              id: "phonetician",
              name: "Phonetician",
              value: 1,
              relatedTo: ["speech-pathologist", "computational-linguist"],
            },
          ],
        },
        {
          id: "subfield-translation",
          name: "Translation & Interpretation",
          children: [
            {
              id: "translator",
              name: "Translator",
              value: 1,
              relatedTo: ["diplomat", "applied-linguist"],
            },
            {
              id: "sign-language-interpreter",
              name: "Sign Language Interpreter",
              value: 1,
              relatedTo: ["special-ed-teacher", "web-accessibility-specialist"],
            },
            {
              id: "localization-specialist",
              name: "Localization Specialist",
              value: 1,
              relatedTo: ["translator", "product-manager"],
            },
          ],
        },
      ],
    },
    {
      id: "field-philosophy-ethics",
      name: "Philosophy & Ethics",
      children: [
        {
          id: "subfield-philosophy",
          name: "Philosophy",
          children: [
            {
              id: "philosopher",
              name: "Philosopher",
              value: 1,
              relatedTo: ["ai-ethics-researcher", "professor"],
            },
            {
              id: "bioethicist",
              name: "Bioethicist",
              value: 1,
              relatedTo: ["philosopher", "genetic-counselor", "policy-analyst"],
            },
          ],
        },
        {
          id: "subfield-religious-studies",
          name: "Religious & Cultural Studies",
          children: [
            {
              id: "theologian",
              name: "Theologian",
              value: 1,
              relatedTo: ["philosopher", "anthropologist"],
            },
            {
              id: "chaplain",
              name: "Chaplain",
              value: 1,
              relatedTo: ["counseling-psychologist", "social-worker"],
            },
          ],
        },
      ],
    },
    {
      id: "field-geography",
      name: "Geography",
      children: [
        {
          id: "subfield-human-geography",
          name: "Human Geography",
          children: [
            {
              id: "human-geographer",
              name: "Human Geographer",
              value: 1,
              relatedTo: ["urban-planner", "demographer", "sociologist"],
            },
            {
              id: "documentary-filmmaker",
              name: "Documentary Filmmaker",
              value: 1,
              relatedTo: [
                "film-director",
                "investigative-journalist",
                "ethnographer",
              ],
            },
          ],
        },
        {
          id: "subfield-physical-geography",
          name: "Physical Geography",
          children: [
            {
              id: "cartographer",
              name: "Cartographer",
              value: 1,
              relatedTo: ["gis-specialist", "geospatial-analyst"],
            },
            {
              id: "remote-sensing-scientist",
              name: "Remote Sensing Scientist",
              value: 1,
              relatedTo: [
                "geospatial-analyst",
                "climatologist",
                "spacecraft-eng",
              ],
            },
          ],
        },
      ],
    },
  ],
};
