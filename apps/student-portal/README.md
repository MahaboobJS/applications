# Student Portal

This project contains a full-stack student portal with login/signup functionality.

- Frontend: React.js + Material UI
- Backend: Node.js/Express + MongoDB

## Structure
- `client/` - React frontend
- `server/` - Node.js backend

## Setup Instructions

### Frontend
1. Navigate to `client` and run:
   ```sh
   npx create-react-app . --template typescript
   npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
   ```
2. Add your login/signup UI in `src/`.

### Backend
1. Navigate to `server` and run:
   ```sh
   npm init -y
   npm install express mongoose cors dotenv
   npm install --save-dev nodemon
   ```
2. Create your Express server and MongoDB models in `server/`.

---

Replace this README with project-specific details as you build.
