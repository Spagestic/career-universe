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
              relatedTo: ["frontend-dev", "product-manager", "ux-researcher"],
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
              relatedTo: ["animator", "video-editor"],
            },
            {
              id: "graphic-designer",
              name: "Graphic Designer",
              value: 1,
              relatedTo: ["brand-strategist", "data-visualization-eng"],
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
              relatedTo: ["architectural-eng", "architect"],
            },
            {
              id: "fashion-designer",
              name: "Fashion Designer",
              value: 1,
              relatedTo: ["textile-technologist"],
            },
            {
              id: "architect",
              name: "Architect",
              value: 1,
              relatedTo: [
                "structural-eng",
                "urban-planner",
                "interior-designer",
                "acoustical-eng",
              ],
            },
            {
              id: "set-designer",
              name: "Set Designer",
              value: 1,
              relatedTo: ["film-director", "interior-designer"],
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
              relatedTo: ["concept-artist", "graphic-designer"],
            },
            {
              id: "concept-artist",
              name: "Concept Artist",
              value: 1,
              relatedTo: ["technical-artist", "game-designer"],
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
              relatedTo: ["cinematographer", "photojournalist"],
            },
            {
              id: "sculptor",
              name: "Sculptor",
              value: 1,
              relatedTo: ["industrial-designer"],
            },
          ],
        },
        {
          id: "subfield-music-audio",
          name: "Music & Audio",
          children: [
            {
              id: "composer",
              name: "Film Composer",
              value: 1,
              relatedTo: ["music-producer", "film-director"],
            },
            {
              id: "music-producer",
              name: "Music Producer",
              value: 1,
              relatedTo: ["sound-designer", "audio-engineer"],
            },
            {
              id: "sound-designer",
              name: "Sound Designer",
              value: 1,
              relatedTo: ["acoustical-eng", "music-producer"],
            },
            {
              id: "audio-engineer",
              name: "Audio Engineer",
              value: 1,
              relatedTo: ["broadcast-eng", "sound-designer"],
            },
            {
              id: "music-therapist",
              name: "Music Therapist",
              value: 1,
              relatedTo: ["occupational-therapist", "clinical-psychologist"],
            },
          ],
        },
        {
          id: "subfield-performing-arts",
          name: "Performing Arts",
          children: [
            {
              id: "actor",
              name: "Actor",
              value: 1,
              relatedTo: ["film-director", "voice-actor"],
            },
            {
              id: "voice-actor",
              name: "Voice Actor",
              value: 1,
              relatedTo: ["actor", "audio-engineer"],
            },
            {
              id: "choreographer",
              name: "Choreographer",
              value: 1,
              relatedTo: ["dance-therapist"],
            },
            {
              id: "theater-director",
              name: "Theater Director",
              value: 1,
              relatedTo: ["film-director", "set-designer"],
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
              relatedTo: ["brand-strategist", "content-strategist"],
            },
            {
              id: "technical-writer",
              name: "Technical Writer",
              value: 1,
              relatedTo: ["instructional-designer"],
            },
            {
              id: "screenwriter",
              name: "Screenwriter",
              value: 1,
              relatedTo: ["film-director", "game-designer"],
            },
            {
              id: "content-strategist",
              name: "Content Strategist",
              value: 1,
              relatedTo: ["seo-specialist", "copywriter"],
            },
          ],
        },
        {
          id: "subfield-film-production",
          name: "Film & Production",
          children: [
            {
              id: "film-director",
              name: "Director",
              value: 1,
              relatedTo: ["theater-director", "composer"],
            },
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
              relatedTo: ["motion-designer", "broadcast-eng"],
            },
            {
              id: "vfx-artist",
              name: "VFX Artist",
              value: 1,
              relatedTo: ["technical-artist", "graphics-programmer"],
            },
            {
              id: "film-producer",
              name: "Film Producer",
              value: 1,
              relatedTo: ["film-director", "project-manager"],
            },
          ],
        },
        {
          id: "subfield-journalism",
          name: "Journalism",
          children: [
            {
              id: "journalist",
              name: "Journalist",
              value: 1,
              relatedTo: ["photojournalist", "public-relations-specialist"],
            },
            {
              id: "photojournalist",
              name: "Photojournalist",
              value: 1,
              relatedTo: ["photographer", "journalist"],
            },
            {
              id: "investigative-journalist",
              name: "Investigative Journalist",
              value: 1,
              relatedTo: ["detective", "forensic-investigator"],
            },
            {
              id: "broadcast-journalist",
              name: "Broadcast Journalist",
              value: 1,
              relatedTo: ["broadcast-eng", "journalist"],
            },
          ],
        },
      ],
    },
    {
      id: "field-culinary-arts",
      name: "Culinary Arts",
      children: [
        {
          id: "subfield-culinary",
          name: "Culinary & Baking",
          children: [
            {
              id: "chef",
              name: "Chef",
              value: 1,
              relatedTo: ["food-scientist", "restaurant-manager"],
            },
            {
              id: "pastry-chef",
              name: "Pastry Chef",
              value: 1,
              relatedTo: ["chef"],
            },
            {
              id: "sommelier",
              name: "Sommelier",
              value: 1,
              relatedTo: ["food-scientist"],
            },
          ],
        },
        {
          id: "subfield-food-media",
          name: "Food Media",
          children: [
            {
              id: "food-photographer",
              name: "Food Photographer",
              value: 1,
              relatedTo: ["photographer"],
            },
            {
              id: "food-critic",
              name: "Food Critic",
              value: 1,
              relatedTo: ["journalist"],
            },
          ],
        },
      ],
    },
  ],
};
