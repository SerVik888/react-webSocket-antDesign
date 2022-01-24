import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import 'antd/dist/antd.css'

import App from './App'
import { AppState } from './context/appContext/AppState'

ReactDOM.render(
  <BrowserRouter>
    <AppState>
      <App />
    </AppState>
  </BrowserRouter>,
  document.getElementById('root')
)
