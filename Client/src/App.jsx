import Home from "./Components/Home/home"
import About from "./Components/About/about"
import Contact from "./Components/Contact/contact"
import Login from "./Components/Login/login"
import Projects from "./Components/Projects/projects"
import Footer from "./Components/Footer/footer"
import NavBar from "./Components/NavBar/navBar"
import News from "./Components/News/news"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'

function App() {
  

  return (
    <div>
      <Router>
      <NavBar/>
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/news" element={<News />} />
      </Routes>
      <Footer/>
      </Router>
    </div>
  )
}

export default App