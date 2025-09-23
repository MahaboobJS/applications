import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const WelcomePage = ({ username, onLogout }: { username: string; onLogout: () => void }) => {
  return (
    <Box sx={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#f72585',
      color: '#fff',
    }}>
      <Typography variant="h3" fontWeight={700} gutterBottom>
        Welcome, {username}!
      </Typography>
      <Typography variant="h5" gutterBottom>
        You have successfully logged in to the Student Portal.
      </Typography>
      <Button variant="contained" sx={{ mt: 4, background: '#232323', color: '#fff', fontWeight: 700 }} onClick={onLogout}>
        Log Out
      </Button>
    </Box>
  );
};

export default WelcomePage;
