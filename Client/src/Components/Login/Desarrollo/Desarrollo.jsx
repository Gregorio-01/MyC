import React from 'react'
import styles from "./desarrollo.module.css"
import { NavBarHook } from '../../../hooks/navBar/navBarHook'
import SlideCurso from './slides/slideCurso'

const Desarrollo = () => {
  return (
    <div>
      <NavBarHook />

      <div className={styles.divPresentacion}>
        <h1>Desarrollo y Herramientas</h1>
      </div>
      
      <div className={styles.divGeneral}>

      {/* <div className={styles.divCursos}>
        <div className={styles.divTexto}>
        <h4>Cursos</h4>
        </div>
        <div className={styles.divCarrousel}>
      <SlideCurso />

        </div>
      </div>

      <div className={styles.divCursos}>
        <div className={styles.divTexto}>
          <h4>Recursos</h4>
        </div>
        <div className={styles.divCarrousel}>
        </div>
      </div> */}

      <SlideCurso />

      </div>
    </div>
  )
}

export default Desarrollo