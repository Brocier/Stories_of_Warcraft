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
      name: this.props.user.name,
      description: this.props.user.description
    }
  }

  handleChange = (event) => {
    console.log("Handle Change is getting triggered")
    const updatedUser = {
      ...this.state.userToEdit
    }
    const inputField = event.target.description
    const inputValue = event.target.value
    updatedUser[inputField] = inputValue

    console.log("Updated User", updatedUser)

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
              name="description"
              onChange={this.handleChange}
              value={this.state.userToEdit.description}/>
          </div>
          <button onClick={this.handleButtonPress}>Edit this</button>
        </div>
      </EditUserFormContainer>
    )
  }
}

export default connect(null, {editUser})(EditForm)