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
      // case 'EDIT_USER':   return [     ...state,     action.user   ]
    case 'DELETE_USER':
      return [state]
    default:
      return state
  }
}

export default userReducer