import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/home";
import About from "./Components/About/about";
import Contact from "./Components/Contact/contact";
import Login from "./Components/Login/login";
import Projects from "./Components/Projects/projects";
import Footer from "./Components/Footer/footer";
import NavBar from "./Components/NavBar/navBar";
import News from "./Components/News/news";
import AreaPersonal from "./Components/Login/AreaPersonal/areaPersonal";
import "./App.css";
import { ReduxComponent } from "./Components/ReducComponent/ReduxComponent"
import { Register } from "./Components/Register/Register"
import Whatsappbutton from "./Components/WhatsApp/whatsappbutton";
import Terminos from "./Components/Terminos/terminos";
import Desarrollo from "./Components/Login/Desarrollo/Desarrollo";
import UserProjects from "./Components/Login/AreaPersonal/UserProjects";
import Card from "./Components/Empresas asociadas/components/card";
import Main from "./Components/Empresas asociadas/components/main";
import SliderCard from "./Components/Empresas asociadas/components/slider-card";


function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/areaPersonal" element={<AreaPersonal />} />
        <Route path="/login/areaPersonal/proyectos" element={<UserProjects />}/>
        <Route path="/login/desarrollo" element={<Desarrollo />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/news" element={<News />} />
        <Route path="/register" element={<Register />} />
        <Route path="/redux" element={<ReduxComponent />} />
        <Route path="/terms-of-service" element={<Terminos />} />
        <Route path="/login/associates" element={<Main />} />
      </Routes>
      <Whatsappbutton />
      <Footer />
    </Router>
  );
}

export default App;