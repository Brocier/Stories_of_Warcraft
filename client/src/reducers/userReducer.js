function userReducer(state = [], action) {
  switch (action.type) {
    case 'RECEIVE_USERS':
      console.log("Receive:", action.users);
      return [
        ...state,
        ...action.users
      ]
    case 'ADD_USER':
      console.log("add:", action.user);
      return [
        ...state,
        action.user
      ]
    default:
      return state
  }
}

export default userReducer