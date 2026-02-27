# Career Universe 🌌

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
   git clone <your-repo-url>
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
│   └── page.tsx              # Main layout and state controller
├── components/
│   ├── CareerMap.tsx         # D3.js Zoomable Circle Packing SVG
│   └── Header.tsx            # shadcn top navigation bar
├── data/                     # The JSON-like graph/tree database
│   ├── index.ts              # Root compiler
│   ├── types.ts              # TypeScript interfaces
│   └── domains/              # Individual modular data files
│       ├── science.ts
│       ├── engineering.ts
│       └── ...
└── ...
```

## 🗺️ Future Roadmap

- **Graph Edges**: Implement a side inspector panel to reveal cross-disciplinary links (e.g., showing how "Bioinformatics" bridges Biology and Computer Science).
- **Career Details**: Add salary data, required degrees, and descriptions to the leaf nodes.
- **Search Functionality**: Add a command palette to quickly locate and zoom to specific careers.
