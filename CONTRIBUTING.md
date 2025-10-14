# Contributing to reBiz

Welcome to the reBiz project! This guide will help you get started with
contributing to our codebase.

## 🎯 Getting Started

### Prerequisites

- Node.js v20 or higher
- npm v9 or higher
- Git installed and configured
- GitHub account

### First-Time Setup

1. Fork the repository on GitHub
2. Clone your fork locally
3. Set up the upstream remote
4. Install dependencies

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/applications.git
cd applications

# Add upstream remote
git remote add upstream https://github.com/ORIGINAL_REPO/applications.git

# Install dependencies
npm install
```

## 🔄 Development Workflow

### 1. Before Starting Work

```bash
# Get latest changes from main
git checkout main
git pull upstream main

# Create a new branch for your feature
git checkout -b feature/your-feature-name
```

### 2. While Developing

- Make small, focused commits
- Write descriptive commit messages
- Test your changes locally
- Follow code style guidelines

### 3. Before Submitting

```bash
# Run quality checks
npm run type-check    # Check TypeScript errors
npm run lint:fix      # Fix linting issues
npm run test          # Run tests
npm run build:apps    # Ensure project builds
```

### 4. Submitting Your Work

```bash
# Push to your fork
git push origin feature/your-feature-name

# Create Pull Request on GitHub
```

## 📝 Pull Request Guidelines

### PR Title Format

Use conventional commit format:

- `feat: add user authentication`
- `fix: resolve dashboard loading issue`
- `docs: update README setup instructions`
- `style: improve mobile responsiveness`

### PR Description Template

```markdown
## What does this PR do?

Brief description of the changes

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Code refactoring

## Testing

- [ ] I have tested these changes locally
- [ ] I have added/updated tests
- [ ] All existing tests pass

## Screenshots (if applicable)

Add screenshots showing the changes

## Checklist

- [ ] My code follows the project style guidelines
- [ ] I have performed a self-review of my code
- [ ] I have commented my code where necessary
- [ ] My changes generate no new warnings
- [ ] I have updated documentation if needed
```

## 🎨 Code Style Guidelines

### TypeScript/React Standards

```typescript
// ✅ Good: Proper interface definition
interface UserProps {
  id: string;
  name: string;
  email: string;
  isActive?: boolean;
}

// ✅ Good: Functional component with proper typing
const UserCard: React.FC<UserProps> = ({
  id,
  name,
  email,
  isActive = true,
}) => {
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p>{email}</p>
      {isActive && <span>Active</span>}
    </div>
  );
};

// ❌ Bad: No type definitions
const UserCard = ({ id, name, email, isActive }) => {
  // Component code
};
```

### File Organization

```
components/
├── common/           # Shared components
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.test.tsx
│   │   └── index.ts
│   └── Modal/
├── forms/            # Form-specific components
└── layout/           # Layout components
```

### Import Order

```typescript
// 1. React and Next.js imports
import React from 'react';
import { useRouter } from 'next/navigation';

// 2. Third-party libraries
import { Button, TextField } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

// 3. Internal imports (absolute)
import { AuthProvider } from '@/components/AuthProvider';
import { userService } from '@/services/userService';

// 4. Relative imports
import './Component.styles.css';
```

## 🧪 Testing Guidelines

### Unit Tests

```typescript
// Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when loading', () => {
    render(<Button isLoading>Submit</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
```

### Test Coverage Requirements

- All new features must have tests
- Aim for 80%+ test coverage
- Test both happy path and error cases
- Include accessibility tests when relevant

## 📚 Documentation Standards

### Component Documentation

````typescript
/**
 * UserCard component displays user information in a card format
 *
 * @param id - Unique identifier for the user
 * @param name - Display name of the user
 * @param email - User's email address
 * @param isActive - Whether the user is currently active
 * @param onEdit - Callback function when edit button is clicked
 *
 * @example
 * ```tsx
 * <UserCard
 *   id="123"
 *   name="John Doe"
 *   email="john@example.com"
 *   isActive={true}
 *   onEdit={(id) => console.log('Edit user', id)}
 * />
 * ```
 */
interface UserCardProps {
  id: string;
  name: string;
  email: string;
  isActive?: boolean;
  onEdit?: (id: string) => void;
}
````

### README Updates

When adding new features, update relevant documentation:

- Add new scripts to package.json
- Update setup instructions if needed
- Document new environment variables
- Add troubleshooting steps for common issues

## 🔍 Code Review Process

### For Authors

1. **Self-review**: Review your own PR first
2. **Test thoroughly**: Ensure all functionality works
3. **Write clear descriptions**: Explain what and why
4. **Respond promptly**: Address review comments quickly
5. **Keep PRs small**: Easier to review and merge

### For Reviewers

1. **Be constructive**: Suggest improvements, don't just criticize
2. **Check functionality**: Test the changes locally if needed
3. **Review thoroughly**: Look at code quality, not just functionality
4. **Approve explicitly**: Use GitHub's review system
5. **Ask questions**: If something is unclear, ask for clarification

### Review Checklist

- [ ] Code follows project style guidelines
- [ ] Functionality works as described
- [ ] No obvious bugs or security issues
- [ ] Tests are adequate and passing
- [ ] Documentation is updated if needed
- [ ] Performance impact is acceptable
- [ ] Accessibility considerations are met

## 🚀 Release Process

### Semantic Versioning

We follow [SemVer](https://semver.org/):

- **MAJOR**: Breaking changes
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes (backward compatible)

### Branch Protection

- `main` branch is protected
- Requires PR review before merge
- All CI checks must pass
- No direct pushes to main

## 🐛 Bug Reports

### Bug Report Template

```markdown
**Bug Description** A clear description of what the bug is.

**Steps to Reproduce**

1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected Behavior** What you expected to happen.

**Actual Behavior** What actually happened.

**Screenshots** If applicable, add screenshots.

**Environment**

- OS: [e.g. Windows 10, macOS 12]
- Browser: [e.g. Chrome 96, Firefox 95]
- Node.js version: [e.g. v18.0.0]

**Additional Context** Any other context about the problem.
```

## 💡 Feature Requests

### Feature Request Template

```markdown
**Feature Description** A clear description of the feature you'd like to see.

**Problem Statement** What problem does this feature solve?

**Proposed Solution** How would you like this feature to work?

**Alternatives Considered** Other solutions you've considered.

**Additional Context** Any other context, mockups, or examples.
```

## 🎓 Learning Resources

### For New Contributors

- [First Contributions](https://github.com/firstcontributions/first-contributions)
- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)
- [Understanding Git Flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)

### Project-Specific Learning

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Material-UI Documentation](https://mui.com)

## 🤝 Community Guidelines

### Be Respectful

- Use welcoming and inclusive language
- Be respectful of differing viewpoints
- Accept constructive criticism gracefully
- Focus on what's best for the community

### Be Collaborative

- Help other contributors
- Share knowledge and experiences
- Ask questions when you're unsure
- Provide context for your decisions

### Be Patient

- Remember that everyone is learning
- Take time to explain things clearly
- Be patient with the review process
- Understand that priorities may change

---

## 📞 Getting Help

### Stuck on Something?

1. **Check existing issues**: Someone might have faced the same problem
2. **Search documentation**: Look through project docs and dependencies
3. **Ask the team**: Use our communication channels
4. **Create an issue**: If it's a bug or missing documentation

### Communication Channels

- **GitHub Issues**: For bugs and feature requests
- **GitHub Discussions**: For general questions and ideas
- **Team Chat**: For quick questions and daily communication

---

Thank you for contributing to reBiz! Every contribution, no matter how small,
makes a difference. 🎉
