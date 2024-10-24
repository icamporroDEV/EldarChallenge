import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PrivateRoute from './context/PrivateRoute';
import { Home } from './pages/Home';

import LoginForm from './pages/LoginForm';
import { DrawerComponent } from './components/DrawerComponent';
import { Box, ThemeProvider } from '@mui/material';
import { UserList } from './pages/UserList';
// import Photos from './pages/Photos';
import PostComments from './pages/PostComments';
import { SnackbarProvider } from './context/SnackbarContext'; 
import theme from './context/theme';
import { AuthProvider } from './context/AuthContext';

const PrivateLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <DrawerComponent />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <SnackbarProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/" element={<Navigate to="login" />} />
            <Route
              path="/home"
              element={
                <PrivateRoute>
                  <PrivateLayout>
                    <Home />
                  </PrivateLayout>
                </PrivateRoute>
              }
            />
            <Route
              path="/user-list"
              element={
                <PrivateRoute>
                  <PrivateLayout>
                    <UserList />
                  </PrivateLayout>
                </PrivateRoute>
              }
            />
            <Route
              path="/posts/:id/comments"
              element={
                <PrivateRoute>
                  <PrivateLayout>
                    <PostComments />
                  </PrivateLayout>
                </PrivateRoute>
              }
            />
          </Routes>
        </Router>
        </ThemeProvider>
      </SnackbarProvider>
    </AuthProvider>
  );
};

export default App;
