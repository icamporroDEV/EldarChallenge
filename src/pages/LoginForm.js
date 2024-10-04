import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate
import { useAuth } from '../context/AuthContext';
import RegisterForm from './RegisterForm';
import { loginUser } from '../api/api';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate(); // Creamos la instancia de navigate
  const { login } = useAuth(); // Obtener la función de login del contexto

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(username, password);
      if (response) {
        login(); // Llamar a la función de login
        navigate('/home'); // Redirigir a la página de inicio
      }
    } catch (error) {
      setMessage("Error: " + error.response?.data || "Unknown error");
      setIsError(true);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    
    </div>
  );
};

export default LoginForm;
