import React, {Component} from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'

const LandingPageContainer = styled.div `
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 25px;

  h1{
    font-size: 12vw;
    display: flex;
    justify-content: center;
    font-weight: 100;
    margin: 0;
  }
  .landingText{
    width: 60vw;
  }
  .appLink{
    margin-top: 20px;
    font-size: 35px;
    padding: 3px;
    border-radius:10px;
    border: solid 2px white;}`

class LandingPage extends Component {
  render() {
    return (
      <LandingPageContainer>
        <h1>Stories of Warcraft</h1>
        <div className="landingText">Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Nam assumenda unde quo placeat libero doloribus aperiam doloremque
          perspiciatis, facilis eos quis quidem qui quia laboriosam facere, perferendis
          voluptas fugit autem.</div>
        <div onClick={() => this.props.push('/app')} className="appLink">Continue to Your Story</div>
      </LandingPageContainer>
    )
  }
}

export default connect(null, {push})(LandingPage)