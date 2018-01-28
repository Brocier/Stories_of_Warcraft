import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUsers} from '../../actions/actions.js'
// Guess I'll try the mapstatetoprops option first
import styled from 'styled-components'
const UserCharacterPageContainer = styled.div `
  border: red solid 1px;
  `
class UserCharacterPage extends Component {
  componentWillMount() {
    this
      .props
      .getUsers()
  }
  render() {
    const userId = this.props.match.params.userid
    return (
      <UserCharacterPageContainer>
        <div>
          {this
            .props
            .users
            .map((user, i) => {
              if (user._id === userId) {
                return (
                  <div key={i}>
                    <div>{user.name}</div>
                    <div>{user.description}</div>
                    <div>
                      {user
                        .characters
                        .map((character, i) => {
                          return (
                            <div>
                              <div>
                                Character
                              </div>
                              <div>
                                {character.name}
                              </div>
                              <div>
                                {character.description}
                              </div>
                              <div>
                                {character
                                  .quests
                                  .map((quest, i) => {
                                    return (
                                      <div>
                                        Quest
                                        <div>
                                          {quest.name}
                                        </div>
                                        <div>
                                          {quest.description}
                                        </div>
                                      </div>
                                    )
                                  })}
                              </div>
                            </div>
                          )
                        })}
                    </div>
                  </div>
                )
              }
            })}
        </div>
      </UserCharacterPageContainer>
    )
  }
}
const mapStateToProps = (state) => {
  return {users: state.users}
}
export default connect(mapStateToProps, {getUsers})(UserCharacterPage)