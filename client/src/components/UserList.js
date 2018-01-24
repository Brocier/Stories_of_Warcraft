import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUsers, editUser, deleteUser} from '../actions/actions.js'
import styled from 'styled-components'

const UserListContainer = styled.div `
border: green 3px solid;`
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
                <li key={i}>{user.name}
                  <button onClick= {() => this.props.editUser(user)}>
                    Edit
                  </button>
                  <button onClick= {() => this.props.deleteUser(user)}>
                    Delete
                  </button>
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