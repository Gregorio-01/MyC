import { Formik, Form, validateYupSchema } from 'formik'
import * as yup from 'yup'
import useModal from '../../hooks/useModal/useModal'
import { MyTextInput } from './FormComponents/MyTextInput'
import { MySelect } from './FormComponents/MySelect'
import { MyCheckbox } from './FormComponents/MyCheckBox'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './register.css' // Importar el archivo CSS para los estilos del componente
import { useState } from 'react'
import { conditionsCompany, conditionsUser } from './conditions/conditions'
import { createUser } from '../../store/slices/users/thunks'
import { useDispatch } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export const Register = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const [ModalComponent, openModal, closeModal] = useModal()

  const [selectedRole, setSelectedRole] = useState('')

  return (
    <div className={'reg-container2'}>
      {' '}
      {/* Agregar la clase para los estilos del contenedor */}
      <Formik
        initialValues={{
          firstName: 'qwewfgfqe',
          lastName: 'ewqewqe',
          emailAddress: 'qwewfgq@dasdas.com',
          terms: true,
          role: 'user',
          password: 'Me123456',
          password2: 'Me123456',
        }}
        onSubmit={({ emailAddress, firstName, lastName, password }) => {
          const data = {
            name: firstName,
            lastname: lastName,
            email: emailAddress,
            password: password,
          }
          dispatch(createUser(data))
            .then((response) => {
              if (response.status === 201) {
                toast.success(
                  'Usuario creado con éxito. ahora debes loguearte.',
                  {
                    onOpen: () => {
                      setTimeout(() => navigate('/login', { top: true }), 2000)
                    },
                  },
                )
              } else {
                toast.error(
                  'Ha habido un problema. Por favor, vuelve a intentarlo.',
                )
              }
            })
            .catch((error) => {
              toast.error(
                'Ha habido un problema. Por favor, vuelve a intentarlo.',
              )
            })
        }}
        validationSchema={yup.object({
          firstName: yup
            .string()
            .max(15, 'deber tener maximo 15 caracteres')
            .required('requerido'),
          lastName: yup
            .string()
            .max(10, 'deber tener maximo 10 caracteres')
            .required('requerido'),
          emailAddress: yup
            .string()
            .email('El correo electrónico no es válido')
            .min(8, 'debe tener al menos 8 caracteres')
            .required('El correo electrónico es obligatorio'),
          password: yup
            .string()
            .min(8, 'La contraseña debe tener al menos 8 caracteres')
            .max(20, 'La contraseña no puede tener más de 20 caracteres')
            .required('Debes ingresar un password')
            .matches(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
              'La contraseña debe contener al menos una letra mayúscula, una letra minúscula y un número',
            ),
          password2: yup
            .string()
            .oneOf([yup.ref('password'), null], 'Las contraseñas no coinciden')
            .required('Por favor, repita la contraseña'),
          terms: yup.boolean().oneOf([true], 'Debe de aceptar las condiciones'),
          role: yup.string().required('Debes seleccionar un rol'),
        })}
      >
        {(formik) => (
          <Form className="reg-form">
            <h3>Formulario de registro</h3>

            <MyTextInput
              className="reg-input"
              label="Nombre"
              name="firstName"
              placeholder="your first name"
            />
            <MyTextInput
              className="reg-input"
              label="Apellido"
              name="lastName"
              placeholder="your last name"
            />
            <MyTextInput
              className="reg-input"
              label="Email"
              name="emailAddress"
              placeholder="your email"
              type="email"
            />
            <MyTextInput
              className="reg-input"
              label="Password"
              name="password"
              placeholder="Ingresa un password de 8 caracteres"
              type="password"
            />
            <MyTextInput
              className="reg-input"
              label="Repite tu password"
              name="password2"
              placeholder="Repite tu password"
              type="password"
            />
            <MySelect
              className="reg-input"
              label="role"
              name="role"
              setSelectedRole={setSelectedRole}
            >
              <option value="">Selecciona un rol</option>
              <option value="user">User</option>
              <option value="company">Company</option>
            </MySelect>
            <MyCheckbox
              className="reg-checkbox"
              label="Términos y condiciones"
              name="terms"
              onClick={openModal}
              disabled={!['user', 'company'].includes(formik.values.role)} // Agregar el manejador de eventos onClick
            />

            <button className="reg-submit" type="submit">
              Enviar
            </button>
            <br />
          </Form>
        )}
      </Formik>
      <ModalComponent>
        <div>
          {selectedRole == 'user' && conditionsUser}
          {selectedRole == 'company' && conditionsCompany}
        </div>
      </ModalComponent>
      <ToastContainer />
    </div>
  )
}
