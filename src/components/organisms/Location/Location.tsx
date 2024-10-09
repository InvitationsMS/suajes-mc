import React from 'react'

import './Location.scss'

import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

export interface LocationProps {
  children?: React.ReactNode
}

const Location: React.FC<LocationProps> = () => {

  return (
    <div className="location-container">

      <div className="address-section">
        <div className='location-icon'>
          <FmdGoodOutlinedIcon
            sx={{ fontSize: '80px' }}
          />
        </div>
        <div className='location-text'>
          <p className="p-primary">Calle Cachanilla #1821</p>
          <p className="p-secondary">Colonia Herrera</p>
          <p className="p-tertiary">Tijuana, Baja California</p>
        </div>
        <button className='btn'>Ver en mapa</button>
      </div>

      <div className="map">
        Espacio para mapa
      </div>

    </div>
  )
}

export default Location