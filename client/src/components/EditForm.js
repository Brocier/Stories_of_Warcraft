import React, {Component} from 'react'
// import {Redirect} from 'react-router'
import {connect} from 'react-redux'
import {editUser} from '../actions/actions.js'
import styled from 'styled-components'

const EditUserFormContainer = styled.div `
  border: purple .5px solid;

  input{
    width: 100%;
    height: 20px;
  }
  .editDescriptionRow{
    display: flex;
    padding: 2px;
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
        <div className="editDescriptionRow">
          <div>
            <input type="text" name="name" onChange={this.handleChange} value=""/>
          </div>
          <button onClick={this.handleButtonPress}>Edit this</button>
        </div>
      </EditUserFormContainer>
    )
  }
}

const mapStateToProps = (state) => {
  return {usersToEdit: state.users}
}
export default connect(mapStateToProps, {editUser})(EditForm)