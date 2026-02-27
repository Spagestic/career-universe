# Career Universe

[![Career Universe](/public/image.png)](https://career-universe.vercel.app/)

An interactive, zoomable map of career pathways. Career Universe visualizes domains, fields, and specific jobs using D3.js circle packing, helping users explore cross-disciplinary career paths in an intuitive, hierarchical landscape.

## ✨ Features

- **Interactive Map**: Click or use the scroll wheel to smoothly zoom in and out of different career domains.
- **Hierarchical Layout**: Organizes careers logically from massive domains (Science, Engineering) down to specific jobs (Quantum Researcher, Structural Engineer).
- **Themeable UI**: Fully integrated with Tailwind CSS and `shadcn/ui`, seamlessly adapting to Light and Dark modes.
- **Modular Data System**: Career data is split into isolated domain files for easy maintenance and expansion.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Runtime & Package Manager**: [Bun](https://bun.sh/)
- **Visualization**: [D3.js](https://d3js.org/) (Hierarchy & Pack modules)
- **Styling & UI**: [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)

## 🚀 Getting Started

First, ensure you have [Bun](https://bun.sh/) installed on your machine.

1. **Clone the repository** (or navigate to your project folder):

```bash
   git clone https://github.com/Spagestic/career-universe
   cd career-universe
```

2. **Install dependencies**:

```bash
   bun install
```

3. **Run the development server**:

```bash
   bun run dev
```

4. **Explore the map**: Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

The codebase is organized to separate the complex SVG rendering from the data structure:

```text
career-universe/
├── app/
│   └── globals.css
│   └── layout.tsx
│   └── page.tsx
├── components/
│   ├── career-map/
│   ├── theme/
│   ├── ui/
├── data/
│   ├── index.ts
│   ├── types.ts
│   └── domains/
│       ├── arts.ts
│       ├── business.ts
│       ├── engineering.ts
│       └── ...
└── hooks/
└── lib/
```

## 🗺️ Future Roadmap

Phase 1 — Foundation (current + next)
✅ Circle packing visualization
✅ Search (⌘K)
→ Cross-domain connections
→ Shareable deep links (?focus=...)
→ Career detail panel (static data)

Phase 2 — Database Migration
→ PostgreSQL schema + Drizzle
→ Seed script (current JSON → DB)
→ buildTreeFromDB() server function
→ ISR / on-demand revalidation

Phase 3 — User Contributions
→ Contribution dialog
→ LLM validation pipeline
→ Proposal status tracking
→ Basic moderation dashboard (/admin)

Phase 4 — Intelligence
→ BLS / O\*NET salary + growth data
→ Heatmap mode
→ Path finder (A → B)
→ AI career advisor chat

Phase 5 — Social
→ Auth (NextAuth / Clerk)
→ Personal bookmarks
→ Career journey sharing
→ Community voting
