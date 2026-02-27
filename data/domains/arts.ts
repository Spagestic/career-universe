import type { TreeNode } from "../types";

export const artsDomain: TreeNode = {
  id: "domain-arts",
  name: "Arts & Design",
  children: [
    {
      id: "field-design",
      name: "Design",
      children: [
        {
          id: "subfield-digital-design",
          name: "Digital Design",
          children: [
            {
              id: "ui-ux-designer",
              name: "UI/UX Designer",
              value: 1,
              relatedTo: ["frontend-dev", "product-manager"],
            },
            {
              id: "product-designer",
              name: "Product Designer",
              value: 1,
              relatedTo: [
                "ui-ux-designer",
                "product-manager",
                "industrial-designer",
              ],
            },
            {
              id: "motion-designer",
              name: "Motion Designer",
              value: 1,
              relatedTo: ["animator"],
            },
            {
              id: "graphic-designer",
              name: "Graphic Designer",
              value: 1,
              relatedTo: ["brand-strategist"],
            },
          ],
        },
        {
          id: "subfield-physical-design",
          name: "Physical Design",
          children: [
            {
              id: "industrial-designer",
              name: "Industrial Designer",
              value: 1,
              relatedTo: ["product-designer", "prosthetics-designer"],
            },
            {
              id: "interior-designer",
              name: "Interior Designer",
              value: 1,
              relatedTo: ["architectural-eng"],
            },
            {
              id: "fashion-designer",
              name: "Fashion Designer",
              value: 1,
            },
            {
              id: "architect",
              name: "Architect",
              value: 1,
              relatedTo: ["structural-eng", "urban-planner"],
            },
          ],
        },
      ],
    },
    {
      id: "field-fine-arts-performance",
      name: "Fine Arts & Performance",
      children: [
        {
          id: "subfield-visual-arts",
          name: "Visual Arts",
          children: [
            {
              id: "illustrator",
              name: "Illustrator",
              value: 1,
              relatedTo: ["concept-artist"],
            },
            {
              id: "concept-artist",
              name: "Concept Artist",
              value: 1,
              relatedTo: ["technical-artist"],
            },
            {
              id: "animator",
              name: "Animator",
              value: 1,
              relatedTo: ["motion-designer", "technical-artist"],
            },
            {
              id: "photographer",
              name: "Photographer",
              value: 1,
              relatedTo: ["cinematographer"],
            },
          ],
        },
        {
          id: "subfield-music-audio",
          name: "Music & Audio",
          children: [
            { id: "composer", name: "Film Composer", value: 1 },
            {
              id: "music-producer",
              name: "Music Producer",
              value: 1,
            },
            {
              id: "sound-designer",
              name: "Sound Designer",
              value: 1,
              relatedTo: ["acoustical-eng", "music-producer"],
            },
          ],
        },
      ],
    },
    {
      id: "field-media-writing",
      name: "Media & Writing",
      children: [
        {
          id: "subfield-writing",
          name: "Writing",
          children: [
            {
              id: "copywriter",
              name: "Copywriter",
              value: 1,
              relatedTo: ["brand-strategist"],
            },
            {
              id: "technical-writer",
              name: "Technical Writer",
              value: 1,
              relatedTo: ["instructional-designer"],
            },
            { id: "screenwriter", name: "Screenwriter", value: 1 },
          ],
        },
        {
          id: "subfield-film-production",
          name: "Film & Production",
          children: [
            { id: "film-director", name: "Director", value: 1 },
            {
              id: "cinematographer",
              name: "Cinematographer",
              value: 1,
              relatedTo: ["photographer"],
            },
            {
              id: "video-editor",
              name: "Video Editor",
              value: 1,
            },
          ],
        },
      ],
    },
  ],
};
