# Quick Start Guide - CodePath

## First Time Setup (5 minutes)

### 1. Install Prerequisites
- **Node.js**: Download from [nodejs.org](https://nodejs.org/) (v18+)
- **Git**: Download from [git-scm.com](https://git-scm.com/)
- **PostgreSQL**: (Will be needed later)
  - Mac: [postgresapp.com](https://postgresapp.com/) or `brew install postgresql@14`
  - Windows: [postgresql.org](https://www.postgresql.org/download/windows/)

### 2. Clone & Install (Both Mac & Windows)
```bash
# Clone the repository
git clone <repository-url>
cd DegreeWise

# Install dependencies
npm install

# Copy environment file
# Mac/Linux:
cp .env.example .env

# Windows (PowerShell):
Copy-Item .env.example .env

# Windows (Command Prompt):
copy .env.example .env
```

### 3. Start Development
```bash
npm run dev
```
Open: http://localhost:3000

---

## Daily Workflow

### Starting Work
```bash
git pull                # Get latest changes
npm install             # Install any new dependencies
npm run dev             # Start dev server
```

### Before Committing
```bash
npm run format          # Format code
npm run lint            # Check for errors
git add .               # Stage changes
git commit -m "message" # Commit with message
git push                # Push to GitHub
```

---

## Common Commands (Cross-Platform)

All these work identically on Mac and Windows:

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run format       # Format with Prettier
```

---

## Troubleshooting

### Port 3000 Already in Use?
```bash
# Use different port (both platforms)
npm run dev -- -p 3001
```

### Module Not Found?
```bash
# Reinstall dependencies (both platforms)
rm -rf node_modules
npm install
```

### Git Line Ending Issues?
Already handled by `.gitattributes`! Just make sure you ran:
```bash
# Mac:
git config --global core.autocrlf input

# Windows:
git config --global core.autocrlf true
```

---

## Need More Help?

- **Detailed Setup**: See [SETUP.md](./SETUP.md)
- **Project Overview**: See [README.md](./README.md)
- **Issues**: Check GitHub Issues or create a new one
- **Team Chat**: Reach out to your partner

---

## Verification Checklist

After setup, verify:
- [ ] `node --version` shows v18 or higher
- [ ] `npm run dev` starts without errors
- [ ] Browser shows homepage at http://localhost:3000
- [ ] VS Code has ESLint and Prettier extensions
- [ ] `.env` file exists (copied from `.env.example`)

✅ All green? You're ready to code!
