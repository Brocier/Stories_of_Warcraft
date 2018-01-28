import React, {Component} from 'react'

class UserCharacterPage extends Component {
  render() {
    return (
      <div>
        Hello from the character Page
        <div>
          {this.props.match.url}
        </div>
      </div>
    )
  }
}

export default UserCharacterPage