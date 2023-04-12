import { Formik, Form } from "formik";
import * as yup from 'yup'

import { MyTextInput } from "./FormComponents/MyTextInput";
import { MySelect } from "./FormComponents/MySelect";
import { MyCheckbox } from "./FormComponents/MyCheckBox";

export const Register = () => {
 
  return (
    <div>
      <h1>Formik Abstractation</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          emailAddress: "",
          terms: false,
          role:''

        }}
        onSubmit={(values) =>{
          console.log(values)
        }}
        validationSchema={yup.object({
          firstName: yup.string()
                        .max(15,'deber tener maximo 15 caracteres')
                        .required('requerido'),
          lastName: yup.string()
                        .max(10,'deber tener maximo 10 caracteres')
                        .required('requerido'),
         emailAddress: yup.string()
                        .email('El correo electrónico no es válido')
                        .required('El correo electrónico es obligatorio'),
         terms: yup.boolean()
                        .oneOf([true], 'Debe de aceptar las condiciones'),
         jobType: yup.string()
                        .notOneOf(['it-jr'], 'esta opcion no es permitida.')
                        .required('Requerido')      
         
        })}
      >
        {
          (formik) => (
            <Form >
        <MyTextInput
         label='firstName'
          name='firstName'
          placeholder="your first name"
          />
        <MyTextInput
         label='lastName'
          name='lastName'
          placeholder="your last name"
          />
        <MyTextInput
         label='emailAddress'
          name='emailAddress'
          placeholder="your email"
          type="email"
          />
       
       <MySelect MySelect label='role' name='role'>
         <option value=''>Pick something</option>    
         <option value='user'>User</option>    
         <option value='company'>Company</option>    
      </MySelect>
        
        <MyCheckbox label="Termns & Conditions" name="terms" />

        <button type="submit">Submit</button>
      </Form>
          )
        }
      </Formik>

      
    </div>
  );
};