import React from 'react'
import './Hero.scss'

export interface HeroProps {
  children?: React.ReactNode
}

const Hero: React.FC<HeroProps> = () => {

  return (
    <section className="hero-container" id='hero'>

    <div className="hero-content">
      <h1>Dados de corte de alta calidad sobre diseño</h1>
      <p>
        Fabricamos dados de corte sobre diseño, realizados con navaja de acero de alta tecnología 
        para cortar, doblar o marcar materiales blandos, dependiendo de las necesidades de nuestros clientes. <br></br>
        Nuestra variedad está compuesta de dos tipos de corte, plano y rotativo.
      </p>
      <button className="btn">Ver servicios</button>
    </div>

    <div className="hero-images">
      <img src="url_de_la_imagen_grande.jpg" alt="Imagen principal" className="main-image"/>
      <img src="url_de_la_imagen_pequeña.jpg" alt="Imagen secundaria" className="secondary-image"/>
    </div>
    
  </section>
  )
}

export default Hero