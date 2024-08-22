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
        <FmdGoodOutlinedIcon
          sx={{ fontSize: '80px' }}
        />

        <div className='location-text'>
        <p>Calle Cachanilla #1821</p>
        <p>Colonia Herrera</p>
        <p>Tijuana, Baja California</p>
        </div>

        <button className='btn'>Ver en mapa</button>

      </div>

      {/* mapa */}
      <div className="div2-location">
      </div>

    </div>

  )
}

export default Location