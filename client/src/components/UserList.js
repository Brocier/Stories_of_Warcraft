import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUsers} from '../actions/actions.js'
// import styled from 'styled-components'

class UserList extends Component {

  componentWillMount() {
    this
      .props
      .getUsers()
  }

  render() {
    console.log(this.props.users)

    return (
      <div>
        UserList.js Component
        <div>
          {this
            .props
            .users
            .map((user, i) => {
              return (
                <div key={i}>{user.name}</div>
              )
            })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {users: state.users}
}

export default connect(mapStateToProps, {getUsers})(UserList)