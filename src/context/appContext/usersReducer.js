import { GET_DATA, GET_EVENTS, REMOVE_USER } from '../types'

const handlers = {
  [GET_DATA]: (state, action) => ({
    ...state,
    data: action.data,
  }),
  [REMOVE_USER]: (state, action) => ({
    ...state,
    ...state.data,
    ...(state.data.items = state.data.items.filter((user) => user.id !== action.id)),
  }),
  [GET_EVENTS]: (state, action) => ({
    ...state,
    events: [...state.events, action.event],
  }),

  DEFAULT: (state) => state,
}

export const usersReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}
