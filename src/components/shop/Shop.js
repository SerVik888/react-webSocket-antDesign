import s from './shop.module.css'
import React from 'react'
import { ShopCard } from './ShopCard'

export const Shop = () => {
  return (
    <div className={s.shop}>
      <ShopCard />
      <ShopCard />
      <ShopCard />
      <ShopCard />
      <ShopCard />
      <ShopCard />
      <ShopCard />
      <ShopCard />
    </div>
  )
}
