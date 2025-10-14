# Student Portal Backend

A Next.js API backend for the student portal with MongoDB integration and JWT authentication.

## Features

- **Authentication**: JWT-based login and signup
- **Database**: MongoDB with Mongoose ODM
- **Security**: Password hashing with bcrypt
- **API Routes**: RESTful API endpoints
- **TypeScript**: Full type safety

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB running locally
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create environment file:
Create a `.env.local` file in the project root:

```env
MONGODB_URI=mongodb://localhost:27017/student-portal
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
NEXTAUTH_URL=http://localhost:3001
NEXTAUTH_SECRET=your-nextauth-secret-key
```

3. Start the development server:
```bash
npm run dev
```

The API will be available at `http://localhost:3001`.

## API Endpoints

### Authentication

#### POST `/api/auth/signup`
Register a new user.

**Request Body:**
```json
{
  "username": "string",
  "email": "string",
  "password": "string"
}
```

**Response:**
```json
{
  "message": "User created successfully",
  "user": {
    "id": "string",
    "username": "string",
    "email": "string"
  },
  "token": "string"
}
```

#### POST `/api/auth/login`
Login with username/email and password.

**Request Body:**
```json
{
  "username": "string",
  "password": "string"
}
```

**Response:**
```json
{
  "message": "Login successful",
  "user": {
    "id": "string",
    "username": "string",
    "email": "string"
  },
  "token": "string"
}
```

#### GET `/api/auth/me`
Get current user information (requires authentication).

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "user": {
    "id": "string",
    "username": "string",
    "email": "string"
  }
}
```

## Database Schema

### User Model

```typescript
{
  username: string;    // Unique, 3-30 characters
  email: string;       // Unique, valid email format
  password: string;    // Hashed with bcrypt
  createdAt: Date;
  updatedAt: Date;
}
```

## Project Structure

```
src/
├── app/
│   └── api/
│       └── auth/
│           ├── login/
│           │   └── route.ts
│           ├── signup/
│           │   └── route.ts
│           └── me/
│               └── route.ts
├── lib/
│   ├── mongodb.ts     # Database connection
│   └── auth.ts        # JWT utilities
└── models/
    └── User.ts        # User model
```

## Technologies Used

- Next.js 15
- TypeScript
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- Next.js API Routes

