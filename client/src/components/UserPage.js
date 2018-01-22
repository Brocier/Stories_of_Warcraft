import React, {Component} from 'react';
import axios from 'axios'
import styled from 'styled-components'

class UserPage extends Component {
  state = {
    users: {
      name: 'Brocier'
    }
  }
  async componentWillMount() {
    const response = await axios.get('/api/users')
    this.setState({users: response.data})
  }

  render() {
    return (
      <div>
        <div>
          <div>Hello From User</div>
          {this
            .state
            .users
            .map((users))}
        </div>
      </div>
    )
  }
}

export default UserPage;
