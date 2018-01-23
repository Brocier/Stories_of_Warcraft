import React, {Component} from 'react'
import axios from 'axios'

import {connect} from 'react-redux'
import {addUser} from '../actions/userActions'
// import styled from 'styled-components'

class UserPage extends Component {
  state = {
    users: {},
    formValue: ''
  }
  async componentWillMount() {
    const response = await axios.get('/api/users')
    this.setState({users: response.data})
  }

  handleChange = (event) => {
    this.setState({formValue: event.target.value})
  }
  handleButtonPress = () => {
    this
      .props
      .addUser(this.state.formValue)
  }

  render() {
    return (
      <div>
        React/Redux Boilerplate Up and Running
        <div>
          <input
            type="text"
            placeholder='write something here'
            onChange={this.handleChange}
            value={this.state.formValue}/>
          <button onClick={this.handleButtonPress}>Add a user</button>
        </div>

        {this
          .props
          .users
          .map((user, i) => <p key={i}>{user.name}</p>)}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {users: state.users}
}

export default connect(mapStateToProps, {addUser})(UserPage)
