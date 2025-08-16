# WizBI - Business Intelligence Platform

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **Advanced Business Intelligence Platform built with Nx monorepo** ✨

## 🚀 Project Overview

WizBI is a modern business intelligence platform built with cutting-edge technologies, designed to provide powerful analytics and data visualization capabilities for modern businesses.

### 🏗️ Architecture

- **Monorepo Structure**: Nx workspace for scalable development
- **Frontend**: Next.js 15 with React 18 and TypeScript
- **Styling**: Material-UI (MUI) with custom themes
- **State Management**: TanStack Query for server state
- **Authentication**: NextAuth.js
- **Build System**: Nx with optimized caching and task distribution

## 👥 Team

| Role | GitHub | Status |
|------|--------|--------|
| **Project Architect & Lead** | [@MahaboobJS](https://github.com/MahaboobJS) | ✅ Active |
| **Collaborator** | [@mehreengh](https://github.com/mehreengh) | ✅ Active |
| **Collaborator** | [@Ramya21-11-2003](https://github.com/Ramya21-11-2003) | ✅ Active |
| **Collaborator** | [@Venkatalakshmi2004](https://github.com/Venkatalakshmi2004) | ✅ Active |
| **Collaborator** | [@wasimshaik111](https://github.com/wasimshaik111) | ✅ Active |

## 🛠️ Tech Stack

- **Frontend Framework**: Next.js 15.2.5
- **UI Library**: Material-UI (MUI) v7
- **Language**: TypeScript
- **Build Tool**: Nx 21.2.3
- **State Management**: TanStack Query v5
- **Authentication**: NextAuth.js v4
- **Styling**: Styled-components + MUI
- **Testing**: Jest + Cypress
- **Linting**: ESLint + Prettier
- **Git Hooks**: Husky + lint-staged

## 📦 Project Structure

```
├── apps/
│   ├── wizBI/                    # Main WizBI application
│   │   ├── src/
│   │   │   ├── app/              # Next.js app directory
│   │   │   ├── components/       # Shared components
│   │   │   └── ...
│   │   └── project.json
│   └── wizBI-e2e/               # E2E tests
├── libs/
│   ├── shared/
│   │   ├── providers/            # Shared providers
│   │   └── ui-mui-theme/         # MUI theme library
│   └── wiz-bi/
│       ├── ui/                   # UI components
│       ├── ui-theme/             # Theme configurations
│       └── feature-side-navigation/
├── .github/
│   └── workflows/                # CI/CD pipelines
└── tools/                        # Build and dev tools
```

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v20 or higher
- **npm**: v9 or higher
- **Git**: Latest version

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd applications
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   npx nx serve wizBI
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📜 Available Scripts

### Development
```bash
npm run dev                    # Start development server
npm run build                  # Build all projects
npm run build:apps            # Build only applications
```

### Code Quality
```bash
npm run lint                   # Lint all projects
npm run lint:fix              # Lint and auto-fix issues
npm run format                # Format code with Prettier
npm run format:check          # Check formatting
npm run type-check            # TypeScript type checking
```

### Testing
```bash
npm run test                   # Run all tests
npm run test:watch            # Run tests in watch mode
npm run test:coverage         # Run tests with coverage
```

### Git & Commits
```bash
npm run commit                 # Interactive conventional commit
npm run commit:retry          # Retry failed commit
```

### Nx Commands
```bash
npx nx graph                  # Show project dependency graph
npx nx show projects          # List all projects
npx nx affected --target=build  # Build affected projects
npx nx reset                  # Reset Nx cache
```

## 🔄 Development Workflow

### 1. **Conventional Commits**
We use conventional commits for consistent commit messages:
```bash
npm run commit
```

### 2. **Pre-commit Hooks**
Husky automatically runs:
- Code formatting (Prettier)
- Linting (ESLint)
- Type checking (TypeScript)

### 3. **Pull Request Process**
1. Create feature branch from `main`
2. Make changes with conventional commits
3. Push to GitHub
4. Create Pull Request
5. Automated CI checks run
6. Code review by team
7. Merge to `main`

## 🧪 Testing Strategy

- **Unit Tests**: Jest for component and utility testing
- **E2E Tests**: Cypress for end-to-end workflows
- **Type Safety**: TypeScript for compile-time checks
- **Code Quality**: ESLint + Prettier for consistency

## 🚀 Deployment

### CI/CD Pipeline
- **Pull Requests**: Automated validation, testing, and building
- **Main Branch**: Automated deployment to staging
- **Production**: Manual deployment with approval

### Build Commands
```bash
npm run build:apps            # Production build
npm run affected:build        # Build only affected projects
```

## 📊 Nx Features

- **Smart Rebuilds**: Only rebuild what changed
- **Code Generation**: Consistent scaffolding
- **Dependency Graph**: Visual project relationships
- **Task Distribution**: Parallel execution
- **Affected Detection**: Efficient CI/CD

## 🎯 Key Features

- 📊 **Analytics Dashboard**: Real-time business metrics
- 📈 **Data Visualization**: Interactive charts and graphs
- 🔐 **Authentication**: Secure user management
- 🎨 **Theming**: Customizable UI themes
- 📱 **Responsive Design**: Mobile-first approach
- 🔄 **Real-time Updates**: Live data synchronization

## 🤝 Contributing

### Development Guidelines
1. Follow conventional commit format
2. Write tests for new features
3. Update documentation
4. Ensure all CI checks pass
5. Request code review

### Code Style
- Use TypeScript for type safety
- Follow ESLint configuration
- Use Prettier for formatting
- Write meaningful component names
- Add JSDoc for complex functions

## 📚 Documentation

- [Project Structure](./DEVELOPMENT.md)
- [Contributing Guidelines](./CONTRIBUTING.md)
- [Team Members](./COLLABORATORS.md)
- [Nx Documentation](https://nx.dev)

## 🔧 Troubleshooting

### Common Issues

**Build Errors**
```bash
npx nx reset                  # Clear Nx cache
npm ci                        # Clean install
```

**Type Errors**
```bash
npm run type-check            # Check TypeScript errors
```

**Linting Issues**
```bash
npm run lint:fix              # Auto-fix linting issues
```

## 📞 Support

For questions, issues, or contributions:
- Create GitHub Issues for bugs
- Use GitHub Discussions for questions
- Contact project maintainers for urgent issues

---

**Built with ❤️ by the WizBI Team**

*Powered by Nx, Next.js, and modern web technologies*