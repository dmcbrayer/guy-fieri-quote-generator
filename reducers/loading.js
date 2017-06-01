
export const loading = (state = false, action) => {
  switch(action.type) {
    case 'BEGIN_FETCH':
      return true
    case 'END_FETCH':
      return false
    default:
      return state
  }
}