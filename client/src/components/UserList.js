import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUsers} from '../actions/actions.js'
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
    console.log(this.props.users)

    return (
      <UserListContainer>
        UserList.js Component
        <div>
          {this
            .props
            .users
            .map((user, i) => {
              return (
                <div key={i}>{user.name}</div>
              )
            })}
        </div>
      </UserListContainer>
    )
  }
}

const mapStateToProps = (state) => {
  return {users: state.users}
}

export default connect(mapStateToProps, {getUsers})(UserList)