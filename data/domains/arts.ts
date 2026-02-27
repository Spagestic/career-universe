// data/domains/arts.ts
import type { TreeNode } from "../types";

export const artsDomain: TreeNode = {
  id: "domain-arts",
  name: "Arts & Design",
  children: [
    {
      name: "Design",
      children: [
        {
          name: "Digital Design",
          children: [
            { id: "ui-ux-designer", name: "UI/UX Designer", value: 1 },
            { id: "product-designer", name: "Product Designer", value: 1 },
            { id: "motion-designer", name: "Motion Designer", value: 1 },
          ],
        },
        {
          name: "Physical Design",
          children: [
            {
              id: "industrial-designer",
              name: "Industrial Designer",
              value: 1,
            },
            { id: "interior-designer", name: "Interior Designer", value: 1 },
            { id: "fashion-designer", name: "Fashion Designer", value: 1 },
          ],
        },
      ],
    },
    {
      name: "Fine Arts & Performance",
      children: [
        {
          name: "Visual Arts",
          children: [
            { id: "illustrator", name: "Illustrator", value: 1 },
            { id: "concept-artist", name: "Concept Artist", value: 1 },
            { id: "animator", name: "Animator", value: 1 },
          ],
        },
        {
          name: "Music & Audio",
          children: [
            { id: "composer", name: "Film Composer", value: 1 },
            { id: "music-producer", name: "Music Producer", value: 1 },
            { id: "sound-designer", name: "Sound Designer", value: 1 },
          ],
        },
      ],
    },
    {
      name: "Media & Writing",
      children: [
        {
          name: "Writing",
          children: [
            { id: "copywriter", name: "Copywriter", value: 1 },
            { id: "technical-writer", name: "Technical Writer", value: 1 },
            { id: "screenwriter", name: "Screenwriter", value: 1 },
          ],
        },
        {
          name: "Film & Production",
          children: [
            { id: "film-director", name: "Director", value: 1 },
            { id: "cinematographer", name: "Cinematographer", value: 1 },
            { id: "video-editor", name: "Video Editor", value: 1 },
          ],
        },
      ],
    },
  ],
};
