import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Link,
  InputAdornment,
  IconButton,
  Alert,
  CircularProgress,
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';
import loginIllustration from '../../assets/images/image.png';

const LoginPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { login, signup, loading } = useAuth();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (isLogin) {
      const success = await login(formData.username, formData.password);
      if (!success) {
        setError('Invalid username or password');
      }
    } else {
      // Validation for signup
      if (!formData.email) {
        setError('Email is required for signup');
        return;
      }
      if (!formData.username || formData.username.length < 3) {
        setError('Username must be at least 3 characters long');
        return;
      }
      if (!formData.password || formData.password.length < 6) {
        setError('Password must be at least 6 characters long');
        return;
      }
      if (!formData.email.includes('@')) {
        setError('Please enter a valid email address');
        return;
      }
      
      const success = await signup(formData.username, formData.email, formData.password);
      if (!success) {
        setError('Failed to create account. Username or email may already exist.');
      }
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({ username: '', email: '', password: '' });
    setError('');
  };

  return (
    <>
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            margin: 0;
            padding: 0;
            overflow-x: hidden;
          }
        `}
      </style>
      <Box sx={{ 
        minHeight: '100vh', 
        display: 'flex', 
        width: '100vw',
        margin: 0,
        padding: 0,
        overflow: 'hidden'
      }}>
      {/* Left Side - Login Form */}
      <Box sx={{ 
        width: '50%',
        backgroundColor: '#374151', 
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        p: 2,
        margin: 0,
        padding: 0,
        boxSizing: 'border-box'
      }}>
        <Box 
          sx={{ 
            backgroundColor: 'transparent',
            p: 2,
            color: 'white',
            width: '100%',
            maxWidth: 300
          }}
        >
              <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                {isLogin ? 'Login' : 'Sign Up'}
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, color: '#d1d5db' }}>
                {isLogin ? 'Enter your account details.' : 'Create your account to get started.'}
              </Typography>

              {error && (
                <Alert severity="error" sx={{ mb: 2 }}>
                  {error}
                </Alert>
              )}

              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  name="username"
                  label="Username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                  variant="standard"
                  sx={{ 
                    mb: 3,
                    '& .MuiInput-underline:before': {
                      borderBottomColor: 'rgba(255, 255, 255, 0.3)',
                    },
                    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                      borderBottomColor: 'rgba(255, 255, 255, 0.5)',
                    },
                    '& .MuiInput-underline:after': {
                      borderBottomColor: '#7c3aed',
                    },
                    '& .MuiInputLabel-root': {
                      color: 'rgba(255, 255, 255, 0.7)',
                    },
                    '& .MuiInputBase-input': {
                      color: 'white',
                    },
                  }}
                />

                {!isLogin && (
                  <TextField
                    fullWidth
                    name="email"
                    label="Email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    variant="standard"
                    sx={{ 
                      mb: 3,
                      '& .MuiInput-underline:before': {
                        borderBottomColor: 'rgba(255, 255, 255, 0.3)',
                      },
                      '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                        borderBottomColor: 'rgba(255, 255, 255, 0.5)',
                      },
                      '& .MuiInput-underline:after': {
                        borderBottomColor: '#7c3aed',
                      },
                      '& .MuiInputLabel-root': {
                        color: 'rgba(255, 255, 255, 0.7)',
                      },
                      '& .MuiInputBase-input': {
                        color: 'white',
                      },
                    }}
                  />
                )}

                <TextField
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  variant="standard"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                          sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{ 
                    mb: 3,
                    '& .MuiInput-underline:before': {
                      borderBottomColor: 'rgba(255, 255, 255, 0.3)',
                    },
                    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                      borderBottomColor: 'rgba(255, 255, 255, 0.5)',
                    },
                    '& .MuiInput-underline:after': {
                      borderBottomColor: '#7c3aed',
                    },
                    '& .MuiInputLabel-root': {
                      color: 'rgba(255, 255, 255, 0.7)',
                    },
                    '& .MuiInputBase-input': {
                      color: 'white',
                    },
                  }}
                />

                {isLogin && (
                  <Link 
                    href="#" 
                    sx={{ 
                      color: '#7c3aed', 
                      textDecoration: 'none',
                      display: 'block',
                      mb: 3,
                      '&:hover': {
                        textDecoration: 'underline',
                      }
                    }}
                  >
                    Forgot Password?
                  </Link>
                )}

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={loading}
                  sx={{
                    backgroundColor: '#7c3aed',
                    color: 'white',
                    py: 1.5,
                    mb: 3,
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    borderRadius: 2,
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: '#6d28d9',
                    },
                    '&:disabled': {
                      backgroundColor: '#6b7280',
                    },
                  }}
                >
                  {loading ? <CircularProgress size={24} color="inherit" /> : (isLogin ? 'Login' : 'Sign Up')}
                </Button>

                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="body2" sx={{ color: 'white', display: 'inline' }}>
                    {isLogin ? "Don't have an account? " : "Already have an account? "}
                  </Typography>
                  <Button
                    onClick={toggleMode}
                    variant="outlined"
                    sx={{
                      color: 'white',
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      textTransform: 'none',
                      fontWeight: 'bold',
                      borderRadius: 2,
                      ml: 1,
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        borderColor: 'rgba(255, 255, 255, 0.5)',
                      },
                    }}
                  >
                    {isLogin ? 'Sign up' : 'Login'}
                  </Button>
                </Box>
              </form>
        </Box>
      </Box>

      {/* Right Side - Image Only */}
      <Box sx={{ 
        width: '50%',
        backgroundColor: '#8b5cf6',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box'
      }}>
          {/* Background Pattern */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
              zIndex: 0,
            }}
          />

          {/* Image - Positioned at center line, fully visible */}
          <Box
            component="img"
            src={loginIllustration}
            alt="Student Portal Illustration"
            onError={(e) => {
              console.log('Image failed to load:', e);
            }}
            onLoad={() => {
              console.log('Image loaded successfully');
            }}
            sx={{
              position: 'absolute',
              left: '-25%',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '700%',
              height: '100%',
              objectFit: 'contain',
              maxWidth: 800,
              maxHeight: 600,
              zIndex: 1,
            }}
          />
      </Box>
    </Box>
    </>
  );
};

export default LoginPage;
