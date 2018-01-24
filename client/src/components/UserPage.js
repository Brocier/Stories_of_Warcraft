import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUsers} from '../actions/actions.js'
// import styled from 'styled-components'

import UserForm from './UserForm.js'

class UserPage extends Component {

  componentWillMount() {
    this
      .props
      .getUsers()
  }
  render() {
    // const userList = this   .props   .users   .map((user, i) => {     return
    // (console.log(user))console.log(userList)   })

    console.log(this.props.users)
    return (
      <div>
        UserPage.js Component
        <UserForm/>

        <pre>{JSON.stringify(this.props.users)}</pre>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {users: state.users}
}

export default connect(mapStateToProps, {getUsers})(UserPage)
