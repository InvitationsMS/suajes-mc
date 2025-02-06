import React from 'react'

import './AboutUs.scss'

export interface AboutUsProps {
  children?: React.ReactNode
}

const AboutUs: React.FC<AboutUsProps> = () => {

  return (
    <div className="section-about-us" id="about">
      <h1 className="section-title-about">Entérate sobre nosotros</h1>
      <div className="content-container-about">
        {/* Imagen al lado izquierdo */}
        <div className="image-container-about">
          <img src="images\map.png" alt="Sobre nosotros" />
        </div>
        {/* Misión y Visión al lado derecho */}
        <div className="text-container-about">
          <div className="card-about vision-about">
            <img src='images\vision2.png' width='35%'></img>
            <h2>VISIÓN</h2>
            <p>Buscar estar siempre a la vanguardia con equipo moderno para crear dados de corte con un alto nivel de calidad.</p>
          </div>
          <div className="card-about mission-about">
            <img src='images\mission.png' width='35%'></img>
            <h2>MISIÓN</h2>
            <p>Satisfacer las necesidades de nuestros clientes y ofrecer la más alta relación de Costo / Beneficio.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs