const defaultState = ['Hello Adventurer']

function user(state = defaultState, action) {
  switch (action.type) {
    case 'ADD_USER':
      return [
        ...state,
        action.user
      ]
    default:
      return state
  }
}

export default user