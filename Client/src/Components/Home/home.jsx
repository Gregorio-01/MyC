import { Nosotros } from "./components/Nosotros";
import { EcoConstruccion } from "./components/EcoConstruccion";
import { Proyectos } from "./components/Proyectos";
import "./home.css"

import { Beneficios } from "./components/Beneficios";

const Home = () => {
  return (
    <div className="home-container">
      
      <Nosotros/>

      <Proyectos/>

      <EcoConstruccion />

      <Beneficios/>

    </div>
  )
}

export default Home;