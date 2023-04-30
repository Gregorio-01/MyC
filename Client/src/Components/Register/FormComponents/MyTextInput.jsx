import { ErrorMessage, useField } from "formik"

export const MyTextInput = ({label,...props}) => {

 const [field] = useField(props)

  return (

    <>
  <label htmlFor={props.id || props.name} className="form-label">{label}</label>
  <input className="input-field" {...field} {...props} />
  <ErrorMessage name={props.name} component='span' className="reg-form-error" />
  <br/>
</>

  )
}
