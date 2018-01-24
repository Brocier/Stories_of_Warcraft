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
export function newUserToDb(newUserName) {
  return function (dispatch) {
    return axios
      .post('/api/users')
      .then((response) => {
        dispatch(addUsersToDb(response.data))
      })
  }
}