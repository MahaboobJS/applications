# Development Guide for reBIZ

## 🎯 Quick Start for Freshers

This guide will help you understand how to work on the reBIZ project as a beginner developer.

## 📚 Learning Path

### Week 1: Fundamentals
1. **HTML/CSS Basics**
   - Learn basic HTML tags and CSS styling
   - Understand flexbox and grid layouts
   - Practice responsive design

2. **JavaScript Fundamentals**
   - Variables, functions, arrays, objects
   - DOM manipulation
   - ES6+ features (arrow functions, destructuring, async/await)

3. **Git Basics**
   - Clone, add, commit, push, pull
   - Understanding branches
   - Basic merge conflict resolution

### Week 2: React & TypeScript
1. **React Concepts**
   - Components and JSX
   - Props and state
   - Event handling
   - Hooks (useState, useEffect)

2. **TypeScript Basics**
   - Types and interfaces
   - Function typing
   - Component props typing

### Week 3: Project-Specific Technologies
1. **Next.js**
   - File-based routing
   - Pages and layouts
   - API routes

2. **Material-UI**
   - Using pre-built components
   - Theming and customization

## 🛠️ Development Environment Setup

### Essential VS Code Extensions
```json
{
  "recommendations": [
    "ms-vscode.vscode-typescript-next",
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-eslint",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense",
    "ms-vscode.vscode-json"
  ]
}
```

### VS Code Settings for Team Consistency
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.preferences.importModuleSpecifier": "relative"
}
```

## 📋 Code Standards

### File Naming Conventions
- **Components**: `PascalCase.tsx` (e.g., `LoginForm.tsx`)
- **Pages**: `page.tsx` (Next.js convention)
- **Utilities**: `camelCase.ts` (e.g., `authUtils.ts`)
- **Constants**: `UPPER_SNAKE_CASE.ts` (e.g., `API_ENDPOINTS.ts`)

### Component Structure
```typescript
// Good component structure
import React from 'react';
import { Button, Box } from '@mui/material';

interface ComponentProps {
  title: string;
  onSubmit: () => void;
  isLoading?: boolean;
}

const MyComponent: React.FC<ComponentProps> = ({ 
  title, 
  onSubmit, 
  isLoading = false 
}) => {
  return (
    <Box>
      <h2>{title}</h2>
      <Button 
        onClick={onSubmit}
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : 'Submit'}
      </Button>
    </Box>
  );
};

export default MyComponent;
```

### Git Commit Message Format
We use conventional commits:
```
type(scope): description

Examples:
feat(auth): add login form validation
fix(dashboard): resolve chart rendering issue
docs(readme): update setup instructions
style(header): improve mobile responsiveness
```

## 🧪 Testing Guidelines

### Writing Tests
```typescript
// Component test example
import { render, screen, fireEvent } from '@testing-library/react';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  it('renders title correctly', () => {
    render(<MyComponent title="Test Title" onSubmit={() => {}} />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('calls onSubmit when button is clicked', () => {
    const mockSubmit = jest.fn();
    render(<MyComponent title="Test" onSubmit={mockSubmit} />);
    
    fireEvent.click(screen.getByText('Submit'));
    expect(mockSubmit).toHaveBeenCalledTimes(1);
  });
});
```

## 🔄 Daily Workflow

### Morning Routine
```bash
# 1. Get latest changes
git checkout main
git pull origin main

# 2. Update dependencies if needed
npm install

# 3. Create your feature branch
git checkout -b feature/your-feature-name

# 4. Start development
npm run dev
```

### Development Process
```bash
# Run these commands regularly while developing:

# Check for type errors
npm run type-check

# Fix code style
npm run lint:fix

# Run tests
npm run test

# Format code
npm run format
```

### End of Day
```bash
# 1. Stage your changes
git add .

# 2. Commit with proper message
npm run commit

# 3. Push to your branch
git push origin feature/your-feature-name

# 4. Create Pull Request on GitHub
```

## 🎨 UI/UX Guidelines

### Design System
- Use Material-UI components whenever possible
- Follow the established color scheme
- Maintain consistent spacing (8px grid system)
- Ensure mobile responsiveness

### Accessibility
- Always include `alt` text for images
- Use semantic HTML tags
- Ensure proper color contrast
- Test with keyboard navigation

## 🚀 Performance Best Practices

### Code Optimization
- Use React.memo for expensive components
- Implement proper loading states
- Optimize images and assets
- Use TypeScript for better code quality

### Bundle Optimization
- Import only what you need from libraries
- Use dynamic imports for large components
- Optimize images with Next.js Image component

## 🐛 Debugging Tips

### Common Issues and Solutions

#### Type Errors
```typescript
// Problem: Property 'name' does not exist on type 'User'
// Solution: Define proper interface
interface User {
  id: string;
  name: string;
  email: string;
}
```

#### Component Not Rendering
```typescript
// Problem: Component returns undefined
// Solution: Always return JSX
const MyComponent = () => {
  return <div>Content</div>; // Always return something
};
```

#### State Not Updating
```typescript
// Problem: State not updating immediately
// Solution: Understand that setState is async
const [count, setCount] = useState(0);

const handleClick = () => {
  setCount(count + 1);
  console.log(count); // This might log old value
};

// Better approach:
const handleClick = () => {
  setCount(prev => prev + 1);
};
```

### Browser Dev Tools
- **Console**: Check for error messages
- **Network**: Monitor API calls
- **React DevTools**: Inspect component state and props
- **Elements**: Debug CSS and HTML structure

## 📖 Learning Resources

### Documentation
- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Next.js Docs](https://nextjs.org/docs)
- [Material-UI Docs](https://mui.com)

### Practice Projects
1. **Todo App**: Learn basic CRUD operations
2. **Weather App**: Practice API integration
3. **Calculator**: Understand state management
4. **Blog**: Learn routing and forms

### YouTube Channels
- Traversy Media
- The Net Ninja
- Academind
- CodeWithHarry (for Hindi speakers)

## 🤝 Team Collaboration

### Code Review Checklist
- [ ] Code follows project conventions
- [ ] No console.log statements in production code
- [ ] Proper TypeScript types are used
- [ ] Tests are written for new features
- [ ] Documentation is updated if needed

### Communication
- Ask questions early and often
- Share your screen when stuck
- Document solutions for common problems
- Help other team members when possible

## 🎯 Goal Setting

### Monthly Goals for Freshers
**Month 1**: Master React basics and component creation
**Month 2**: Learn TypeScript and state management
**Month 3**: Understand Next.js routing and API integration
**Month 4**: Contribute to major features independently

### Weekly Check-ins
- What did you learn this week?
- What challenges did you face?
- What do you want to focus on next week?
- Do you need help with anything?

---

Remember: **Everyone starts somewhere. Focus on consistent learning and don't be afraid to make mistakes!** 🚀
