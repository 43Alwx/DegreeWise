# CodePath - Development Environment Setup

This guide ensures both Mac and Windows developers can work on CodePath seamlessly.

## Team Configuration
- **Developer 1**: Mac
- **Developer 2**: Windows

---

## Prerequisites Installation

### 1. Node.js (v18 or higher)
**Both Mac & Windows:**
- Download from [nodejs.org](https://nodejs.org/)
- Choose the LTS (Long Term Support) version
- After installation, verify:
  ```bash
  node --version
  npm --version
  ```

### 2. Git
**Mac:**
```bash
# Using Homebrew (recommended)
brew install git

# Or download from git-scm.com
```

**Windows:**
- Download from [git-scm.com](https://git-scm.com/)
- During installation, select "Use Git from the Windows Command Prompt"

**Verify (both):**
```bash
git --version
```

### 3. PostgreSQL (v14 or higher)

**Mac Option 1 - Postgres.app (Easiest):**
- Download from [postgresapp.com](https://postgresapp.com/)
- Drag to Applications folder
- Click to start PostgreSQL
- Configure PATH (add to `~/.zshrc` or `~/.bash_profile`):
  ```bash
  export PATH="/Applications/Postgres.app/Contents/Versions/latest/bin:$PATH"
  ```

**Mac Option 2 - Homebrew:**
```bash
brew install postgresql@14
brew services start postgresql@14
```

**Windows:**
- Download from [postgresql.org](https://www.postgresql.org/download/windows/)
- Run installer, remember your postgres password
- Add to PATH if needed (installer usually does this)

**Verify (both):**
```bash
psql --version
```

### 4. VS Code (Recommended)
**Both Mac & Windows:**
- Download from [code.visualstudio.com](https://code.visualstudio.com/)

---

## VS Code Extensions (Both Developers)

Install these extensions for the best development experience:

1. **ESLint** (`dbaeumer.vscode-eslint`)
2. **Prettier** (`esbenp.prettier-vscode`)
3. **Tailwind CSS IntelliSense** (`bradlc.vscode-tailwindcss`)
4. **Prisma** (`Prisma.prisma`)
5. **GitLens** (`eamodio.gitlens`)

**Quick Install:**
Open VS Code Command Palette (Cmd/Ctrl + Shift + P) and run:
```
ext install dbaeumer.vscode-eslint esbenp.prettier-vscode bradlc.vscode-tailwindcss Prisma.prisma eamodio.gitlens
```

---

## Git Configuration

**IMPORTANT**: Run these commands to ensure consistent line endings across platforms.

**On Mac:**
```bash
git config --global core.autocrlf input
```

**On Windows:**
```bash
git config --global core.autocrlf true
```

**Both should also set:**
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

---

## Project Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd DegreeWise
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
```bash
# Copy the example environment file
# Mac/Linux:
cp .env.example .env

# Windows (Command Prompt):
copy .env.example .env

# Windows (PowerShell):
Copy-Item .env.example .env
```

### 4. Configure Database
Edit `.env` and update the `DATABASE_URL` with your PostgreSQL credentials:
```
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/codepath"
```

### 5. Create Database
**Both platforms:**
```bash
# Create the database (run in psql or pgAdmin)
createdb codepath

# Or connect to PostgreSQL and run:
# CREATE DATABASE codepath;
```

### 6. Initialize Prisma (Once Database Schema is Added)
```bash
npm run db:generate
npm run db:push
```

### 7. Start Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Common Issues & Solutions

### Issue: Port 3000 Already in Use

**Mac:**
```bash
# Find and kill process using port 3000
lsof -ti:3000 | xargs kill
```

**Windows (PowerShell):**
```powershell
# Find process
netstat -ano | findstr :3000
# Kill process (replace <PID> with actual process ID)
taskkill /PID <PID> /F
```

**Better Solution (Both):**
Use a different port:
```bash
npm run dev -- -p 3001
```

### Issue: PostgreSQL Not Running

**Mac:**
```bash
# If using Homebrew
brew services list
brew services start postgresql@14

# If using Postgres.app, just click the elephant icon
```

**Windows:**
- Open Services app (Win + R, type `services.msc`)
- Find "postgresql-x64-14" service
- Click "Start"

### Issue: Permission Denied on Scripts

**Mac/Linux:**
```bash
chmod +x scripts/*.sh
```

### Issue: Module Not Found

**Both:**
```bash
# Clear cache and reinstall
rm -rf node_modules
npm install
```

---

## Available Scripts

All scripts work identically on both Mac and Windows:

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run db:generate  # Generate Prisma Client
npm run db:push      # Push schema to database
npm run db:studio    # Open Prisma Studio (DB GUI)
npm run db:migrate   # Run database migrations
```

---

## Workflow Best Practices

### Before Starting Work
1. Pull latest changes: `git pull`
2. Install any new dependencies: `npm install`
3. Check database is running
4. Start dev server: `npm run dev`

### Before Committing
1. Format code: `npm run format`
2. Run linter: `npm run lint`
3. Test the feature on your system
4. Commit with clear message

### Cross-Platform Testing
- Before major commits, both developers should test the feature
- Verify npm scripts work on both systems
- Check database migrations work correctly
- Ensure no OS-specific code was added (like Mac-only paths)

---

## Path Conventions

**ALWAYS use forward slashes (/) in code** - they work on both Mac and Windows:

✅ **DO:**
```typescript
import { Course } from '@/types/course'
import data from './data/courses.json'
```

❌ **DON'T:**
```typescript
import { Course } from '@\types\course'  // Windows-specific, will break on Mac
```

---

## Communication

- **Issues**: Create GitHub issues for bugs or features
- **Questions**: Use team chat or GitHub Discussions
- **Blocked?**: Reach out to your partner immediately

---

## Verification Checklist

After completing setup, both developers should verify:

- [ ] `node --version` shows v18+
- [ ] `git --version` works
- [ ] `psql --version` works
- [ ] PostgreSQL service is running
- [ ] VS Code extensions installed
- [ ] `.env` file created with correct database URL
- [ ] `npm install` completed without errors
- [ ] `npm run dev` starts server successfully
- [ ] Browser shows CodePath homepage at http://localhost:3000
- [ ] Can create and switch git branches

---

## Next Steps

Once setup is complete, proceed to:
1. Review the project structure in the README
2. Check the GitHub Projects board for assigned tasks
3. Run through the tutorial (if available)
4. Start with your first issue!

---

## Getting Help

If you encounter issues not covered here:
1. Check the project's GitHub Issues
2. Search for the error message online
3. Ask your team member - they might have solved it
4. Document the solution for others!
