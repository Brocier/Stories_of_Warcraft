import React, {Component} from 'react'
import styled from 'styled-components'

import UserForm from './UserForm.js'
import UserList from './UserList.js'

const UserPageContainer = styled.div `
border: gray 3px solid;`
class UserPage extends Component {

  render() {
    return (
      <UserPageContainer>
        UserPage.js Component
        <UserForm/>
        <UserList/>
      </UserPageContainer>
    )
  }
}
export default UserPage