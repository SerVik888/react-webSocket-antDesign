import React from 'react'
import preloader from './Preloader.svg'

export const Preloader = () => {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <img src={preloader} />
    </div>
  )
}
