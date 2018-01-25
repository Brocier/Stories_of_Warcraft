import React, {Component} from 'react'
// import {Redirect} from 'react-router'
import {connect} from 'react-redux'
import {editUser} from '../actions/actions.js'
import styled from 'styled-components'

const EditUserFormContainer = styled.div `
  border: purple .5px solid;
  input{
    width: 50%;
    height: 20px;
  }
`
class EditForm extends Component {
  state = {
    userToEdit: {
      name: ''
    },
    redirect: false
  }

  handleChange = (event) => {
    const updatedUser = {
      ...this.state.userToEdit
    }
    const inputField = event.target.name
    const inputValue = event.target.value
    updatedUser[inputField] = inputValue

    this.setState({userToEdit: updatedUser})
  }

  handleButtonPress = () => {
    this
      .props
      .editUser(this.state.userToEdit)
    this.setState({
      userToEdit: {
        name: ""
      }
    })
  }

  render() {
    return (
      <EditUserFormContainer>
        Edit Form Component
        <div>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.userToEdit.name}/>
          <button onClick={this.handleButtonPress}>Edit this user</button>
        </div>
      </EditUserFormContainer>
    )
  }
}

const mapStateToProps = (state) => {
  return {users: state.users}
}
export default connect(mapStateToProps, {editUser})(EditForm)