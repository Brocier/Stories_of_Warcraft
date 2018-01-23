import React, {Component} from 'react'

import {connect} from 'react-redux'
import {addUser} from '../actions/userActions'

import UserPage from './UserPage.js'
class App extends Component {
  state = {
    formValue: ''
  }

  handleChange = (event) => {
    this.setState({formValue: event.target.value})
  }
  handleButtonPress = () => {
    this
      .props
      .addPhrase(this.state.formValue)
  }

  render() {
    return (
      <div className="App">
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
          .map((phrase, i) => <p key={i}>{user}</p>)}
      </div>
    )
  }

  const mapStateToProps = (state) => {
    return {users: state.user}
  }
}
export default connect(mapStateToProps, {addUser})(App)
