import React, {Component} from 'react'
import axios from 'axios'
// import styled from 'styled-components'

class UserPage extends Component {
  state = {
    users: {}
  }
  async componentWillMount() {
    const response = await axios.get('/api/users')
    this.setState({users: response.data})
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
          .map((phrase, i) => <p key={i}>{user}</p>)}
      </div>
    )
  }

  const mapStateToProps = (state) => {
    return {users: state.user}
  }
}

export default UserPage
