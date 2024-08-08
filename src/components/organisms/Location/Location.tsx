import React from 'react'

import './Location.scss'

export interface LocationProps {
  children?: React.ReactNode
}

const Location: React.FC<LocationProps> = ({ children }) => {

  return (
    <div className="dse-location">
      {children}
    </div>
  )
}

export default Location