import "./home.css"

const Home = () => {
  return (
    <div className="home-container">
      
      <div className="home-logo-container">
        <img src="https://res.cloudinary.com/do0gmouxr/image/upload/v1681232854/home/LOGO-GDE-2_z9h4rd.png" alt="logo-constructor"/>
      </div>

      {/* div general */}
      <div className="container-top">
        
        {/* div del video y su texto */}  
        <div className="container-vid">

          <div>
            <a class="modal-video-poster video-modal" href="https://www.youtube.com/watch?v=dfjgBpwLiRs">
              <img alt="Video poster" src="https://myconstruction.com.ar/wp-content/uploads/2021/08/intro.png"/>
            </a>
          </div>

          <div className="div-nosotros">
            <h1> <span style={{color: "#f37121"}}>|</span> NOSOTROS</h1>
            <h6>Somos una empresa proveniente de la provincia de Buenos Aires, Argentina. La cual busca completar cada uno de los objetivos y puntos de vista del cliente.
            Dedicados a la construcción y la innovación de los sistemas tantos constructivos como de servicios, la empresa fue fundada por dos Maestros Mayor de Obras con el objetivo principal de concretar el sueño del consumidor, ya sea desde la “casa propia” hasta un “complejo comercial” o cualquier otro tipo de edificación.</h6>
          </div>
        </div>
        
        <div>
          <p>
          Hoy en día la empresa cuenta con un equipo de técnicos dedicados tanto a la proyección, dirección de obra y también de maquetado y renderizado 3D, realizando trabajos para toda la provincia de Buenos Aires y sus provincias cercanas. Nos dedicamos única y exclusivamente al cliente y a sus necesidades, ofreciéndoles tanto proyecciones ya calculadas, diseñadas y computadas, como también servicios de construcciones fuera de lo tradicional, como pueden ser modulares con contenedores marítimos o de steelframing, entre otros. Como también la posibilidad de anexar sistemas de energías renovables.
          </p>
        </div>

      </div>



    </div>
  )
}

export default Home;