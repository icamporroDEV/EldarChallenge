import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { loginUser } from '../api/api';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useSnackbar } from '../context/SnackbarContext'; 
import {
  FormContainer,
  LoginButton,
  LoginFormBox,
  LoginFormContainer,
  LoginRoot,
  LoginTextField,
  LoginTitle,
} from '../styles/Login.styled';

const validationSchema = Yup.object().shape({
  email: Yup.string().required('Campo obligatorio'),
  password: Yup.string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .required('La contraseña es obligatoria'),
});

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const showSnackbar = useSnackbar(); 

  return (
    <LoginRoot>
      <LoginFormBox>
        <LoginFormContainer>
          <LoginTitle align="center">Iniciar Sesión</LoginTitle>

          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting, setErrors }) => {
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

                  showSnackbar('Bienvenido '+ response.nombre, 'success'); 
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
                setSubmitting(false);
              }
            }}
          >
            {({ isSubmitting, errors }) => (
              <Form>
                <FormContainer>
                  <Field name="email">
                    {({ field, form }) => (
                      <LoginTextField
                        variant="standard"
                        {...field}
                        label="Email"
                        error={form.touched.email && Boolean(form.errors.email)}
                        helperText={<ErrorMessage name="email" />}
                        required
                        fullWidth
                      />
                    )}
                  </Field>

                  <Field name="password">
                    {({ field, form }) => (
                      <LoginTextField
                        variant="standard"
                        type="password"
                        {...field}
                        label="Contraseña"
                        error={form.touched.password && Boolean(form.errors.password)}
                        helperText={<ErrorMessage name="password" />}
                        required
                        fullWidth
                      />
                    )}
                  </Field>

                  {Boolean(errors.submit) && (
                    <div>{errors.submit}</div> 
                  )}

                  <LoginButton type="submit" variant="contained" fullWidth disabled={isSubmitting}>
                    {isSubmitting ? 'Cargando...' : 'Iniciar Sesión'}
                  </LoginButton>
                </FormContainer>
              </Form>
            )}
          </Formik>
        </LoginFormContainer>
      </LoginFormBox>
    </LoginRoot>
  );
};

export default LoginForm;
