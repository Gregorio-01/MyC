import { TopContact } from './components/TopContact';
import { FormContact } from './components/FormContact';
import { InfoContact } from './components/InfoContact';


import "./contact.css"

const Contact = () => {
  return(

  <div className='contact-container'>

    <TopContact />

    <div className='container-formulario-info'>

      <FormContact/>

      <InfoContact/>

        
    </div>

    </div>
  )
  }
  
  export default Contact