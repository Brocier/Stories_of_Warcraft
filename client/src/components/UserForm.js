import React, {Component} from 'react'
import {Redirect} from 'react-router'
import {connect} from 'react-redux'
import {newUserToDb} from '../actions/actions.js'
import styled from 'styled-components'

const UserFormContainer = styled.div `
border: blue 3px solid;`
class UserForm extends Component {
  state = {
    newUser: {
      name: ''
    },
    redirect: false
  }

  newUser = [...this.state.newUser]

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
    this.setState({redirect: true})

  }
  render() {
    if (this.state.redirect) {
      return (<Redirect
        to={{
        pathname: '/userPage',
        state: {
          fromDashboard: true
        }
      }}/>)
    }
    return (
      <UserFormContainer>
        User Form Component
        <div>
          <input
            type="text"
            placeholder="What is your name Adventurer?"
            onChange={this.handleChange}
            value={this.state.newUser.name}/>
          <button onClick={this.handleButtonPress}>Add a user</button>
        </div>
      </UserFormContainer>
    )
  }
}

export default connect(null, {newUserToDb})(UserForm)