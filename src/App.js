import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from './context/PrivateRoute';
import { Home } from './pages/Home';
import RegisterForm from './pages/RegisterForm';
import { AuthProvider } from './context/AuthContext';
import LoginForm from './pages/LoginForm';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          {/* Rutas privadas */}
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
