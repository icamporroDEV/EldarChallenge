import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { loginUser } from '../api/api';
import {
  TextField,
  Button,
  Typography,
  Box,
  Alert,
} from '@mui/material';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(email, password);
      if (response) {
        const userData = {
          accessToken: response.accessToken,
          refreshToken: response.refreshToken,
          nombre: response.nombre, 
          sexo: response.sexo, 
          email: response.email, 
          userId:response.userId
        };
        localStorage.setItem('userData', JSON.stringify(userData));
        login(); 
        navigate('/home');
      }
    } catch (error) {
      setMessage('Error: ' + (error.response?.data || 'Unknown error'));
      setIsError(true);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleLogin}
      sx={{
        width: '300px',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        mt: 5,
      }}
    >
      <Typography variant="h4" component="h2" align="center">
        Login
      </Typography>

      {isError && (
        <Alert severity="error">
          {message}
        </Alert>
      )}

      <TextField
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        fullWidth
      />

      <TextField
        label="Password"
        variant="outlined"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        fullWidth
      />

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Login
      </Button>
    </Box>
  );
};

export default LoginForm;
