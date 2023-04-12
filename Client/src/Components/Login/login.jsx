import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'
import './login.css'

const Login = () => {

  return (
    <div className="login-container">
      <Formik
        className="login__formulario"
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(values) => {
          console.log(values)
        }}
        validationSchema={yup.object({
          email: yup
            .string()
            .email('El correo electrónico no es válido')
            .required('Debes ingresar tu correo electronico'),
          password: yup
            .string()
            .min(8, 'Minimo debe tener 8 caracteres')
            .max(10, 'Maximo 10 debe caracteres')
            .required('El password es requerido'),
        })}
      >
        {(formik) => (
          <div className="form-container">
            <Form className="form">

              <label htmlFor="email">Usuario</label>
              <Field
              className="input-field" 
              name="email" placeholder="Enter your Email" />
              <ErrorMessage name="email" component="span" className="form-error"/>
              <br/>

              <label htmlFor="password">Contraseña</label>
              <Field
                className="input-field"
                type="password"
                id="password"
                name="password"
                placeholder="Enter your Password"
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
                Te olvidaste tu contraseña?
              </a>
              <a className="forgot-password" href="#">
                ¿Aun no tienes una cuenta?
              </a>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  )
}

export default Login
