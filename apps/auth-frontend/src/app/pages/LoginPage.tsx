import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  InputAdornment,
  IconButton,
  Grid,
} from '@mui/material';
import { Visibility, VisibilityOff, Email, Lock } from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';
import AbstractShapes from '../components/AbstractShapes';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      {/* Left Panel - Login Form */}
      <Box
        sx={{
          flex: '0 0 45%',
          backgroundColor: '#80CBC4',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0 60px',
          position: 'relative',
        }}
      >
        <Box sx={{ width: '100%', maxWidth: 400 }}>
          <Box sx={{ textAlign: 'left', mb: 4 }}>
            <Typography 
              component="h1" 
              variant="h3" 
              sx={{ 
                color: '#FFFFFF', 
                fontWeight: 700, 
                mb: 1,
                fontSize: '2.5rem'
              }}
            >
              Login
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#E0F2F1', 
                fontWeight: 400,
                fontSize: '1.1rem'
              }}
            >
              Enter your account details
            </Typography>
          </Box>

          {error && (
            <Alert severity="error" sx={{ mb: 3, backgroundColor: 'rgba(244, 67, 54, 0.1)' }}>
              {error}
            </Alert>
          )}

          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Username"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ mb: 2 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email sx={{ color: '#E0F2F1' }} />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ mb: 2 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock sx={{ color: '#E0F2F1' }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff sx={{ color: '#E0F2F1' }} /> : <Visibility sx={{ color: '#E0F2F1' }} />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            
            <Box sx={{ textAlign: 'right', mb: 3 }}>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: '#E0F2F1', 
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  '&:hover': { textDecoration: 'underline' }
                }}
              >
                Forgot Password?
              </Typography>
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ 
                mt: 2, 
                mb: 3, 
                py: 1.5,
                backgroundColor: '#26A69A',
                '&:hover': {
                  backgroundColor: '#00897B',
                }
              }}
              disabled={loading}
            >
              {loading ? 'Signing In...' : 'Login'}
            </Button>
            
            <Box sx={{ textAlign: 'center', mb: 2 }}>
              <Typography variant="body2" sx={{ color: '#E0F2F1', mb: 2 }}>
                Don't have an account?
              </Typography>
              <Button
                component={Link}
                to="/register"
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: '#333333',
                  '&:hover': {
                    backgroundColor: '#555555',
                  }
                }}
              >
                Sign up
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Right Panel - Welcome Message */}
      <Box
        sx={{
          flex: '0 0 55%',
          backgroundColor: '#00897B',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0 60px',
          position: 'relative',
        }}
      >
        <AbstractShapes />
        <Box sx={{ textAlign: 'center', zIndex: 1, position: 'relative' }}>
          <Typography 
            variant="h2" 
            sx={{ 
              color: '#FFFFFF', 
              fontWeight: 700, 
              mb: 2,
              fontSize: '2.2rem',
              lineHeight: 1.2
            }}
          >
            Welcome to our application
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#E0F2F1', 
              fontWeight: 400,
              fontSize: '1.1rem'
            }}
          >
            Login to access your account
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;

