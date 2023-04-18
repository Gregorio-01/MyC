import { ErrorMessage, useField } from "formik"
import { useEffect } from "react"


export const MySelect = ({label, setSelectedRole,...props}) => {

 const [field] = useField(props)
  useEffect(() => {
    setSelectedRole(field.value)
     }, [field.value]);
  return (

    <>
        <label htmlFor={props.id || props.name}> {label} </label>
        <select  {...field} {...props} />
        <ErrorMessage name={props.name} component='span' className="form-error"/>
        <br/>
    </>
  )
}