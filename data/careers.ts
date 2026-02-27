// data/careers.ts
export interface TreeNode {
  name: string;
  color?: string;
  children?: TreeNode[];
  value?: number; // only on leaf nodes
}

export const careerData: TreeNode = {
  name: "Career Universe",
  children: [
    // ═══════════════════════════════════════════
    //  SCIENCE
    // ═══════════════════════════════════════════
    {
      name: "🔬 Science",
      color: "#3b82f6",
      children: [
        {
          name: "Physics",
          children: [
            {
              name: "Quantum Physics",
              children: [
                { name: "Quantum Researcher", value: 1 },
                { name: "Quantum Hardware Eng.", value: 1 },
                { name: "Quantum Software Dev", value: 1 },
              ],
            },
            {
              name: "Astrophysics",
              children: [
                { name: "Astrophysicist", value: 1 },
                { name: "Cosmologist", value: 1 },
                { name: "Planetarium Director", value: 1 },
              ],
            },
            {
              name: "Particle Physics",
              children: [
                { name: "Accelerator Physicist", value: 1 },
                { name: "Detector Engineer", value: 1 },
              ],
            },
          ],
        },
        {
          name: "Biology",
          children: [
            {
              name: "Genetics",
              children: [
                { name: "Genetic Counselor", value: 1 },
                { name: "Genomics Researcher", value: 1 },
              ],
            },
            {
              name: "Ecology",
              children: [
                { name: "Wildlife Biologist", value: 1 },
                { name: "Conservation Scientist", value: 1 },
              ],
            },
            {
              name: "Microbiology",
              children: [
                { name: "Microbiologist", value: 1 },
                { name: "Virologist", value: 1 },
              ],
            },
          ],
        },
        {
          name: "Chemistry",
          children: [
            {
              name: "Organic Chemistry",
              children: [
                { name: "Medicinal Chemist", value: 1 },
                { name: "Polymer Scientist", value: 1 },
              ],
            },
            {
              name: "Analytical Chemistry",
              children: [
                { name: "Lab Analyst", value: 1 },
                { name: "Forensic Chemist", value: 1 },
              ],
            },
          ],
        },
      ],
    },

    // ═══════════════════════════════════════════
    //  ENGINEERING (from your diagram)
    // ═══════════════════════════════════════════
    {
      name: "⚙️ Engineering",
      color: "#ef4444",
      children: [
        {
          name: "Civil & Environment",
          children: [
            {
              name: "Civil Engineering",
              children: [
                { name: "Structural Engineer", value: 1 },
                { name: "Architectural Eng.", value: 1 },
                { name: "Surveyor", value: 1 },
              ],
            },
            {
              name: "Environmental Eng.",
              children: [
                { name: "Water Treatment Eng.", value: 1 },
                { name: "Bio-Systems Eng.", value: 1 },
                { name: "Agricultural Eng.", value: 1 },
              ],
            },
            {
              name: "Marine Engineering",
              children: [
                { name: "Naval Architect", value: 1 },
                { name: "Propulsion Engineer", value: 1 },
              ],
            },
          ],
        },
        {
          name: "Mechanical & Aerospace",
          children: [
            {
              name: "Mechanical Eng.",
              children: [
                { name: "Manufacturing Eng.", value: 1 },
                { name: "Robotics & Mechatronics", value: 1 },
                { name: "Automotive Engineer", value: 1 },
              ],
            },
            {
              name: "Aerospace Eng.",
              children: [
                { name: "Aerodynamics Eng.", value: 1 },
                { name: "Spacecraft / Satellite", value: 1 },
                { name: "Aircraft / Rocket Design", value: 1 },
              ],
            },
            {
              name: "Materials Eng.",
              children: [
                { name: "Corrosion Engineer", value: 1 },
                { name: "Non-Destructive Testing", value: 1 },
              ],
            },
            {
              name: "Transportation Eng.",
              children: [
                { name: "Railway Engineer", value: 1 },
                { name: "Airport / Road Planner", value: 1 },
              ],
            },
          ],
        },
        {
          name: "Electrical & Computing",
          children: [
            {
              name: "Electrical Eng.",
              children: [
                { name: "Power Systems Eng.", value: 1 },
                { name: "Control Systems Eng.", value: 1 },
                { name: "Electronics Engineer", value: 1 },
              ],
            },
            {
              name: "Computer Eng.",
              children: [
                { name: "Embedded Systems Eng.", value: 1 },
                { name: "FPGA Engineer", value: 1 },
                { name: "Network Engineer", value: 1 },
              ],
            },
            {
              name: "Photonics & Optics",
              children: [
                { name: "Optoelectronics Eng.", value: 1 },
                { name: "Display Tech Engineer", value: 1 },
              ],
            },
            {
              name: "Audio / Acoustical",
              children: [
                { name: "Broadcast Engineer", value: 1 },
                { name: "Audio Equipment Eng.", value: 1 },
              ],
            },
          ],
        },
        {
          name: "Chemical & Biological",
          children: [
            {
              name: "Chemical Eng.",
              children: [
                { name: "Process Plant Eng.", value: 1 },
                { name: "Petroleum Engineer", value: 1 },
                { name: "Textile Engineer", value: 1 },
              ],
            },
            {
              name: "Biomedical Eng.",
              children: [
                { name: "Tissue Engineer", value: 1 },
                { name: "Prosthetics Designer", value: 1 },
                { name: "Medical Imaging Tech", value: 1 },
              ],
            },
            {
              name: "Bio-Engineering",
              children: [
                { name: "Biomolecule Production", value: 1 },
                { name: "Bacterial Engineering", value: 1 },
              ],
            },
          ],
        },
      ],
    },

    // ═══════════════════════════════════════════
    //  TECHNOLOGY
    // ═══════════════════════════════════════════
    {
      name: "💻 Technology",
      color: "#22c55e",
      children: [
        {
          name: "Software",
          children: [
            {
              name: "Web Development",
              children: [
                { name: "Frontend Developer", value: 1 },
                { name: "Backend Developer", value: 1 },
                { name: "Full-Stack Developer", value: 1 },
              ],
            },
            {
              name: "Mobile Development",
              children: [
                { name: "iOS Developer", value: 1 },
                { name: "Android Developer", value: 1 },
              ],
            },
            {
              name: "DevOps",
              children: [
                { name: "Site Reliability Eng.", value: 1 },
                { name: "Cloud Architect", value: 1 },
                { name: "Platform Engineer", value: 1 },
              ],
            },
          ],
        },
        {
          name: "Data & AI",
          children: [
            {
              name: "Data Science",
              children: [
                { name: "Data Scientist", value: 1 },
                { name: "Data Analyst", value: 1 },
                { name: "Data Engineer", value: 1 },
              ],
            },
            {
              name: "Machine Learning",
              children: [
                { name: "ML Engineer", value: 1 },
                { name: "NLP Engineer", value: 1 },
                { name: "Computer Vision Eng.", value: 1 },
              ],
            },
          ],
        },
        {
          name: "Cybersecurity",
          children: [
            { name: "Penetration Tester", value: 1 },
            { name: "Security Analyst", value: 1 },
            { name: "Cryptographer", value: 1 },
          ],
        },
      ],
    },

    // ═══════════════════════════════════════════
    //  ARTS & DESIGN
    // ═══════════════════════════════════════════
    {
      name: "🎨 Arts & Design",
      color: "#f59e0b",
      children: [
        {
          name: "Visual Arts",
          children: [
            {
              name: "Graphic Design",
              children: [
                { name: "Brand Designer", value: 1 },
                { name: "UI/UX Designer", value: 1 },
                { name: "Motion Designer", value: 1 },
              ],
            },
            {
              name: "Fine Arts",
              children: [
                { name: "Painter / Sculptor", value: 1 },
                { name: "Art Director", value: 1 },
              ],
            },
          ],
        },
        {
          name: "Music",
          children: [
            {
              name: "Performance",
              children: [
                { name: "Session Musician", value: 1 },
                { name: "Orchestra Performer", value: 1 },
              ],
            },
            {
              name: "Production",
              children: [
                { name: "Music Producer", value: 1 },
                { name: "Sound Engineer", value: 1 },
                { name: "Film Composer", value: 1 },
              ],
            },
          ],
        },
        {
          name: "Writing & Media",
          children: [
            {
              name: "Journalism",
              children: [
                { name: "Investigative Reporter", value: 1 },
                { name: "Broadcast Journalist", value: 1 },
              ],
            },
            {
              name: "Creative Writing",
              children: [
                { name: "Novelist", value: 1 },
                { name: "Screenwriter", value: 1 },
                { name: "Copywriter", value: 1 },
              ],
            },
          ],
        },
      ],
    },
  ],
};
