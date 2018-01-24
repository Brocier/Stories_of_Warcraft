function userReducer(state = [], action) {
  switch (action.type) {
    case 'RECEIVE_USERS':
      return [
        ...state,
        ...action.users
      ]

    default:
      return state
  }
}

export default userReducer