import { Button, Card, Col, Row } from 'antd'
import s from './shop.module.css'
import React from 'react'
import { StarRate } from './StarRate'
import { HeartOutlined } from '@ant-design/icons'
import phone from './phone.jpg'
import { CardImage } from './CardImage'

export const ShopCard = () => {
  return (
    <Card bodyStyle={{ padding: '15px' }} className={s.cardStyle} bordered={false}>
      <div className={s.cardImgWrapper}>
        <CardImage className={s.cardImg} src={phone} />
        <div className={s.discount}>-14%</div>
      </div>
      <div className={s.priceBlock}>
        <span className={s.price}>86 956 &#8381;</span>
        <span className={s.oldPrice}> 99 956 &#8381;</span>
        <div className={s.priceByCard}>85 956 &#8381;</div>
      </div>
      <div className={s.breadCrumbs}>
        <a href="#">Apple / </a>
        <a href="#">Смартфон iPhone 12 Pro 128GB / </a>
        <a href="#">6.1" / </a>
        <a href="#">2532x1170 / </a>
        <a href="#">OLED / </a>
        <a href="#">128 ГБ</a>
      </div>
      <StarRate />
      <div className={s.installmentsCardWrapper}>
        <span className={s.installmentsCard}>РАССРОЧКА 0-0-6</span>
      </div>
      <div className={s.buttonCardWrapper}>
        <span>
          <Button className={s.buttonCard} type="primary">
            В корзину
          </Button>
        </span>
        <span>
          <HeartOutlined className={s.iconCard} />
        </span>
      </div>
    </Card>
  )
}
