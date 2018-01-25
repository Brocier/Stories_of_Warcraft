import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUsers, editUser, deleteUser} from '../actions/actions.js'
import styled from 'styled-components'

const UserListContainer = styled.div `
border: green 3px solid;
li{
display: flex;
justify-content: space-between;
}`
class UserList extends Component {

  componentWillMount() {
    this
      .props
      .getUsers()
  }

  render() {
    return (
      <UserListContainer>
        UserList.js Component
        <ul>
          {this
            .props
            .users
            .map((user, i) => {
              return (
                <li key={i}>
                  <a href="">
                    {user.name}
                  </a>
                  <div>
                    <button onClick= {() => this.props.editUser(user)}>
                      Edit
                    </button>
                    <button onClick= {() => this.props.deleteUser(user)}>
                      Delete
                    </button>
                  </div>
                </li>
              )
            })}
        </ul>
      </UserListContainer>
    )
  }
}

const mapStateToProps = (state) => {
  return {users: state.users}
}

export default connect(mapStateToProps, {getUsers, editUser, deleteUser})(UserList)