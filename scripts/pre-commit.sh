#!/bin/bash

echo "🚀 Running pre-commit checks..."

# Run lint-staged to check staged files
npx lint-staged

# Check if lint-staged passed
if [ $? -ne 0 ]; then
  echo "❌ Pre-commit checks failed. Please fix the issues and try again."
  exit 1
fi

echo "✅ Pre-commit checks passed!"
