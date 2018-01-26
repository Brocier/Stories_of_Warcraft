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
    font-family: "Life Craft";
  }
  .editDescriptionRow{
    display: flex;
    padding: 2px;
  }
`
class EditForm extends Component {
  state = {
    userToEdit: {
      name: '',
      description: ''
    }
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
      .editUser(this.state.userToEdit._id)
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
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.props.user.description}/>
          </div>
          <button onClick={this.handleButtonPress}>Edit this</button>
        </div>
      </EditUserFormContainer>
    )
  }
}

export default connect(null, {editUser})(EditForm)