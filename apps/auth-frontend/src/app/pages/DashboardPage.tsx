import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Avatar,
} from '@mui/material';
import { Logout } from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const DashboardPage: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #80CBC4 0%, #00897B 100%)',
      py: 4 
    }}>
      <Container maxWidth="md">
        <Box sx={{ py: 8, textAlign: 'center' }}>
          {/* Header with Logout */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 4 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#333333',
                color: '#FFFFFF',
                '&:hover': {
                  backgroundColor: '#555555',
                }
              }}
              startIcon={<Logout />}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Box>

          {/* Welcome Message */}
          <Card sx={{ 
            maxWidth: 600, 
            mx: 'auto', 
            p: 4,
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
          }}>
            <CardContent>
              <Avatar
                sx={{
                  width: 100,
                  height: 100,
                  bgcolor: '#26A69A',
                  fontSize: '3rem',
                  mx: 'auto',
                  mb: 3,
                }}
              >
                {user?.firstName?.charAt(0)}{user?.lastName?.charAt(0)}
              </Avatar>
              
              <Typography variant="h3" component="h1" gutterBottom sx={{ color: '#00897B', fontWeight: 700 }}>
                Welcome, {user?.firstName}!
              </Typography>
              
              <Typography variant="h6" sx={{ mb: 2, color: '#666666', fontWeight: 400 }}>
                You have successfully logged in to your account.
              </Typography>
              
              
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default DashboardPage;
