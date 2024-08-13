import React from 'react'

import './Gallery.scss'

export interface GalleryProps {
  children?: React.ReactNode
}

const Gallery: React.FC<GalleryProps> = ({ children }) => {

  return (
    <div className="dse-gallery">
      {children}
    </div>
  )
}

export default Gallery