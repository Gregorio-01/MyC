import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { putUser } from "../../../store/slices/users/thunks";
import { Formik, Form, validateYupSchema } from 'formik';
import * as yup from 'yup';
import { MyTextInput } from '../../Register/FormComponents/MyTextInput';
// import styles from '../../Register/styles.module.css';
import './modifyInfo.css';

const ModifyInfo = () => {

    const dispatch = useDispatch();

    const userData = JSON.parse(window.localStorage.getItem('userData'));
    // const userId = userData.id;

    return (
        <div>
            <Formik
                initialValues={{
                // profilePic: {},
                firstName: '',
                lastName: '',
                emailAddress: '',
                terms: false,
                role: '',
                password:'',
                password2:''
                }}
                onSubmit={(values) => {
                console.log(values);
                dispatch(putUser(values, userId));
                }}
                validationSchema={yup.object({
                firstName: yup
                    .string()
                    .max(15, 'deber tener maximo 15 caracteres'),
                    // .required('requerido'),
                lastName: yup
                    .string()
                    .max(10, 'deber tener maximo 10 caracteres'),
                    // .required('requerido'),
                emailAddress: yup
                    .string()
                    .email('El correo electrónico no es válido')
                    .min(8, 'debe tener al menos 8 caracteres'),
                    // .required('El correo electrónico es obligatorio'),
                password: yup
                    .string()
                    .min(8, 'La contraseña debe tener al menos 8 caracteres')
                    .max(20, 'La contraseña no puede tener más de 20 caracteres')
                    // .required('Debes ingresar un password')
                    .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                    'La contraseña debe contener al menos una letra mayúscula, una letra minúscula y un número',
                    ),
                password2: yup
                    .string()
                    .min(8, 'La contraseña debe tener al menos 8 caracteres')
                    .max(20, 'La contraseña no puede tener más de 20 caracteres')
                    // .required('Debes repetir la contraseña')
                    .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                    'La contraseña debe contener al menos una letra mayúscula, una letra minúscula y un número',
                    )
                })}
            >
            {(formik) => (
                <Form className="form">
                    <h3>Modificar información</h3>
                    <br />
                    {/* <MyTextInput 
                    className={styles.input}
                    label='Foto de perfil'
                    name='profilePic'
                    placeholder='Selecciona un archivo'
                    type='file'
                    /> */}
                    <MyTextInput
                    className="input"
                    label="Nombre"
                    name="firstName"
                    placeholder="Ingresa tu nombre"
                    />
                    <MyTextInput
                    className="input"
                    label="Apellido"
                    name="lastName"
                    placeholder="Ingresa tu apellido"
                    />
                    <MyTextInput
                    className="input"
                    label="Email"
                    name="emailAddress"
                    placeholder="Ingresa tu email"
                    type="email"
                    />
                    <MyTextInput
                    className="input"
                    label="Contraseña"
                    name="password"
                    placeholder="Ingresa una contraseña de 8 caracteres"
                    type="password"
                    />
                    <MyTextInput
                    className="input"
                    label="Repite tu contraseña"
                    name="password2"
                    placeholder="Repite tu contraseña"
                    type="password"
                    />
                    <button type="submit" className="submit">Guardar información</button>
                </Form>
            )}
            </Formik>
        </div>
    )
};

export default ModifyInfo;