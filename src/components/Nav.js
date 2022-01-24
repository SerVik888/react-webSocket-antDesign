import React from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <Menu mode="horizontal" defaultSelectedKeys={['1']}>
      <Menu.Item key="1">
        <Link to="/">Главная страница</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/auth">Авторизация</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/shop">Магазин</Link>
      </Menu.Item>
    </Menu>
  )
}
