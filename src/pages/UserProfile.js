import React, { useEffect, useState } from 'react';
import { getUserData } from '../api/api'; // Asegúrate de que esta función esté definida en tu archivo api.js
import { Box, Typography, CircularProgress, Alert, Container } from '@mui/material';

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const storedUserData = localStorage.getItem('userData');
  let userId;

  if (storedUserData) {
    const parsedData = JSON.parse(storedUserData); 
    userId = parsedData.userId;
  }

  useEffect(() => {
    const fetchUserData = async () => {
      if (!userId) {
        setError('User ID not found in local storage');
        setLoading(false);
        return;
      }

      try {
        const data = await getUserData(userId); 
        setUserData(data);
      } catch (err) {
        setError('Error fetching user data');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]); 

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  return (
    <Container sx={{ width: '100%', margin: 'auto', mt: 5 }}>
      <Typography variant="h2" align="center">User Profile</Typography>
      <Container>
      <Typography variant="h6">Email: {userData.email}</Typography>
      <Typography variant="h6">Nombre: {userData.nombre}</Typography>
      <Typography variant="h6">Fecha de Nacimiento: {userData.fecha_nacimiento ? new Date(userData.fecha_nacimiento).toLocaleDateString() : 'N/A'}</Typography>
      <Typography variant="h6">Sexo: {userData.sexo}</Typography>
      </Container>
   
    </Container>
  );
};

export default UserProfile;
