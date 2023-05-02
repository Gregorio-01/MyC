import { Formik, Field, Form, ErrorMessage } from 'formik'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import * as yup from 'yup'
import './login.css'
import 'animate.css';
import { useEffect, useState } from 'react';
import { loginUser } from '../../store/slices/users/thunks';
import { useDispatch } from 'react-redux';

const Login = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className='login-card-container'>
        {/* Aquí empieza la primera card */}
        <Formik
        
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(values) => {
         
          dispatch( loginUser(values))

          
           return navigate('/')
           }
        }
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
          <div className="login-form-container">
            {/* Aquí empieza la primera card */}
            <Form className="login-form">
              <label className='login-label' htmlFor="email">Usuario</label>
              <Field
                className="login-input-field" 
                name="email" 
                placeholder="Ingresa tu correo electrónico" 
              />
              <ErrorMessage name="email" component="span" className="login-form-error"/>
              <br/>

              <label className='login-label' htmlFor="password">Contraseña</label>
              <Field
                className="login-input-field"
                type="password"
                id="password"
                name="password"
                placeholder="Ingresa tu contraseña"
              />
              <ErrorMessage name="password" component="span" className="login-form-error"/>
              <br/>
              <button
                className="login-submit-button"
                type="submit"
                name="Ingresar"
                value="Enviar"
              >
                Ingresar
              </button>
              
              <a className="login-forgot-password" href="#">
                ¿Olvidaste tu contraseña?
              </a>
              <a className="login-forgot-password" href="/register">
                ¿Aún no tienes una cuenta?
              </a>
            </Form>
          </div>
        )}
        </Formik>
        <div className='login-card login-plataforma'>
          <h2 className='login-h2'>La Plataforma</h2>
          <br/>
          <br/>
        <div className="login-card-content">
          <p className='login-p'>Nuestro sistema permite al usuario tener un ecosistema 
          de trabajo en el cual puede disponer de diversas herramientas 
          como cursos, códigos de edificación, libros constructivos, charlas...</p>
          <br/>
          <br/>
          <a href='/plataforma'><button className='login-btn-login'>Más info</button></a>
         </div>
        </div>
      
        {/* Aquí empieza la segunda card */}
        <div className="login-card login-beneficios">
          <h2 className='login-h2'>Beneficios</h2>
          <br/>
          <br/>
        <div className="login-card-content">
          <p className='login-p'>Los Beneficios de ser asociado de My Construction,
           se generan a partir de la conexión de la plataforma con constructoras,
            clientes e inmobiliarias...</p>
          <br/>
          <br/>
          <a href="/beneficios2"><button className='login-btn-login'>Más info</button></a>
         </div> 
        </div>
      </div>

    </div>
  )
}

export default Login
