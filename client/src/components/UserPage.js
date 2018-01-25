import React, {Component} from 'react'
import styled from 'styled-components'

import UserForm from './UserForm.js'
import UserList from './UserList.js'

const UserPageContainer = styled.div `
border: gray 3px solid;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background: #170e09;
color: #fff;

img{
  border-radius: 44%;
}
`
class UserPage extends Component {

  render() {
    return (
      <UserPageContainer>
        UserPage.js Component
        <UserForm/>
        <UserList/>
        <div>
          <img
            src="https://media.giphy.com/media/l4pT08fraKXoYgxiw/giphy.gif"
            alt="cooking fire"/>
        </div>
      </UserPageContainer>
    )
  }
}
export default UserPage