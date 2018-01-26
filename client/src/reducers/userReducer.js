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
    case 'EDIT_USER':
      return updateObjectInArray(state, action)
    case 'DELETE_USER':
      return state.filter(user => user._id !== action.user)
    default:
      return state
  }
}

function updateObjectInArray(array, action) {
  return array.map((user) => {
    if (user._id !== action.user.id) {
      return user
    }
    return {
      ...user,
      ...action.user
    }
  })
}

export default userReducer