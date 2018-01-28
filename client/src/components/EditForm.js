import React, {Component} from 'react'
// import {Redirect} from 'react-router'
import {connect} from 'react-redux'
import {editUser} from '../actions/actions.js'
import styled from 'styled-components'

const EditUserFormContainer = styled.div `
  display: flex;
  .editDescriptionRow{
    padding: 2px;
  }
  button{
    font-family: "Life Craft";
  }
`
class EditForm extends Component {
  state = {
    userToEdit: {
      id: this.props.user._id,
      name: this.props.user.name,
      description: this.props.user.description
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
      .editUser(this.state.userToEdit)
    console.log(this.state.userToEdit)
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
              value={this.state.userToEdit.name}/>
          </div>
          <div><input
            type="text"
            name="description"
            onChange={this.handleChange}
            value={this.state.userToEdit.description}/>
          </div>
          <button onClick={this.handleButtonPress}>Submit Edit</button>
        </div>
      </EditUserFormContainer>
    )
  }
}

export default connect(null, {editUser})(EditForm)