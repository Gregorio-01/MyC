import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { putUser } from "../../../store/slices/users/thunks";
import { Formik, Form, validateYupSchema } from 'formik';
import * as yup from 'yup';
import { MyTextInput } from '../../Register/FormComponents/MyTextInput';
import './modifyInfo.css';

const ModifyInfo = () => {

    const dispatch = useDispatch();
    
    const changes = useSelector((store) => store.users.updatedUser);
    const [savedChanges, setSavedChanges] = useState(true);

    useEffect(() => {
        // setSavedChanges(true);
        // return setSavedChanges(false);
    }, [changes]);

    return (
        <div>
            <Formik
                initialValues={{
                name: '',
                lastName: '',
                emailAddress: '',
                terms: false,
                role: '',
                password:'',
                password2:''
                }}
                onSubmit={(values) => {
                console.log(values);
                dispatch(putUser(values));
                }}
                validationSchema={yup.object({
                name: yup
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
                    <div className="formElementsContainer">
                        <div className="elementContainer">
                            <MyTextInput
                            className="input"
                            label="Nombre"
                            name="name"
                            placeholder="Ingresa tu nombre"
                            />
                        </div>
                        <div className="elementContainer">
                            <MyTextInput
                            className="input"
                            label="Apellido"
                            name="lastName"
                            placeholder="Ingresa tu apellido"
                            />
                        </div>
                        <div className="elementContainer">
                            <MyTextInput
                            className="input"
                            label="Email"
                            name="emailAddress"
                            placeholder="Ingresa tu email"
                            type="email"
                            />
                        </div>
                        <div className="elementContainer">
                            <MyTextInput
                            className="input"
                            label="Contraseña"
                            name="password"
                            placeholder="Ingresa una contraseña de 8 caracteres"
                            type="password"
                            />
                        </div>
                        <div className="elementContainer">
                            <MyTextInput
                            className="input"
                            label="Repite tu contraseña"
                            name="password2"
                            placeholder="Repite tu contraseña"
                            type="password"
                            />
                        </div>
                    </div>
                    <br/>
                    <button type="submit" className="submit">Guardar información</button>
                    {
                        savedChanges && 
                        <div className="savedChangesContainer">
                            <span className="savedChanges">Cambios guardados!</span>
                        </div>
                    }
                </Form>
            )}
            </Formik>
        </div>
    )
};

export default ModifyInfo;