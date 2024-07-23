import React from 'react'

import './Services.scss'

export interface ServicesProps {
  children?: React.ReactNode
}

const Services: React.FC<ServicesProps> = () => {

  return (
    <div className='services-container'>      
    <h1>¿Qué servicios ofrecemos?</h1>
      <div className='cards-container'>
        <div className='card'>
          <h2>Suajes en calado láser</h2>
          <p>Máquinas láser de alta precisión para quemado de madera plana y rotativa.</p>
        </div>
        <div className='card'>
          <h2>Suajes en calado manual</h2>
          <p>Máquinas láser de alta precisión para quemado de madera plana y rotativa.</p>
        </div>
        <div className='card'>
          <h2>Renavajeo y reparación</h2>
          <p>Máquinas láser de alta precisión para quemado de madera plana y rotativa.</p>
        </div>
      </div>
    </div>
  )
}

export default Services