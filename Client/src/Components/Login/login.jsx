import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'
import './login.css'
import 'animate.css';
import { useEffect, useState } from 'react';
import { loginUser } from '../../store/slices/users/thunks';
import { useDispatch } from 'react-redux';

const Login = () => {

  const dispatch = useDispatch()

  return (
    <div className="login-container">
      <div className='card-container'>
        {/* Aquí empieza la primera card */}
        <div className='login-card plataforma'>
          <h2 >La Plataforma</h2>
          <br/>
          <br/>
        <div className="card-content">
          <p >Nuestro sistema permite al usuario tener un ecosistema 
          de trabajo en el cual puede disponer de diversas herramientas 
          como cursos, códigos de edificación, libros constructivos, charlas...</p>
          <br/>
          <br/>
          <button className='btn-login'>Más info</button>
         </div>
        </div>
      
        {/* Aquí empieza la segunda card */}
        <div className="login-card beneficios">
          <h2 >Beneficios</h2>
          <br/>
          <br/>
        <div className="card-content">
          <p >Los Beneficios de ser asociado de My Construction,
           se generan a partir de la conexión de la plataforma con constructoras,
            clientes e inmobiliarias...</p>
          <br/>
          <br/>
          <button className='btn-login'>Más info</button>
         </div> 
        </div>
      </div>

      <Formik
        className="login__formulario"
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(values) => {
         
          dispatch( loginUser(values))
        }}
        validationSchema={yup.object({
          email: yup
            .string()
            .email('El correo electrónico no es válido')
            .required('Debes ingresar tu correo electrónico'),
          password: yup
            .string()
            .min(2, 'Mínimo debe tener 8 caracteres')
            .max(10, 'Máximo 10 caracteres')
            .required('El password es requerido'),
        })}
      >
        {(formik) => (
          <div className="form-container">
            {/* Aquí empieza la primera card */}
            <Form className="form">
              <label htmlFor="email">Usuario</label>
              <Field
                className="input-field" 
                name="email" 
                placeholder="Ingresa tu correo electrónico" 
              />
              <ErrorMessage name="email" component="span" className="form-error"/>
              <br/>

              <label htmlFor="password">Contraseña</label>
              <Field
                className="input-field"
                type="password"
                id="password"
                name="password"
                placeholder="Ingresa tu contraseña"
              />
              <ErrorMessage name="password" component="span" className="form-error"/>
              <br/>
              <button
                className="submit-button"
                type="submit"
                name="Ingresar"
                value="Enviar"
              >
                Ingresar
              </button>

              <a className="forgot-password" href="#">
                ¿Olvidaste tu contraseña?
              </a>
              <a className="forgot-password" href="#">
                ¿Aún no tienes una cuenta?
              </a>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  )
}

export default Login
