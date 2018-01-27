import React, {Component} from 'react'
// import {Redirect} from 'react-router'
import {connect} from 'react-redux'
import {newUserToDb} from '../actions/actions.js'
import styled from 'styled-components'

const UserFormContainer = styled.div `
/* border: blue .5px solid; */
margin: 20px;
border: white 2px solid;
border-radius: 10px;
padding: 5px;
input{
  width: 50%;
  height: 20px;
}
.nameQuestion{
  font-size: 1.5em;
}
.nameForm{
  display: flex;
  justify-content: space-around;
  margin-top: 5px;
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
        <div className="nameQuestion">
          What is your name, Adventurer?
        </div>
        <div className="nameForm">
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.newUser.name}/>
          <button onClick={this.handleButtonPress}>Add a Username</button>
        </div>
      </UserFormContainer>
    )
  }
}

export default connect(null, {newUserToDb})(UserForm)