import React, {Component} from 'react'
// import {Redirect} from 'react-router'
import {connect} from 'react-redux'
import {newUserToDb} from '../actions/actions.js'
import styled from 'styled-components'

const UserFormContainer = styled.div `
border: blue .5px solid;
margin: 10px;
input{
  width: 50%;
  height: 20px;
}
button{

}`
class UserForm extends Component {
  state = {
    newUser: {}
  }

  handleChange = (event) => {
    const updatedUser = {
      ...this.state.newUser
    }
    const inputField = event.target.name
    const inputValue = event.target.value
    updatedUser[inputField] = inputValue

    this.setState({newUser: updatedUser})
  }
  handleButtonPress = () => {
    this
      .props
      .newUserToDb(this.state.newUser)
    this.setState({
      newUser: {
        name: ""
      }
    })
  }
  render() {
    return (
      <UserFormContainer>
        <h2>
          What is your name, Adventurer?
        </h2>
        <div>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.newUser.name}/>
          <button onClick={this.handleButtonPress}>Add a user</button>
        </div>
      </UserFormContainer>
    )
  }
}

export default connect(null, {newUserToDb})(UserForm)