#!/bin/bash

# rebiz Project Setup Script for Freshers
# This script helps new team members set up the project quickly

echo "🚀 Welcome to rebiz Project Setup!"
echo "This script will help you set up the project for development."
echo "=================================="

# Check if Node.js is installed
check_node() {
    if ! command -v node &> /dev/null; then
        echo "❌ Node.js is not installed!"
        echo "Please install Node.js from https://nodejs.org/"
        echo "Choose the LTS version (v20 or higher)"
        exit 1
    else
        NODE_VERSION=$(node --version)
        echo "✅ Node.js is installed: $NODE_VERSION"
    fi
}

# Check if npm is installed
check_npm() {
    if ! command -v npm &> /dev/null; then
        echo "❌ npm is not installed!"
        echo "npm should come with Node.js. Please reinstall Node.js."
        exit 1
    else
        NPM_VERSION=$(npm --version)
        echo "✅ npm is installed: v$NPM_VERSION"
    fi
}

# Check if Git is installed
check_git() {
    if ! command -v git &> /dev/null; then
        echo "❌ Git is not installed!"
        echo "Please install Git from https://git-scm.com/"
        exit 1
    else
        GIT_VERSION=$(git --version)
        echo "✅ Git is installed: $GIT_VERSION"
    fi
}

# Install project dependencies
install_dependencies() {
    echo ""
    echo "📦 Installing project dependencies..."
    echo "This might take a few minutes..."
    
    if npm install; then
        echo "✅ Dependencies installed successfully!"
    else
        echo "❌ Failed to install dependencies"
        echo "Try running 'npm cache clean --force' and then 'npm install' again"
        exit 1
    fi
}

# Setup Git hooks
setup_git_hooks() {
    echo ""
    echo "🔧 Setting up Git hooks..."
    
    if npm run prepare; then
        echo "✅ Git hooks set up successfully!"
    else
        echo "⚠️  Warning: Could not set up Git hooks"
        echo "You can set them up later by running 'npm run prepare'"
    fi
}

# Create VS Code settings for the team
create_vscode_settings() {
    echo ""
    echo "⚙️  Creating VS Code settings..."
    
    # Create .vscode directory if it doesn't exist
    mkdir -p .vscode
    
    # Create settings.json
    cat > .vscode/settings.json << 'EOL'
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.preferences.importModuleSpecifier": "relative",
  "files.associations": {
    "*.css": "css",
    "*.scss": "scss"
  },
  "emmet.includeLanguages": {
    "typescript": "html",
    "typescriptreact": "html"
  }
}
EOL

    # Create extensions.json
    cat > .vscode/extensions.json << 'EOL'
{
  "recommendations": [
    "ms-vscode.vscode-typescript-next",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-eslint",
    "bradlc.vscode-tailwindcss",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense",
    "ms-vscode.vscode-json",
    "ms-vscode.vscode-react-refactor"
  ]
}
EOL
    
    echo "✅ VS Code settings created!"
    echo "   - Recommended extensions list added"
    echo "   - Auto-formatting on save enabled"
    echo "   - ESLint auto-fix enabled"
}

# Test the development server
test_dev_server() {
    echo ""
    echo "🧪 Testing development server setup..."
    echo "Starting the development server (this will take a moment)..."
    
    # Start the dev server in background and capture PID
    npm run dev &
    DEV_PID=$!
    
    # Wait a few seconds for server to start
    sleep 10
    
    # Check if server is running
    if curl -s http://localhost:3000 > /dev/null; then
        echo "✅ Development server is working!"
        echo "   You can access the app at http://localhost:3000"
    else
        echo "⚠️  Development server might not be ready yet"
        echo "   Try running 'npm run dev' manually to check"
    fi
    
    # Kill the background process
    kill $DEV_PID 2>/dev/null
    
    echo ""
    echo "Note: The server was stopped automatically for this test"
}

# Run type checking
run_type_check() {
    echo ""
    echo "🔍 Running TypeScript type checking..."
    
    if npm run type-check; then
        echo "✅ No TypeScript errors found!"
    else
        echo "⚠️  There are some TypeScript errors"
        echo "   Don't worry, these can be fixed as you work on the project"
    fi
}

# Main setup function
main() {
    echo "Starting setup process..."
    echo ""
    
    # Check prerequisites
    echo "1️⃣  Checking prerequisites..."
    check_node
    check_npm
    check_git
    
    # Install dependencies
    echo ""
    echo "2️⃣  Installing dependencies..."
    install_dependencies
    
    # Setup Git hooks
    echo ""
    echo "3️⃣  Setting up development tools..."
    setup_git_hooks
    
    # Create VS Code settings
    echo ""
    echo "4️⃣  Configuring VS Code..."
    create_vscode_settings
    
    # Run type checking
    echo ""
    echo "5️⃣  Checking project health..."
    run_type_check
    
    # Test development server
    echo ""
    echo "6️⃣  Testing development server..."
    test_dev_server
    
    # Final instructions
    echo ""
    echo "🎉 Setup complete!"
    echo "=================================="
    echo ""
    echo "Next steps:"
    echo "1. Open the project in VS Code: 'code .'"
    echo "2. Install recommended VS Code extensions when prompted"
    echo "3. Start development server: 'npm run dev'"
    echo "4. Open http://localhost:3000 in your browser"
    echo ""
    echo "Useful commands:"
    echo "- 'npm run dev'        → Start development server"
    echo "- 'npm run build'      → Build the project"
    echo "- 'npm run test'       → Run tests"
    echo "- 'npm run type-check' → Check TypeScript errors"
    echo "- 'npm run lint:fix'   → Fix code style issues"
    echo ""
    echo "Need help? Check the README.md file or ask the team!"
    echo ""
    echo "Happy coding! 🚀"
}

# Run the main function
main
