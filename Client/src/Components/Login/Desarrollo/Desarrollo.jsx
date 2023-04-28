import styles from "./desarrollo.module.css"
import { useEffect, useState } from "react";
import { NavBarHook } from '../../../hooks/navBar/navBarHook'
import { useDispatch, useSelector } from 'react-redux'
import { getAllMaterias } from "../../../store/slices/materials/thunks";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Desarrollo = () => {
  const [cursos, setCursos]=useState([])
  const [recursos, setRecursos]=useState([])
  const materialState = useSelector(state => state.materials.materials)
  const dispatch = useDispatch()
  const [cursoDestacado, setCursoDestacado]=useState([])
  const [recursoDestacado, setRecursoDestacado]=useState([])


  const divitirMaterial = () => {
    const typeCurso = materialState.filter((cursos)=>cursos.type !== "Cursos")
    const typeArticulo = materialState.filter((cursos)=>cursos.type !== "Articulo")
    setCursos(typeCurso)
    setRecursos(typeArticulo)
  }

  useEffect(() => {
    dispatch(getAllMaterias())
  }, [dispatch])

  useEffect(() => {
    if (materialState.length > 1) {
      divitirMaterial()
    }
    setCursoDestacado(cursos[9])
    setRecursoDestacado(recursos[8])

  }, [materialState])
  


  return (
    <div>
      <NavBarHook />

      <div className={styles.divPresentacion}>
        <h1>Desarrollo y Herramientas</h1>
      </div>
      
      <div className={styles.divGeneral}>

      <div className={styles.divCursos}>
        {/* Texto */}
        <div className={styles.divTexto}>
        <h3 className={styles.textoExtra}>Cursos</h3>
        </div>
        {/* Slide */}
        <div>
          <Swiper
          modules={[Navigation]}
          navigation
          slidesPerView={5}
          loop={true}
          spaceBetween={30}
          grabCursor={true}
          className="mySwiper"
          breakpoints={{
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
          >
           {
           recursos?.map((c) => (
            <>
            
            <SwiperSlide style={{ height: "200px" }}>
  <div className={styles.swiper_container}> 
  {console.log(recursos)}
    <img src={c.img} className={styles.imgSlide} />
    <div className={styles.overlay}>
      <div className={styles.overlay_name}>{c.name}</div>
      <div className={styles.overlay_description}>{c.description}</div>
    </div>
  </div>
</SwiperSlide>
              
            </>
            ))
            }

          </Swiper>
        </div>
      </div>

      <div className={styles.divCursos}>
        {/* Texto */}
        <div className={styles.divTexto}>
          <h3 className={styles.textoExtra}>Recursos</h3>
        </div>
        <div>
          <Swiper
          modules={[Navigation]}
          navigation
          slidesPerView={5}
          loop={true}
          spaceBetween={30}
          grabCursor={true}
          className="mySwiper"
          breakpoints={{
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
          >
           {
           cursos?.map((c) => (
            <>  
            <SwiperSlide style={{ height: "200px" }}>
  <div className={styles.swiper_container}> 
  {console.log(recursos)}
    <img src={c.img} className={styles.imgSlide} />
    <div className={styles.overlay}>
      <div className={styles.overlay_name}>{c.name}</div>
      <div className={styles.overlay_description}>{c.description}</div>
    </div>
  </div>
</SwiperSlide>
              
            </>
            ))
            }

          </Swiper>
        </div>
      </div>


      <div className={styles.divCursosExtras}>
         {/* Texto */}
         <div className={styles.divTexto}>
           <h3 className={styles.textoExtra}>CURSOS DESTACADOS</h3>
         </div>
         {/* Imagenes */}
         <div className={styles.divImagenesExtras}>
         <div className={styles.contenedorExtra}>
  <a href="https://www.youtube.com/watch?v=CdUJGmAL-WE" target="_blank">
    <img src="https://res.cloudinary.com/do0gmouxr/image/upload/v1680739242/Pagina%20Interna/mqdefault_5_d9zu7o.jpg" className={styles.imagenExtra}/>
    <div className={styles.contenidoExtra}>
      <h4 className={styles.tituloExtra}>Flujo de Trabajo MULTIPLANTA</h4>
      <p className={styles.descripcionExtra}>Les compartimos un video de ArqManes donde explica en AutoCAD el Flujo de Trabajo Multiplanta para Arq. o Ing. Independientes</p>
    </div>
  </a>
</div>
  <div className={styles.contenedorExtra}>
    <img src="https://res.cloudinary.com/do0gmouxr/image/upload/v1680739323/Pagina%20Interna/TwnMCURSO_xcwiln.png" className={styles.imagenExtra}/>
    <a href="https://drive.google.com/drive/folders/1WysZqQtT79KJNLF73vzq3Mv741qeJQCO" className={styles.enlaceExtra} target="_blank" >
    <div className={styles.contenidoExtra}>
      <h4 className={styles.tituloExtra}>Curso TwinMotion</h4>
      <p className={styles.descripcionExtra}>En este curso aprenderas habilidades basicas para el manejo de el software de renderizado TwinMotion</p>
      <span className={styles.textoBotonExtra}>Descargar</span>
    </div>
  </a>
  </div>
         </div>
      </div>
      
      <div className={styles.divFinal}>
        <h1>¿Queres ver los beneficios que tenemos para vos?</h1>
      </div>

      </div>
</div>

  )
}

export default Desarrollo