# reBiz - Business Intelligence Platform
#Venkata Lakshmi has updated this README.md file

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **Advanced Business Intelligence Platform built with Nx monorepo** ✨

## 🚀 Project Overview

rebiz is a modern business intelligence platform built with cutting-edge
technologies, designed to provide powerful analytics and data visualization
capabilities for modern businesses.

## 👥 Team

| Role                         | GitHub                                                       | Status    |
| ---------------------------- | ------------------------------------------------------------ | --------- |
| **Project Architect & Lead** | [@MahaboobJS](https://github.com/MahaboobJS)                 | ✅ Active |
| **Collaborator**             | [@mehreengh](https://github.com/mehreengh)                   | ✅ Active |
| **Collaborator**             | [@Ramya21-11-2003](https://github.com/Ramya21-11-2003)       | ✅ Active |
| **Collaborator**             | [@Venkatalakshmi2004](https://github.com/Venkatalakshmi2004) | ✅ Active |
| **Collaborator**             | [@wasimshaik111](https://github.com/wasimshaik111)           | ✅ Active |

---

## 📖 **BEGINNER'S GUIDE - START HERE** 📖

### 🎯 What is this project?

rebiz is a **Business Intelligence Platform** that helps companies analyze their
data and make better decisions. Think of it like a dashboard that shows charts,
graphs, and reports about business performance.

### 🏗️ What technologies are we using?

- **Next.js**: A React framework for building web applications
- **TypeScript**: JavaScript with type safety (catches errors before they
  happen)
- **Material-UI**: Pre-built UI components that look professional
- **Nx**: A tool that helps manage large projects with multiple applications
- **NextAuth**: Handles user login and authentication

---

## 🛠️ **COMPLETE SETUP GUIDE FOR FRESHERS**

### Step 1: Install Required Software

Before you start, you need to install these tools on your computer:

#### 1.1 Install Node.js

- Go to [https://nodejs.org/](https://nodejs.org/)
- Download the **LTS version** (Long Term Support)
- Run the installer and follow the instructions
- **Verify installation**: Open terminal/command prompt and type:
  ```bash
  node --version
  npm --version
  ```
  You should see version numbers like `v20.x.x` and `9.x.x`

#### 1.2 Install Git

- Go to [https://git-scm.com/](https://git-scm.com/)
- Download and install Git for your operating system
- **Verify installation**:
  ```bash
  git --version
  ```

#### 1.3 Install Visual Studio Code (Recommended)

- Go to [https://code.visualstudio.com/](https://code.visualstudio.com/)
- Download and install VS Code
- Install these essential extensions:
  - TypeScript and JavaScript Language Features
  - ES7+ React/Redux/React-Native snippets
  - Prettier - Code formatter
  - ESLint

### Step 2: Clone and Setup the Project

#### 2.1 Clone the Repository

```bash
# Replace <repository-url> with the actual GitHub repository URL
git clone <repository-url>
cd applications
```

#### 2.2 Install Dependencies

```bash
# This will install all required packages
npm install
```

**What this does**: Downloads all the libraries and tools needed for the
project.

#### 2.3 Start the Development Server

```bash
npm run dev
```

**What this does**: Starts the application in development mode.

#### 2.4 Open in Browser

Open your web browser and go to: `http://localhost:3000`

🎉 **Congratulations!** If you see the rebiz application, you've successfully
set up the project!

---

## 📁 **PROJECT STRUCTURE EXPLAINED**

```
applications/                    # Root folder
├── apps/                       # Contains all applications
│   └── rebiz/                 # Main rebiz application
│       ├── src/               # Source code
│       │   ├── app/           # Next.js pages and layouts
│       │   │   ├── page.tsx   # Home page
│       │   │   ├── layout.tsx # Main layout
│       │   │   ├── auth/      # Authentication pages
│       │   │   └── dashboard/ # Dashboard page
│       │   └── components/    # Reusable components
│       ├── public/            # Static files (images, icons)
│       └── package.json       # App-specific dependencies
├── libs/                      # Shared libraries
│   └── shared/                # Common utilities and components
├── package.json               # Main project dependencies
├── README.md                  # This file
└── node_modules/              # Installed packages (auto-generated)
```

### 🔍 Key Files Explained

- **`package.json`**: Lists all the libraries we use and scripts we can run
- **`apps/rebiz/src/app/page.tsx`**: The main home page
- **`apps/rebiz/src/app/layout.tsx`**: The common layout for all pages
- **`apps/rebiz/src/components/`**: Folder for reusable components
- **`node_modules/`**: Where installed packages are stored (don't modify this)

---

## 🎯 **DAILY DEVELOPMENT WORKFLOW**

### Starting Your Day

```bash
# 1. Get latest changes from GitHub
git pull origin main

# 2. Install any new dependencies
npm install

# 3. Start development server
npm run dev
```

### While Developing

```bash
# Check if your code has any errors
npm run type-check

# Fix code formatting and style issues
npm run lint:fix

# Run tests to make sure nothing broke
npm run test
```

### Before Pushing Code

```bash
# 1. Add your changes
git add .

# 2. Commit with a descriptive message
npm run commit
# This will guide you through writing a proper commit message

# 3. Push to GitHub
git push origin your-branch-name
```

---

## 📜 **ESSENTIAL COMMANDS FOR FRESHERS**

### Development Commands

```bash
npm run dev                    # Start development server (use this daily)
npm run build                  # Build the project for production
npm run type-check            # Check for TypeScript errors
```

### Code Quality Commands

```bash
npm run lint                   # Check for code style issues
npm run lint:fix              # Fix code style issues automatically
npm run format                # Format code with Prettier
npm run test                   # Run all tests
```

### Git Commands (Beginner Friendly)

```bash
git status                     # See what files you've changed
git add .                      # Stage all changes for commit
git commit -m "message"        # Commit changes with a message
git push                       # Push changes to GitHub
git pull                       # Get latest changes from GitHub
```

### Nx Commands (Advanced)

```bash
npx nx graph                  # See visual project structure
npx nx show projects          # List all projects
npx nx reset                  # Clear cache if something breaks
```

---

## 🧑‍💻 **HOW TO ADD NEW FEATURES**

### 1. Creating a New Page

```bash
# Navigate to the app directory
cd apps/rebiz/src/app

# Create a new folder and page file
mkdir my-new-page
touch my-new-page/page.tsx
```

### 2. Creating a New Component

```bash
# Navigate to components directory
cd apps/rebiz/src/components

# Create a new component file
touch MyNewComponent.tsx
```

### 3. Basic Component Template

```typescript
// MyNewComponent.tsx
import React from 'react';

interface MyNewComponentProps {
  title: string;
  description?: string;
}

const MyNewComponent: React.FC<MyNewComponentProps> = ({
  title,
  description,
}) => {
  return (
    <div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
};

export default MyNewComponent;
```

---

## 🚨 **TROUBLESHOOTING GUIDE**

### Common Issues and Solutions

#### 1. "npm install" fails

```bash
# Clear npm cache and try again
npm cache clean --force
rm -rf node_modules
npm install
```

#### 2. "Module not found" errors

```bash
# Make sure all dependencies are installed
npm install

# Check if you're in the right directory
pwd  # Should show path ending with 'applications'
```

#### 3. TypeScript errors

```bash
# Check for specific type errors
npm run type-check

# Most TypeScript errors are solved by adding proper types
```

#### 4. Port 3000 already in use

```bash
# Kill the process using port 3000
npx kill-port 3000

# Or use a different port
npm run dev -- --port 3001
```

#### 5. Git conflicts

```bash
# If you have merge conflicts
git status                     # See conflicted files
# Edit files to resolve conflicts
git add .
git commit -m "resolve conflicts"
```

#### 6. Build failures

```bash
# Clear Nx cache
npx nx reset

# Clean install dependencies
rm -rf node_modules
npm ci
```

---

## 🎓 **LEARNING RESOURCES FOR FRESHERS**

### Essential Technologies to Learn

1. **React**: [https://react.dev/learn](https://react.dev/learn)
2. **TypeScript**:
   [https://www.typescriptlang.org/docs/](https://www.typescriptlang.org/docs/)
3. **Next.js**: [https://nextjs.org/learn](https://nextjs.org/learn)
4. **Material-UI**:
   [https://mui.com/getting-started/](https://mui.com/getting-started/)

### Git & GitHub

- [Git Handbook](https://guides.github.com/introduction/git-handbook/)
- [GitHub Flow](https://guides.github.com/introduction/flow/)

### VS Code Tips

- Learn keyboard shortcuts: `Ctrl+Shift+P` (Command Palette)
- Use integrated terminal: `Ctrl+`` (backtick)
- Format code: `Shift+Alt+F`

---

## 🔄 **GIT WORKFLOW FOR TEAMS**

### Branch Strategy

```bash
# 1. Always start from main branch
git checkout main
git pull origin main

# 2. Create a new branch for your feature
git checkout -b feature/my-new-feature

# 3. Make your changes and commit
git add .
npm run commit

# 4. Push your branch
git push origin feature/my-new-feature

# 5. Create Pull Request on GitHub
# 6. After review and approval, merge to main
```

### Naming Conventions

- **Branches**: `feature/login-page`, `bugfix/header-styling`,
  `hotfix/security-issue`
- **Commits**: Use conventional commits (the `npm run commit` command helps with
  this)
- **Files**: Use PascalCase for components (`LoginPage.tsx`), camelCase for
  utilities (`authUtils.ts`)

---

## 🏗️ **DETAILED TECH STACK**

| Technology         | Purpose              | Why We Use It                                          |
| ------------------ | -------------------- | ------------------------------------------------------ |
| **Next.js 15**     | React Framework      | Server-side rendering, great performance               |
| **TypeScript**     | Programming Language | Catches errors before runtime, better code quality     |
| **Material-UI**    | UI Components        | Pre-built, accessible, professional-looking components |
| **NextAuth.js**    | Authentication       | Secure, easy-to-implement user authentication          |
| **TanStack Query** | Data Fetching        | Smart caching, background updates, error handling      |
| **Nx**             | Monorepo Tool        | Manages multiple projects efficiently                  |
| **Jest**           | Testing Framework    | Unit and integration testing                           |
| **ESLint**         | Code Linting         | Enforces code quality and consistency                  |
| **Prettier**       | Code Formatting      | Automatically formats code for consistency             |
| **Husky**          | Git Hooks            | Runs quality checks before commits                     |

---

## 📋 **DEVELOPMENT CHECKLIST**

### Before Starting Work

- [ ] Pull latest changes: `git pull origin main`
- [ ] Install dependencies: `npm install`
- [ ] Start dev server: `npm run dev`
- [ ] Create feature branch: `git checkout -b feature/my-feature`

### While Developing

- [ ] Write meaningful commit messages
- [ ] Test your changes locally
- [ ] Check for TypeScript errors: `npm run type-check`
- [ ] Fix linting issues: `npm run lint:fix`

### Before Submitting PR

- [ ] All tests pass: `npm run test`
- [ ] Code is properly formatted: `npm run format`
- [ ] No TypeScript errors: `npm run type-check`
- [ ] Build succeeds: `npm run build:apps`
- [ ] Create descriptive PR with screenshots

---

## 🆘 **GETTING HELP**

### When You're Stuck

1. **Check the console**: Look for error messages in browser dev tools
2. **Read the error**: Error messages usually tell you what's wrong
3. **Google the error**: Copy-paste error messages into Google
4. **Ask the team**: Use our team communication channel
5. **Create GitHub Issue**: For bugs or feature requests

### Useful VS Code Shortcuts

- `Ctrl+Shift+P`: Open command palette
- `Ctrl+`` : Toggle terminal
- `Ctrl+/`: Comment/uncomment lines
- `Alt+Shift+F`: Format document
- `Ctrl+D`: Select next occurrence of word
- `F12`: Go to definition

---

## 📞 **SUPPORT & COMMUNICATION**

### For Questions:

- **Technical Issues**: Create GitHub Issues
- **Setup Problems**: Ask in team chat
- **Code Reviews**: Tag team members in Pull Requests
- **General Questions**: Use GitHub Discussions

### Team Communication

- **Daily Updates**: Share what you're working on
- **Blockers**: Report immediately if you're stuck
- **Code Reviews**: Always review each other's code
- **Knowledge Sharing**: Document solutions to common problems

---

**Built with ❤️ by the rebiz Team**

_Happy Coding! Remember, everyone was a beginner once. Don't hesitate to ask
questions and learn from each other._ 🚀

_Powered by Nx, Next.js, and modern web technologies_
