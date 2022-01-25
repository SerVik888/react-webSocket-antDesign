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
      <Rate className={s.starsRate} tooltips={desc} onChange={handleChange} value={stars} />
      {stars ? (
        <span className={s.rateNumber}>{stars - 1}</span>
      ) : (
        <span className={s.rateNumber}>stars</span>
      )}
    </span>
  )
}
