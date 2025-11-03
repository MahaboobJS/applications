const fs = require('fs');
const path = require('path');

console.log('🔧 Setting up Auth App environment files...\n');

// Create frontend .env file
const frontendEnvPath = path.join(__dirname, 'apps', 'auth-frontend', '.env');
const frontendEnvContent = `# Frontend Environment Variables
VITE_API_URL=http://localhost:3000/api
`;

if (!fs.existsSync(frontendEnvPath)) {
  fs.writeFileSync(frontendEnvPath, frontendEnvContent);
  console.log('✅ Created apps/auth-frontend/.env file');
} else {
  console.log('ℹ️  apps/auth-frontend/.env already exists');
}

// Create backend .env file
const backendEnvPath = path.join(__dirname, 'apps', 'auth-backend', '.env');
const backendEnvContent = `# Backend Environment Variables
PORT=3000
MONGODB_URI=mongodb://localhost:27017/auth-app
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production-${Date.now()}
FRONTEND_URL=http://localhost:4200
`;

if (!fs.existsSync(backendEnvPath)) {
  fs.writeFileSync(backendEnvPath, backendEnvContent);
  console.log('✅ Created apps/auth-backend/.env file');
} else {
  console.log('ℹ️  apps/auth-backend/.env already exists');
}

console.log('\n🎉 Environment files setup complete!');
console.log('\n📋 Next steps:');
console.log('1. Make sure MongoDB is running');
console.log('2. Start the backend: npm run auth-backend:dev');
console.log('3. Start the frontend: npm run auth-frontend:dev');
console.log('\n🌐 The app will be available at:');
console.log('   Frontend: http://localhost:4200');
console.log('   Backend:  http://localhost:5000');




