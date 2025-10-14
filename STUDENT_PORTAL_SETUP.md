# Student Portal Setup Guide

This guide will help you set up and run the Student Portal application in your Nx workspace.

## Project Overview

The Student Portal consists of two main applications:

1. **student-portal-ui** - React frontend with Material UI
2. **student-portal-backend** - Next.js API backend with MongoDB

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **MongoDB** (running locally or MongoDB Atlas)
- **npm** or **yarn**

## Quick Start

### 1. Install Dependencies

From the root of your Nx workspace:

```bash
npm install
```

### 2. Set Up MongoDB

#### Option A: Local MongoDB
1. Install MongoDB locally
2. Start MongoDB service
3. Create a database named `student-portal`

#### Option B: MongoDB Atlas (Cloud)
1. Create a MongoDB Atlas account
2. Create a new cluster
3. Get your connection string

### 3. Configure Environment Variables

Create a `.env.local` file in the `apps/student-portal-backend` directory:

```env
MONGODB_URI=mongodb://localhost:27017/student-portal
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/student-portal

JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
NEXTAUTH_URL=http://localhost:3001
NEXTAUTH_SECRET=your-nextauth-secret-key
```

### 4. Start the Applications

#### Start the Backend (Terminal 1)
```bash
cd apps/student-portal-backend
npm run dev
```
The backend will be available at `http://localhost:3001`

#### Start the Frontend (Terminal 2)
```bash
cd apps/student-portal-ui
npm run dev
```
The frontend will be available at `http://localhost:4200`

## Using Nx Commands

You can also use Nx commands from the root directory:

```bash
# Start backend
npx nx serve student-portal-backend

# Start frontend
npx nx serve student-portal-ui

# Build both applications
npx nx build student-portal-ui
npx nx build student-portal-backend

# Run tests
npx nx test student-portal-ui
npx nx test student-portal-backend
```

## Application Features

### Frontend (student-portal-ui)
- **Login/Signup Page**: Beautiful UI matching the reference design
- **Welcome Dashboard**: Post-authentication landing page
- **Material UI Components**: Modern, responsive design
- **Authentication Context**: State management for user sessions
- **Routing**: React Router for navigation

### Backend (student-portal-backend)
- **Authentication API**: JWT-based login/signup
- **MongoDB Integration**: User data persistence
- **Password Security**: bcrypt hashing
- **TypeScript**: Full type safety
- **RESTful API**: Clean endpoint structure

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user (protected)

## Database Schema

### User Collection
```typescript
{
  _id: ObjectId,
  username: string,    // Unique, 3-30 characters
  email: string,       // Unique, valid email format
  password: string,    // Hashed with bcrypt
  createdAt: Date,
  updatedAt: Date
}
```

## Testing the Application

1. **Start both applications** (backend and frontend)
2. **Open** `http://localhost:4200` in your browser
3. **Sign up** with a new account
4. **Login** with your credentials
5. **Explore** the welcome dashboard

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Ensure MongoDB is running
   - Check the MONGODB_URI in your .env.local file
   - Verify database permissions

2. **CORS Issues**
   - The backend is configured to allow requests from the frontend
   - Check that both applications are running on the correct ports

3. **Authentication Not Working**
   - Verify JWT_SECRET is set in environment variables
   - Check browser console for API errors
   - Ensure backend is running before frontend

### Development Tips

- Use browser developer tools to inspect network requests
- Check the backend console for API logs
- MongoDB Compass can help visualize your database
- Use Postman or similar tools to test API endpoints directly

## Project Structure

```
apps/
├── student-portal-ui/          # React frontend
│   ├── src/
│   │   ├── app/
│   │   │   ├── contexts/       # Authentication context
│   │   │   └── pages/          # Login and Welcome pages
│   │   └── main.tsx
│   └── package.json
└── student-portal-backend/     # Next.js backend
    ├── src/
    │   ├── app/
    │   │   └── api/            # API routes
    │   ├── lib/                # Database and auth utilities
    │   └── models/             # MongoDB models
    └── package.json
```

## Next Steps

Once the basic setup is working, you can extend the application with:

- Additional user profile features
- Course management functionality
- Assignment tracking
- Notification system
- Admin dashboard
- File upload capabilities
- Real-time features with WebSockets

## Support

If you encounter any issues:

1. Check the console logs for both frontend and backend
2. Verify all environment variables are set correctly
3. Ensure MongoDB is running and accessible
4. Check that all dependencies are installed

Happy coding! 🚀

