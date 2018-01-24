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

export function addUsersToDb(user) {
  return {type: 'ADD_USER', user}
}
export function newUserToDb(newUserObject) {
  return function (dispatch) {
    return axios
      .post('/api/users', newUserObject)
      .then((response) => {
        console.log(response.data)
        dispatch(addUsersToDb(response.data))
      })
  }
}