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
      <div>
        App Component
        <UserPage/>
      </div>
    )
  }
}
export default connect(mapStateToProps, {addUser})(App)
