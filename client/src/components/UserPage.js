import React, {Component} from 'react'

import {connect} from 'react-redux'
import {getUsers} from '../actions/actions.js'
// import styled from 'styled-components'

class UserPage extends Component {
  state = {
    users: {},
    formValue: ''
  }
  componentWillMount() {
    this
      .props
      .getUsers()
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
        UserPage.js Component
        <div>
          <input
            type="text"
            placeholder='write something here'
            onChange={this.handleChange}
            value={this.state.formValue}/>
          <button onClick={this.handleButtonPress}>Add a user</button>

        </div>

        {/* {this
          .props
          .users
          .map((user, i) => <p key={i}>{user.name}</p>)} */}

        <pre>Blah</pre>
        <pre>{JSON.stringify(this.props.users)}</pre>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {users: state.users}
}

export default connect(mapStateToProps, {getUsers})(UserPage)
