import React from 'react'
import './Hero.scss'

export interface HeroProps {
  children?: React.ReactNode
}

const Hero: React.FC<HeroProps> = () => {

  return (
    <section className="hero-container" id='hero'>

      <div className="hero-content">

        <h1>DADOS DE CORTE DE <b>ALTA CALIDAD</b> SOBRE DISEÑO<br></br></h1>

        <p>
          Fabricamos dados de corte sobre diseño, realizados con navaja de acero de alta tecnología
          para cortar, doblar o marcar materiales blandos, dependiendo de las necesidades de nuestros clientes.
          <br></br>
          Nuestra variedad está compuesta de dos tipos de corte, plano y rotativo.
        </p>
        
        <a href="#services" className="btn-hero">Ver servicios</a>
      </div>

      <div className="hero-images">
        <img src="/images/gallery/1.jpg" alt="Imagen principal" className="main-image" />
        <img src="/images/gallery/2.jpg" alt="Imagen secundaria" className="secondary-image" />
      </div>

    </section>



  )
}

export default Hero