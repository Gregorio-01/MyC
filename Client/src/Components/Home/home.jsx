import { Nosotros } from "./components/Nosotros";
import { EcoConstruccion } from "./components/EcoConstruccion";
import { Proyectos } from "./components/Proyectos";
import "./home.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Beneficios } from "./components/Beneficios";
import { useEffect } from "react";


const Home = () => {
  
  useEffect(() => {
    const hasShownWelcomeToast = sessionStorage.getItem('hasShownWelcomeToast');

    if (!hasShownWelcomeToast && localStorage.getItem('userData')) {
      const data = JSON.parse(localStorage.getItem('userData'));
      const { name, lastname } = data;

      if (name) {
        toast(`Bienvenido ${name} ${lastname}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          onClose: () => {
            sessionStorage.setItem('hasShownWelcomeToast', true);
          }
        });
      }
    }
  }, []);

  return (
    <div className="home-container">
      
      <Nosotros/>

      <Proyectos/>

      <EcoConstruccion />

      <Beneficios/>

      <ToastContainer />

    </div>
  )
}

export default Home;