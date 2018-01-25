import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUsers, editUser, deleteUser} from '../actions/actions.js'
import styled from 'styled-components'
import EditForm from './EditForm.js'

const UserListContainer = styled.div `
  border: green .5px solid;
  .listholder{
  display: flex;
  justify-content: space-between;
  margin: 4px;
    a{
      text-decoration: none;
      color: papayawhip;
      border: 3px white solid;
      padding: 2px;
      border-radius: 10%;
    }
  }
  .description{
    padding: 5px;
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
        UserList.js Component
        <div>
          {this
            .props
            .users
            .map((user, i) => {
              return (
                <div className="listholder" key={i}>
                  <a href="">
                    {user.name}
                  </a>
                  <div className="description">{user.description}</div>
                  <EditForm/>
                  <div className="buttons">
                    <button onClick= {() => this.props.editUser(user)}>
                      {/* I need this edit button to turn the a tag above into a form I can type into and then save to have it update the user. */}
                      Edit
                    </button>
                    <button onClick= {() => this.props.deleteUser(user)}>
                      Delete
                    </button>
                  </div>
                </div>
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

export default connect(mapStateToProps, {getUsers, editUser, deleteUser})(UserList)