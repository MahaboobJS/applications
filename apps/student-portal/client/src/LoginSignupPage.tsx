import React, { useState } from 'react';
import image from './image.png';
import { Box, Button, Checkbox, FormControlLabel, Link, TextField, Typography, Paper } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

interface LoginSignupPageProps {
  onLogin: (username: string) => void;
}

const LoginSignupPage: React.FC<LoginSignupPageProps> = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSwitch = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLogin((prev) => !prev);
    setError('');
    setUsername('');
    setEmail('');
    setPassword('');
  };

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    if (isLogin) {
      // Login
      fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })
        .then(res => res.json().then(data => ({ ok: res.ok, data })))
        .then(({ ok, data }) => {
          if (ok) {
            onLogin(data.user.username);
          } else {
            setError(data.error || 'Login failed');
          }
        })
        .catch(() => setError('Network error'));
    } else {
      // Signup
      fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      })
        .then(res => res.json().then(data => ({ ok: res.ok, data })))
        .then(({ ok, data }) => {
          if (ok) {
            setIsLogin(true);
            setError('Signup successful! Please log in.');
          } else {
            setError(data.error || 'Signup failed');
          }
        })
        .catch(() => setError('Network error'));
    }
  }

  return (
    <Box sx={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#f72585',
    }}>
      <Paper elevation={6} sx={{
        display: 'flex',
        width: 900,
        minHeight: 500,
        borderRadius: 4,
        overflow: 'hidden',
      }}>
        {/* Left Side */}
        <Box sx={{
          flex: 1,
          background: '#f72585',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          p: 4,
        }}>
          <Typography variant="h4" fontWeight={700} gutterBottom>Welcome to</Typography>
          <Typography variant="h6" gutterBottom>Student Portal</Typography>
          <Box sx={{
            width: 250,
            height: 250,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mt: 4,
            overflow: 'hidden',
          }}>
            <img src={image} alt="Welcome" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </Box>
        </Box>
        {/* Right Side */}
        <Box sx={{
          flex: 1,
          background: '#232323',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          p: 4,
        }}>
          <Typography variant="h5" fontWeight={700} gutterBottom>
            {isLogin ? 'Login your Account' : 'Sign Up for an Account'}
          </Typography>
          <Typography variant="body2" color="gray" mb={2}>
            {isLogin ? 'Please enter your details' : 'Create your account'}
          </Typography>
          <Box component="form" sx={{ width: '100%', maxWidth: 350 }} onSubmit={handleSubmit}>
            {!isLogin && (
              <>
                <TextField
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  placeholder="Username"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  InputProps={{ startAdornment: <PersonIcon sx={{ mr: 1 }} /> }}
                  sx={{ input: { color: '#fff' }, background: '#232323', borderRadius: 2, mb: 2, '& fieldset': { borderColor: '#fff' } }}
                />
                <TextField
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  sx={{ input: { color: '#fff' }, background: '#232323', borderRadius: 2, mb: 2, '& fieldset': { borderColor: '#fff' } }}
                />
              </>
            )}
            {isLogin && (
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                InputProps={{ startAdornment: <PersonIcon sx={{ mr: 1 }} /> }}
                sx={{ input: { color: '#fff' }, background: '#232323', borderRadius: 2, mb: 2, '& fieldset': { borderColor: '#fff' } }}
              />
            )}
            <TextField
              fullWidth
              margin="normal"
              variant="outlined"
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              InputProps={{ startAdornment: <LockIcon sx={{ mr: 1 }} /> }}
              sx={{ input: { color: '#fff' }, background: '#232323', borderRadius: 2, mb: 2, '& fieldset': { borderColor: '#fff' } }}
            />
            {error && (
              <Typography color={error.includes('success') ? 'success.main' : 'error'} sx={{ mb: 1, textAlign: 'center' }}>{error}</Typography>
            )}
            {isLogin ? (
              <>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                  <FormControlLabel control={<Checkbox sx={{ color: '#fff' }} />} label={<Typography color="#fff">Remember</Typography>} />
                  <Link href="#" underline="hover" color="#fff" sx={{ fontSize: 14 }}>Forgot password?</Link>
                </Box>
                <Button type="submit" fullWidth variant="contained" sx={{ background: '#f72585', color: '#fff', fontWeight: 700, borderRadius: 2, mb: 2, '&:hover': { background: '#d61e6b' } }}>
                  Log In
                </Button>
                <Typography align="center" color="gray" sx={{ fontSize: 14 }}>
                  Don&apos;t have an account?{' '}
                  <Link href="#" underline="hover" color="#fff" sx={{ fontWeight: 700, fontSize: 14 }} onClick={handleSwitch}>Sign Up</Link>
                </Typography>
              </>
            ) : (
              <>
                <Button type="submit" fullWidth variant="contained" sx={{ background: '#f72585', color: '#fff', fontWeight: 700, borderRadius: 2, mb: 2, '&:hover': { background: '#d61e6b' } }}>
                  Sign Up
                </Button>
                <Typography align="center" color="gray" sx={{ fontSize: 14 }}>
                  Already have an account?{' '}
                  <Link href="#" underline="hover" color="#fff" sx={{ fontWeight: 700, fontSize: 14 }} onClick={handleSwitch}>Log In</Link>
                </Typography>
              </>
            )}
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default LoginSignupPage;
