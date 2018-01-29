import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUsers} from '../../actions/actions.js'
import {push} from 'react-router-redux'
import styled from 'styled-components'

const UserCharacterPageContainer = styled.div `
font-size: 36px;
display: flex;
flex-direction: column;
align-items: center;
.border{
  border: .5px white dotted;
}
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
          // eslint-disable-next-line
            .map((user, i) => {
              if (user._id === userId) {
                return (
                  <div className="border" key={i}>
                    <div>User:</div>
                    <div>{user.name}</div>
                    <div>{user.description}</div>
                    <div>
                      {user
                        .characters
                        .map((character, i) => {
                          return (
                            <div className="border" key={i}>
                              <div>
                                Character:
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
                                      <div className="border" key={i}>
                                        Quest:
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
        <div onClick={() => this.props.push('/app')} className="border">Back to Users List</div>
      </UserCharacterPageContainer>
    )
  }
}
const mapStateToProps = (state) => {
  return {users: state.users}
}
export default connect(mapStateToProps, {getUsers, push})(UserCharacterPage)