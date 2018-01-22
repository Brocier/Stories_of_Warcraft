import React, {Component} from 'react';
import axios from 'axios'
import styled from 'styled-components'

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
        <div>
          <div>Hello From User</div>
        </div>
      </div>
    )
  }
}

export default UserPage;
