import React from 'react'

import './Information.scss'

export interface InformationProps {
  children?: React.ReactNode
}

const Information: React.FC<InformationProps> = () => {

  return (
    <div className="container">
    {/* Fila 1: Texto a la izquierda, imagen a la derecha */}
    <div className="row">
      <div className="text-left">
        <h2>Suaje plano</h2>
        <p>Este es un párrafo de ejemplo que está alineado a la izquierda.</p>
      </div>
      <div className="image-right">
        <img src="/images/your-image1.png" alt="Imagen 1" />
      </div>
    </div>

    {/* Fila 2: Imagen a la izquierda, texto a la derecha */}
    <div className="row">
      <div className="text-left">
        <img src="/images/your-image2.png" alt="Imagen 2" />
      </div>
      <div className="image-right">
        <h2>Suaje rotativo</h2>
        <p>Este es un párrafo de ejemplo que está alineado a la derecha.</p>
      </div>
    </div>
  </div>
  )
}

export default Information