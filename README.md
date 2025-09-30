# CodePath - CS Graduation Planner

A smart graduation planner for Computer Science students at MSU Denver. Analyzes transcripts, tracks progress, checks prerequisites, and generates personalized graduation timelines.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL (coming soon)
- **ORM**: Prisma (coming soon)

## Getting Started

### Prerequisites

See [SETUP.md](./SETUP.md) for detailed cross-platform installation instructions (Mac & Windows).

### Quick Start

1. **Clone and install**:
   ```bash
   git clone <repository-url>
   cd DegreeWise
   npm install
   ```

2. **Setup environment**:
   ```bash
   # Mac/Linux
   cp .env.example .env

   # Windows (Command Prompt)
   copy .env.example .env
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Open browser**: http://localhost:3000

## Project Structure

```
DegreeWise/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Homepage
│   │   └── globals.css   # Global styles
│   ├── components/       # React components
│   ├── lib/              # Utility functions
│   └── types/            # TypeScript types
├── .env.example          # Environment variables template
├── .gitattributes        # Cross-platform line endings
├── .gitignore            # Git ignore rules
├── SETUP.md              # Detailed setup guide
└── package.json          # Dependencies and scripts
```

## Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
```

## Features (Roadmap)

- [ ] Transcript upload and parsing
- [ ] Course prerequisite tracking
- [ ] Degree progress visualization
- [ ] Semester planning
- [ ] Graduation timeline generation
- [ ] Course recommendations

## Development

This project follows cross-platform best practices:
- Forward slashes (`/`) in all paths
- npm scripts for all commands
- LF line endings (handled by .gitattributes)
- OS-agnostic file operations

See [SETUP.md](./SETUP.md) for the complete development environment guide.

## License

ISC