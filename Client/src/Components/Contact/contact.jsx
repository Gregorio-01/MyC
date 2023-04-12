import { TopContact } from './components/TopContact';

import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"


import "./contact.css"

const Contact = () => {
  return(

  <div className='contact-container'>

    <TopContact />

    <div className='container-formulario-info'>

      <div className='container-formulario'>

        <span>Complete el siguiente formulario y a la brevedad uno de nuestros técnicos se pondrá en contacto con usted.</span>
        <br/>
        <span>No dude en consultarnos cualquier inquietud!.</span>

      <Formik
        initialValues={{
          fullName: "",
          email : "",
          telefono : "",
          asunto : "",
          message: ""
        }}
        validationSchema= {Yup.object({
          fullName: Yup.string()
          .required("El nombre es obligatorio"),
          email: Yup.string()
          .email("el email no es valido")
          .required("El mail es obligatorio"),
          telefono: Yup.number()
          .required("El telefono es obligatorio")
          .typeError('Solo ingrese numeros'),
          asunto: Yup.string()
          .required("El asunto es obligatorio"),
          message: Yup.string()
        })}
        onSubmit= {(formData) => {
          console.log(formData)
          handleReset()
        }
      }
      >
        {({values, handleChange, handleReset}) => (
          <div className="formik-div">
            <Form className="form-form" action="mailto:correo@dominio.com" method="post">
              
              <label htmlFor="fullName">Nombre y Apellido</label>
              <Field className="containerinput" type="text" id="fullName" name="fullName" placeholder="Ingresa tu nombre y apellido" onChange={handleChange} value={values.fullName}/>
              <ErrorMessage name="fullName" component="span" className="form-error"/>
              <br/>

              <label htmlFor="email">Email</label>
              <Field className="containerinput" type="email" id="email" name="email" placeholder="Ingresa tu email" onChange={handleChange} value={values.email}/>
              <ErrorMessage name="email" component="span" className="form-error"/>
              <br/>

              <label htmlFor="telefono">Telefono</label>
              <Field className="containerinput" type="text" id="telefono" name="telefono" placeholder="Ingresa tu telefono" onChange={handleChange} value={values.telefono}/>
              <ErrorMessage name="telefono" component="span" className="form-error"/>
              <br/>

              <label htmlFor="asunto">Asunto</label>
              <Field className="containerinput" type="text" id="asunto" name="asunto" placeholder="Ingresa el Asunto" onChange={handleChange} value={values.asunto}/>
              <ErrorMessage name="asunto" component="span" className="form-error"/>
              <br/>

              <label htmlFor="message">Mensaje (opcional)</label>
              <Field 
              className="containerinputArea" as="textarea" id="message" name="message" placeholder="Ingresa el mensaje" onChange={handleChange} value={values.message}/>
              <ErrorMessage name="message" component="span" className="form-error"/>
              <br/>


              <button className="submit-button" type="submit" name="Ingresar" value="Enviar" onClick={handleReset}>Enviar</button>
            </Form>
            
          </div>
        )}

      </Formik>

      </div>

      <div className='container-info'>
        
          <span className='info-span-1'>Consultas generales</span>
          <span className='info-span-2'>Contáctanos y agendamos una cita, estamos en Coronel Dorrego y Monte Hermoso, provincia de Buenos Aires, Argentina.
          Trabajamos físicamente alrededor del partido y de forma virtual a todas las provincias.</span>
          <span className="separator"></span>
          
          <span className='info-span-1'>Teléfono</span>
          <span className='info-span-2'>+5492921496693</span>
          <span className="separator"></span>
          
          <span className='info-span-1'>E-mail</span>
          <span className='info-span-2'>info@myconstruction.com.ar</span>
          <span className="separator"></span>

          <span className='info-span-1'>Redes sociales</span>

          <div className="div-redes">
            
              <a href="https://www.youtube.com/channel/UCMCvyhOssOeKd3D5jbVsLvw" className='a-redes'>
                <img src="https://res.cloudinary.com/do0gmouxr/image/upload/v1681337232/contact/png-transparent-youtube-logo-computer-icons-youtube-text-rectangle-logo_yrneua.png" className="imagen-redes"  target="_blank"></img>
              </a>
              
              <a href="https://www.facebook.com/My-Construction-Arg-104544731662491" className='a-redes'>
               <img src="https://res.cloudinary.com/do0gmouxr/image/upload/v1681337232/contact/png-transparent-facebook-logo-media-network-social-square-share-social-media-networks-color-shapes-icon_nqh3zp.png" className="imagen-redes"  target="_blank"></img> 
              </a>

              <a href="https://www.instagram.com/myconstruction.arg/" className='a-redes'>
               <img src="https://res.cloudinary.com/do0gmouxr/image/upload/v1681337233/contact/cd939-logo-instagram-png_tnclrv.png" className="imagen-redes"  target="_blank"></img>
              </a>

           </div>
          
      </div>

        

    </div>

    </div>
  )
  }
  
  export default Contact