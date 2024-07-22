import React from 'react'

import './Index.scss'

export interface IndexProps {
  children?: React.ReactNode
}

const Index: React.FC<IndexProps> = ({ children }) => {

  return (
    <div className="dse-index">
      {children}
    </div>
  )
}

export default Index