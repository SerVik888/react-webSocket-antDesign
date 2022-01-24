import { AUTH, AUTH_PROGRESS_OFF, AUTH_PROGRESS_ON } from '../types'

const handlers = {
  [AUTH]: (state) => ({
    ...state,
    auth: true,
  }),
  [AUTH_PROGRESS_ON]: (state) => ({
    ...state,
    authProgress: true,
  }),
  [AUTH_PROGRESS_OFF]: (state) => ({
    ...state,
    authProgress: false,
  }),

  DEFAULT: (state) => state,
}

export const authReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}
