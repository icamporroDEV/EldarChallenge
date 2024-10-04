import React, { useState } from 'react';
import { addUser } from '../api/api';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await addUser(username, password);
      setMessage(response); // Muestra el mensaje de éxito o error
    } catch (error) {
      setMessage("Error: " + error.response?.data || "Unknown error");
    }
  };

  return (
    <div>
      <h2>¿Todavía no te has registrado?</h2>
      <h3>Registro:</h3>
      <form onSubmit={handleRegister}>
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
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default RegisterForm;
