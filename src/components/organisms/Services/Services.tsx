import React from 'react'

import './Services.scss'

export interface ServicesProps {
  children?: React.ReactNode
}

const Services: React.FC<ServicesProps> = ({ children }) => {

  return (
    <div className="dse-services">
      {children}
    </div>
  )
}

export default Services