//FULL CRUD TO EXPRESS

import axios from 'axios'

export function receiveUsers(users) {
  return {type: 'RECEIVE_USERS', users}
}

export function getUsers() {
  return function (dispatch) {
    return axios
      .get('/api/users')
      .then((response) => {
        dispatch(receiveUsers(response.data))
      })
  }
}

// posts: json.data.children.map(child => child.data),   receivedAt: Date.now()
// (async componentWillMount() {     const response = await
// axios.get('/api/users')     this.setState({users: response.data})