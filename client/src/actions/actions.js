//FULL CRUD TO EXPRESS

import axios from 'axios'

function requestUser(users) {
  return {type: "ADD_USERS", users}
}
