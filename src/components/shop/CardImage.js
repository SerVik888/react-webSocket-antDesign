import React, { useState } from 'react'
import s from './shop.module.css'
import phone from './phone.jpg'
import { Button, Image } from 'antd'

export const CardImage = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Button className={s.previewButton} type="primary" onClick={() => setVisible(true)}>
        Быстрый просмотр
      </Button>
      <Image
        src={phone}
        preview={{
          visible,
          src: phone,
          onVisibleChange: (value) => {
            setVisible(value)
          },
        }}
      />
    </>
  )
}
