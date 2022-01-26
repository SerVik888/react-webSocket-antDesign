export const API = {
  getUsers: async (offset) => {
    try {
      const response = await fetch(`https://test.relabs.ru/api/users/list?offset=${offset}`)
      return response.json()
    } catch (e) {
      console.error(e)
    }
  },
}

export const socket = new WebSocket('wss://test.relabs.ru/event')
