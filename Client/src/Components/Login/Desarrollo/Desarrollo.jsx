import styles from "./desarrollo.module.css"
import { useEffect, useState } from "react";
import { NavBarHook } from '../../../hooks/navBar/navBarHook'
import { useDispatch, useSelector } from 'react-redux'
import { getAllMaterias } from "../../../store/slices/materials/thunks";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
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
        <h3>Cursos</h3>
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
          <h3>Recursos</h3>
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

      </div>

      <div>
  <h3>CURSOS DESTACADOS</h3>
  <div className={styles.Destacados_container}>
    <div>
      <div>
        <img src={cursoDestacado?.img} className={styles.imgSlide1} />
        <div className={styles.hiddenText}>
          <div>{cursoDestacado?.name}</div>
          <div>{cursoDestacado?.description}</div>
        </div>
      </div>
    </div>
    <div>
      <div>
        <img src={recursoDestacado?.img} className={styles.imgSlide1} />
        <div className={styles.hiddenText}>
          <div>{recursoDestacado?.name}</div>
          <div>{recursoDestacado?.description}</div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Desarrollo