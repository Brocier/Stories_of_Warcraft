import React, {Component} from 'react'

// import {connect} from 'react-redux' import {addUsersToDb} from
// '../actions/actions.js'

class UserForm extends Component {
  state = {
    formValue: ''
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
        User Form Component
        <div>
          <input
            type="text"
            placeholder='write something here'
            onChange={this.handleChange}
            value={this.state.formValue}/>
          <button onClick={this.handleButtonPress}>Add a user</button>

        </div>
      </div>
    )
  }
}

export default UserForm