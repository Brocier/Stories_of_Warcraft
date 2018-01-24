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
        dispatch(addUsersToDb(response.data))
      })
  }
}

// export function edittedUserToDb(user) {   return {type: 'EDIT_USER', user} }
// export function editUser(edittedUserObject) {   return function (dispatch) {
// return axios       .patch('/api/users', edittedUserObject) .then((response)
// => {         dispatch(edittedUserToDb(response.data)) })   } }

export function deleteUserFromDb(user) {
  return {type: 'DELETE_USER', user}
}
export function deleteUser(userObjectToDelete) {
  console.log(userObjectToDelete)
  return function (dispatch) {
    return axios
      .delete(`/api/users/:${userObjectToDelete._id}`)
      .then((response) => {
        dispatch(deleteUserFromDb(response.data))
      })
  }
}