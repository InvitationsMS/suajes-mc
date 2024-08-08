import React from 'react'

import './Information.scss'

export interface InformationProps {
  children?: React.ReactNode
}

const Information: React.FC<InformationProps> = () => {

  return (
    <div className="container">

      <div className="row">
        
        <div className="text-left">
          <h2>Suaje plano</h2>
          <p>El suaje rotativo utiliza un cilindro giratorio con cuchillas para cortar materiales de forma continua. Es ideal para producciones de gran volumen, como etiquetas y cajas de cartón.</p>
        </div>

        <div className="image-right">
          <img src="/images/img1.jpeg"  alt="Imagen 1" />
        </div>

      </div>

      <div className="row">

        <div className="text-left">
          <img src="/images/img2.jpeg" alt="Imagen 2" />
        </div>

        <div className="image-right">
          <h2>Suaje rotativo</h2>
          <p>El suaje rotativo utiliza un cilindro giratorio con cuchillas para cortar materiales de forma continua. Es ideal para producciones de gran volumen, como etiquetas y cajas de cartón.</p>
        </div>

      </div>
      
    </div>
  )
}

export default Information