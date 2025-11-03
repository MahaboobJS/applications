# Auth Backend

Next.js backend API for authentication system built with TypeScript, MongoDB, and JWT.

## Features

- **User Registration**: Create new user accounts with validation
- **User Login**: Authenticate users with email and password
- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcryptjs for secure password storage
- **MongoDB Integration**: User data persistence with Mongoose
- **CORS Support**: Cross-origin requests enabled
- **Input Validation**: Server-side validation for all endpoints

## Tech Stack

- Next.js 15 with API Routes
- TypeScript
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing
- CORS enabled

## Setup

1. **Environment Variables**: Create a `.env.local` file in the project root:
   ```
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/auth-app
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   FRONTEND_URL=http://localhost:4200
   ```

2. **Start MongoDB**: Make sure MongoDB is running on your system

3. **Start Development Server**:
   ```bash
   # From E:\applications directory
   npx nx serve auth-backend
   ```

The backend will be available at http://localhost:3000

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login with email and password
- `GET /api/auth/me` - Get current user profile (protected)
- `POST /api/auth/logout` - Logout (client-side token removal)

### Other
- `GET /api/health` - Health check endpoint

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── auth/
│   │   │   ├── register/route.ts
│   │   │   ├── login/route.ts
│   │   │   ├── me/route.ts
│   │   │   └── logout/route.ts
│   │   └── health/route.ts
│   ├── layout.tsx
│   └── page.tsx
├── lib/
│   ├── mongodb.ts  # Database connection
│   └── auth.ts     # JWT utilities
└── models/
    └── User.ts     # User model
```

## Development

### Available Scripts

- `npx nx serve auth-backend` - Start development server
- `npx nx build auth-backend` - Build for production
- `npx nx test auth-backend` - Run tests

### Dependencies

All dependencies are managed through the main workspace package.json. The backend uses:

- **Next.js 15**: React framework with API routes
- **Mongoose**: MongoDB object modeling
- **jsonwebtoken**: JWT token generation and verification
- **bcryptjs**: Password hashing
- **TypeScript**: Type safety

## API Usage Examples

### Register a new user
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "password123",
    "firstName": "John",
    "lastName": "Doe"
  }'
```

### Login
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "password123"
  }'
```

### Get user profile (requires token)
```bash
curl -X GET http://localhost:3000/api/auth/me \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```