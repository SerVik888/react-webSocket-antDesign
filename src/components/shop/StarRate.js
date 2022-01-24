import React, { useState } from 'react'
import { Rate } from 'antd'
import s from './shop.module.css'

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful']

export const StarRate = () => {
  const [stars, setStars] = useState(3)

  const handleChange = (value) => {
    setStars(value)
  }

  return (
    <span>
      <Rate tooltips={desc} onChange={handleChange} value={stars} />
      {stars ? <span className={s.rate}>{stars - 1}</span> : stars}
    </span>
  )
}
