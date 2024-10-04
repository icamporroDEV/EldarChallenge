import axios from 'axios';

const API_URL = "http://localhost:4000"; // URL de tu servidor backend

// Función para registrar un nuevo usuario
export const addUser = async ({ email, password, nombre, fecha_nacimiento, sexo }) => {
  try {
    const response = await axios.post(`${API_URL}/adduser`, { email, password, nombre, fecha_nacimiento, sexo });
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

// Función para iniciar sesión
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};
const refreshAccessToken = async (refreshToken) => {
  try {
      const response = await axios.post(`${API_URL}/refresh`, { refreshToken });
      localStorage.setItem('token', response.data.accessToken); // Guardar el nuevo access token
      return response.data.accessToken;
  } catch (error) {
      console.error("Error refreshing access token:", error);
      throw error;
  }
};

export const getUserData = async (userId) => {
  try {
      const response = await axios.get(`${API_URL}/userProfile/${userId}`);
      return response.data;
  } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
  }
};
