import React, { useContext, useEffect } from 'react'
import { Nav } from './components/Nav'
import s from './app.module.css'
import { Auth } from './components/auth/Auth'
import { Shop } from './components/shop/Shop'
import { Route, Routes } from 'react-router-dom'

import { NotFoundPage } from './components/NotFoundPage'
import { HomePage } from './components/homePage/HomePage'
import { Layout } from 'antd'
import { AppContext } from './context/appContext/AppContext'

function App() {
  const { authRequest, auth, authProgress, setData, data, removeUser, events, setEvents } =
    useContext(AppContext)

  const { Content, Header } = Layout

  if (!auth) return <Auth authRequest={authRequest} authProgress={authProgress} />

  return (
    <Layout className={s.layout}>
      <Header className={s.header}>
        <Nav />
      </Header>
      <Content className={s.layoutBody}>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                setData={setData}
                data={data}
                removeUser={removeUser}
                limit={data.limit}
                events={events}
                setEvents={setEvents}
              />
            }
          />
          <Route
            path="/auth"
            element={<Auth authRequest={authRequest} authProgress={authProgress} />}
          />
          <Route path="/shop" element={<Shop />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Content>
    </Layout>
  )
}

export default App
