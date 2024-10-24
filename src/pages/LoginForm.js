import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  FormContainer,
  LoginButton,
  LoginFormBox,
  LoginFormContainer,
  LoginRoot,
  LoginTextField,
  LoginTitle,
} from '../styles/Login.styled';
import useLogin from '../customHooks/useLogin';

const validationSchema = Yup.object().shape({
  email: Yup.string().required('Campo obligatorio'),
  password: Yup.string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .required('La contraseña es obligatoria'),
});

const LoginForm = () => {
  const { handleLoginSubmit, isSubmitting } = useLogin(); 

  return (
    <LoginRoot>
      <LoginFormBox>
        <LoginFormContainer>
          <LoginTitle align="center">Iniciar Sesión</LoginTitle>

          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { setErrors }) => handleLoginSubmit(values, setErrors)}
          >
            {({ errors }) => (
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

                  {Boolean(errors.submit) && <div>{errors.submit}</div>}

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
