# Auth Frontend

React frontend application for authentication system built with TypeScript, Material-UI, and React Router.

## Features

- **User Registration**: Create new accounts with email, password, first name, and last name
- **User Login**: Sign in with email and password
- **Session Management**: JWT-based authentication with automatic token handling
- **Protected Routes**: Dashboard requires authentication
- **Responsive Design**: Modern Material-UI design with mobile-friendly interface
- **Form Validation**: Client-side validation for all forms
- **Error Handling**: User-friendly error messages with notifications

## Tech Stack

- React 18 with TypeScript
- Material-UI (MUI) for components
- React Router for navigation
- Axios for API calls
- React Query for state management
- Notistack for notifications

## Setup

1. **Environment Variables**: Create a `.env` file in the root directory:
   ```
   VITE_API_URL=http://localhost:3000/api
   ```

2. **Start Development Server**:
   ```bash
   # From E:\applications directory
   npm run auth-frontend:dev
   ```

The frontend will be available at http://localhost:4200

## Project Structure

```
src/
├── app/
│   ├── components/     # Reusable components (ProtectedRoute, LoadingSpinner)
│   ├── contexts/       # React contexts (AuthContext)
│   ├── pages/          # Page components (Login, Register, Dashboard)
│   └── services/       # API services (authService)
└── main.tsx           # App entry point
```

## Usage

1. **Registration**: Navigate to `/register` to create a new account
2. **Login**: Use `/login` to sign in with existing credentials
3. **Dashboard**: After login, you'll be redirected to `/dashboard`
4. **Logout**: Click the logout button to end your session

## Development

### Available Scripts

- `npm run auth-frontend:dev` - Start development server
- `npm run auth-frontend:build` - Build for production
- `npm run auth-frontend:test` - Run tests

### Dependencies

All dependencies are managed through the main workspace package.json. The frontend uses:
- React 18 with TypeScript
- Material-UI components
- React Router for navigation
- Axios for HTTP requests
- React Query for state management
