import React, {Component} from 'react'
import styled from 'styled-components'

import UserForm from './UserForm.js'
import UserList from './UserList.js'

const UserPageContainer = styled.div `
/* border: gray .5px solid; */
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background: #170e09;
color: #fff;
border-radius: 10px;
.listAndForm{
  display: flex;
}
img{
  border-radius: 44%;
}
`
class UserPage extends Component {

  render() {
    return (
      <UserPageContainer>
        <UserForm/>
        <div className="listAndForm">
          <UserList/>
        </div>
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