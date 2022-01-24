import { Card, Col, Image, Row } from 'antd'
import s from './shop.module.css'
import React from 'react'
import { StarRate } from './StarRate'

export function Shop() {
  return (
    <div className={s.shop}>
      <Row gutter={20} justify={'center'}>
        <Col span={8}>
          <Card bodyStyle={{ padding: '10px' }} className={s.cardStyle} bordered={false}>
            <div className={s.cardImg}>
              <Image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
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
          </Card>
        </Col>
        <Col span={8}>
          <Card className={s.cardStyle} title="Card title" bordered={false}>
            <div>
              <Image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
              <span className={s.discount}>-14%</span>
            </div>
            <div>
              <span className={s.price}>86 956 &#8381;</span>
              <span className={s.oldPrice}></span>
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card className={s.cardStyle} title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
      </Row>
    </div>
  )
}
