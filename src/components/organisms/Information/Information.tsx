import React from 'react'

import './Information.scss'

export interface InformationProps {
  children?: React.ReactNode
}

const Information: React.FC<InformationProps> = ({ children }) => {

  return (
    <div className="dse-information">
      {children}
    </div>
  )
}

export default Information