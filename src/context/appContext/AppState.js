import React, { useReducer } from 'react'
import { API, socket } from '../../api'
import {
  AUTH,
  AUTH_PROGRESS_OFF,
  AUTH_PROGRESS_ON,
  GET_DATA,
  GET_EVENTS,
  REMOVE_USER,
} from '../types'
import { AppContext } from './AppContext'
import { authReducer } from './authReducer'
import { usersReducer } from './usersReducer'

const requestAuth = (ms) => {
  return new Promise((r) => setTimeout(() => r(), ms))
}

export const AppState = ({ children }) => {
  const initialState = {
    auth: false,
    authProgress: false,
    data: {},
    events: [],
  }

  const [authState, authDispatch] = useReducer(authReducer, initialState)
  const [dataState, dataDispatch] = useReducer(usersReducer, initialState)

  const setEvents = () => {
    socket.onmessage = (e) => {
      const event = JSON.parse(e.data)
      dataDispatch({ type: GET_EVENTS, event })
    }
  }

  const authRequest = async () => {
    authDispatch({ type: AUTH_PROGRESS_ON })
    try {
      await requestAuth(2000)
      authDispatch({ type: AUTH })
    } catch (error) {
      console.log(error)
    }
    authDispatch({ type: AUTH_PROGRESS_OFF })
  }

  const setData = async () => {
    try {
      const data = await API.getUsers()
      dataDispatch({ type: GET_DATA, data })
    } catch (e) {
      console.log(e)
    }
  }

  const removeUser = (id) => {
    dataDispatch({ type: REMOVE_USER, id })
  }

  return (
    <AppContext.Provider
      value={{
        auth: authState.auth,
        authProgress: authState.authProgress,
        data: dataState.data,
        events: dataState.events,
        authRequest,
        setData,
        setEvents,
        removeUser,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
