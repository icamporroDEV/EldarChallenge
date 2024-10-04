import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MyApp
          </Typography>
          <Button onClick={()=>navigate('/user')}  color="inherit">User</Button>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '80vh',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h3" gutterBottom>
          Welcome to MyApp!
        </Typography>
        <Typography variant="body1" align="center" sx={{ maxWidth: '600px' }}>
          This is a basic homepage created using Material-UI. You can customize
          this page to include more information about your app, or provide links
          to other sections.
        </Typography>
      </Box>
    </Box>
  );
};
