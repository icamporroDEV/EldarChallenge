import axios from 'axios';

const API_URL = "http://localhost:4000"; // URL de tu servidor backend

// Función para registrar un nuevo usuario
export const addUser = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/adduser`, { username, password });
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

// Función para iniciar sesión
export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};
