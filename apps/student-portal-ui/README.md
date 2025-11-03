# Student Portal UI

A modern React application built with Material UI for the student portal interface.

## Features

- **Authentication**: Login and signup functionality
- **Modern UI**: Built with Material UI components
- **Responsive Design**: Works on desktop and mobile devices
- **TypeScript**: Full type safety
- **Routing**: React Router for navigation

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB running locally

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:4200`.

## Project Structure

```
src/
├── app/
│   ├── contexts/
│   │   └── AuthContext.tsx      # Authentication context
│   ├── pages/
│   │   ├── LoginPage.tsx        # Login/signup page
│   │   └── WelcomePage.tsx      # Welcome dashboard
│   └── app.tsx                  # Main app component
└── main.tsx                     # Entry point
```

## API Integration

The UI connects to the backend API at `http://localhost:3001` for authentication.

### Available Endpoints

- `POST /api/auth/login` - User login
- `POST /api/auth/signup` - User registration
- `GET /api/auth/me` - Get current user info

## Environment Variables

Create a `.env.local` file in the root directory:

```env
REACT_APP_API_URL=http://localhost:3001
```

## Technologies Used

- React 18
- TypeScript
- Material UI
- React Router
- Axios (for API calls)
- Emotion (for styling)

