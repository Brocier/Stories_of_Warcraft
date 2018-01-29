import React, {Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import styled from 'styled-components'

import {getUsers, editUser, deleteUser} from '../actions/actions.js'
import EditForm from './EditForm.js'

const UserListContainer = styled.div `
  /* border: green .5px solid; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .listholder{
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin: 4px;
  width: 40vw;
  padding: 10px;
  }
  .displayUsers{
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  }
  .username{
    font-size: 25px;
    text-decoration: none;
    color: #f7b10a;
    border: 3px white solid;
    padding: 4px;
    border-radius: 10%;
    background-color: rgba(256,0,0,.4);
    width: fit-content;

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
  state = {
    editFormShowing: false
  }
  componentWillMount() {
    this
      .props
      .getUsers()
  }
  handleEditButton = () => {
    this.setState({
      editFormShowing: !this.state.editFormShowing
    })
  }

  render() {
    return (
      <UserListContainer>
        <button onClick={this.handleEditButton}>Super Special Admin Mode Button</button>
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

                {this.state.editFormShowing
                  ? <div className="editHolder">
                      <EditForm user={user}/>
                      <button onClick= {() => this.props.deleteUser(user)}>
                        Delete User
                      </button>
                    </div>
                  : null
}
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