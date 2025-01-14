import React from 'react'

import './AboutUs.scss'

export interface AboutUsProps {
  children?: React.ReactNode
}

const AboutUs: React.FC<AboutUsProps> = ({ children }) => {

  return (
    <div className="dse-about-us">
      {children}
    </div>
  )
}

export default AboutUs