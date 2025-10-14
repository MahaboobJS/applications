import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Paper,
  Grid,
  Card,
  CardContent,
  AppBar,
  Toolbar,
  IconButton,
} from '@mui/material';
import {
  ExitToApp,
  Dashboard,
  Assignment,
  School,
  Notifications,
  Person,
} from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';

const WelcomePage: React.FC = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      {/* Header */}
      <AppBar position="static" sx={{ backgroundColor: '#7c3aed' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            Student Portal
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography variant="body1" sx={{ color: 'white' }}>
              Welcome, {user?.username}!
            </Typography>
            <IconButton color="inherit" onClick={handleLogout}>
              <ExitToApp />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Welcome Section */}
        <Paper 
          elevation={3} 
          sx={{ 
            p: 4, 
            mb: 4, 
            background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
            color: 'white',
            borderRadius: 2
          }}
        >
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            Welcome to Your Student Portal!
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9, mb: 3 }}>
            You have successfully logged in. Explore your dashboard and manage your academic journey.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              fontWeight: 'bold',
              px: 4,
              py: 1.5,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
              },
            }}
            startIcon={<Dashboard />}
          >
            Go to Dashboard
          </Button>
        </Paper>

        {/* Quick Actions Grid */}
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Card 
              sx={{ 
                height: '100%',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4,
                }
              }}
            >
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <Assignment 
                  sx={{ 
                    fontSize: 48, 
                    color: '#7c3aed', 
                    mb: 2 
                  }} 
                />
                <Typography variant="h6" component="h2" gutterBottom>
                  Assignments
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  View and submit your assignments
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Card 
              sx={{ 
                height: '100%',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4,
                }
              }}
            >
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <School 
                  sx={{ 
                    fontSize: 48, 
                    color: '#7c3aed', 
                    mb: 2 
                  }} 
                />
                <Typography variant="h6" component="h2" gutterBottom>
                  Courses
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Access your enrolled courses
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Card 
              sx={{ 
                height: '100%',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4,
                }
              }}
            >
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <Notifications 
                  sx={{ 
                    fontSize: 48, 
                    color: '#7c3aed', 
                    mb: 2 
                  }} 
                />
                <Typography variant="h6" component="h2" gutterBottom>
                  Notifications
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Stay updated with latest news
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Card 
              sx={{ 
                height: '100%',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4,
                }
              }}
            >
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <Person 
                  sx={{ 
                    fontSize: 48, 
                    color: '#7c3aed', 
                    mb: 2 
                  }} 
                />
                <Typography variant="h6" component="h2" gutterBottom>
                  Profile
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Manage your account settings
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Recent Activity Section */}
        <Paper elevation={2} sx={{ mt: 4, p: 3 }}>
          <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
            Recent Activity
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', p: 2, backgroundColor: '#f8fafc', borderRadius: 1 }}>
              <Assignment sx={{ color: '#7c3aed', mr: 2 }} />
              <Box>
                <Typography variant="body1" fontWeight="medium">
                  New assignment posted
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Mathematics - Due in 3 days
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', p: 2, backgroundColor: '#f8fafc', borderRadius: 1 }}>
              <School sx={{ color: '#7c3aed', mr: 2 }} />
              <Box>
                <Typography variant="body1" fontWeight="medium">
                  Course material updated
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Computer Science - New lecture notes available
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', p: 2, backgroundColor: '#f8fafc', borderRadius: 1 }}>
              <Notifications sx={{ color: '#7c3aed', mr: 2 }} />
              <Box>
                <Typography variant="body1" fontWeight="medium">
                  System maintenance scheduled
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Portal will be unavailable on Sunday 2-4 AM
                </Typography>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default WelcomePage;
