
export const quote = (state = null, action) => {
  switch(action.type) {
    case 'SET_QUOTE':
      return action.payload
    default:
      return state
  }
}