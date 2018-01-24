import React, {Component} from 'react'

import {connect} from 'react-redux'
import {newUserToDb} from '../actions/actions.js'
import styled from 'styled-components'

const UserFormContainer = styled.div `
border: blue 3px solid;`
class UserForm extends Component {
  state = {
    userFormValue: '',
    newUser: {}
  }

  newUser = [...this.state.newUser]

  handleChange = (event) => {
    this.setState({userFormValue: event.target.value})
  }
  handleButtonPress = () => {
    this
      .props
      .newUserToDb(this.state.userFormValue)
  }
  render() {
    return (
      <UserFormContainer>
        User Form Component
        <div>
          <input
            type="text"
            placeholder="What's your name Adventurer?"
            onChange={this.handleChange}
            value={this.state.userFormValue}/>
          <button onClick={this.handleButtonPress}>Add a user</button>

        </div>
      </UserFormContainer>
    )
  }
}

export default connect(null, {newUserToDb})(UserForm)