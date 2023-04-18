import { ErrorMessage, useField } from "formik"


export const MyCheckbox = ({label,...props}) => {

 const [field] = useField({...props, type:'checkbox'})

  return (

    <>
     <label onMouseOver={(e) => e.target.style.textDecoration = 'underline'} onMouseOut={(e) => e.target.style.textDecoration = 'none'}>
      <input type="checkbox" {...field} {...props} />
          {label}
          </label>
          <ErrorMessage name={props.name} component='span'  className="form-error"/>
          <br/>
    </>
  )
}