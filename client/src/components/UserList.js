import React, {Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import styled from 'styled-components'

import {getUsers, editUser, deleteUser} from '../actions/actions.js'
import EditForm from './EditForm.js'

const UserListContainer = styled.div `
  /* border: green .5px solid; */
  .listholder{
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin: 4px;
  width: 40vw;
  padding: 10px;
  }
  .username{
    font-size: 25px;
    text-decoration: none;
    color: #f7b10a;
    border: 3px white solid;
    padding: 4px;
    border-radius: 10%;
    background-color: rgba(256,0,0,.4);
  }
  .description{
    padding: 15px;
  }
  button{
    height:20px;
    border-radius: 10%;
  }
  `
class UserList extends Component {

  componentWillMount() {
    this
      .props
      .getUsers()
  }

  render() {
    return (
      <UserListContainer>
        {this
          .props
          .users
          .map((user, i) => {
            return (
              <div className="listholder" key={i}>
                <div className="displayUsers">
                  <div className="username" onClick={() => this.props.push(`/user/${user._id}`)}>{user.name}</div>
                  <div className="description">{user.description}</div>
                </div>
                <div>
                  <EditForm user={user}/>
                  <button onClick= {() => this.props.deleteUser(user)}>
                    Delete User
                  </button>
                </div>
              </div>
            )
          })}
      </UserListContainer>
    )
  }
}

const mapStateToProps = (state) => {
  return {users: state.users}
}

export default connect(mapStateToProps, {getUsers, editUser, deleteUser, push})(UserList)