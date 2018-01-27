import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUsers, editUser, deleteUser} from '../actions/actions.js'
import styled from 'styled-components'
import EditForm from './EditForm.js'

const UserListContainer = styled.div `
  /* border: green .5px solid; */
  .listholder{
  display: flex;
  justify-content: space-between;
  margin: 4px;
  width: 70vw;
.buttons{
  display: flex;
}
    a{
      text-decoration: none;
      color: papayawhip;
      border: 3px white solid;
      padding: 4px;
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
        {this
          .props
          .users
          .map((user, i) => {
            return (
              <div className="listholder" key={i}>
                {/* Toggle ternary here */}
                <div>
                  <a href="/">{user.name}</a>
                  <div className="description">{user.description}</div>
                </div>

                <EditForm user={user}/>

                <div className="buttons">
                  {/* toggle button for edit turnary here */}
                  <button onClick= {() => this.props.deleteUser(user)}>
                    Delete
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

export default connect(mapStateToProps, {getUsers, editUser, deleteUser})(UserList)