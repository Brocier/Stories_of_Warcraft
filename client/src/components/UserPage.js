import React, {Component} from 'react'
// import styled from 'styled-components'

import UserForm from './UserForm.js'
import UserList from './UserList.js'

class UserPage extends Component {

  render() {
    return (
      <div>
        UserPage.js Component
        <UserForm/>
        <UserList/>
      </div>
    )
  }
}
export default UserPage
