function userReducer(state = [], action) {
  switch (action.type) {
    case 'RECEIVE_USERS':
      return [
        ...state,
        ...action.users
      ]
    case 'ADD_USER':
      return [
        ...state,
        action.user
      ]
    default:
      return state
  }
}

export default userReducer