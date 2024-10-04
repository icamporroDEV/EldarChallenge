import React, { useState } from 'react';
import { addUser } from '../api/api'; // Asegúrate de que esta función esté implementada correctamente
import {
  TextField,
  Button,
  Typography,
  Box,
  Alert,
  MenuItem,
} from '@mui/material'; 
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nombre, setNombre] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [sexo, setSexo] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await addUser({ email, password, nombre, fecha_nacimiento: fechaNacimiento, sexo });
      setMessage(response);
      setIsError(false); 
      navigate('/login');
    } catch (error) {
      setMessage('Error: ' + (error.response?.data || 'Unknown error'));
      setIsError(true); 
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleRegister}
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
        ¿Todavía no te has registrado?
      </Typography>
      <Typography variant="h6" component="h3" align="center">
        Registro:
      </Typography>

      {message && (
        <Alert severity={isError ? 'error' : 'success'}>
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

      <TextField
        label="Nombre"
        variant="outlined"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
        fullWidth
      />

      <TextField
        label="Fecha de Nacimiento"
        variant="outlined"
        type="date"
        value={fechaNacimiento}
        onChange={(e) => setFechaNacimiento(e.target.value)}
        required
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
      />

      <TextField
        label="Sexo"
        variant="outlined"
        select
        value={sexo}
        onChange={(e) => setSexo(e.target.value)}
        required
        fullWidth
      >
        <MenuItem value="masculino">Masculino</MenuItem>
        <MenuItem value="femenino">Femenino</MenuItem>
        <MenuItem value="otro">Otro</MenuItem>
      </TextField>

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Register
      </Button>
    </Box>
  );
};

export default RegisterForm;
