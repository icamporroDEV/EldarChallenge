import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/api';
import { useAuth } from '../context/AuthContext';
import { useSnackbar } from '../context/SnackbarContext';

const useLogin = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();
  const showSnackbar = useSnackbar();

  const handleLoginSubmit = async (values, setErrors) => {
    setIsSubmitting(true);
    try {
      const response = await loginUser(values.email, values.password);
      if (response) {
        const userData = {
          accessToken: response.accessToken,
          refreshToken: response.refreshToken,
          nombre: response.nombre,
          email: response.email,
          role: response.role,
          userId: response.userId,
        };
        localStorage.setItem('userData', JSON.stringify(userData));
        login(userData);

        showSnackbar('Bienvenido ' + response.nombre, 'success');
        navigate('/home');
      }
    } catch (error) {
      setErrors({
        submit: 'Error: ' + (error.message || 'Credenciales inválidas'),
      });
      showSnackbar(
        'Error: ' + (error.message || 'Credenciales inválidas'),
        'error'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return { handleLoginSubmit, isSubmitting };
};

export default useLogin;
