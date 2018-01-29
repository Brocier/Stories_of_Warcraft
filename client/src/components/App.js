import React, {Component} from 'react'
import UserPage from './UserPage.js'
import styled from 'styled-components'
// import {BrowserRouter as Router} from 'react-router-dom'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'

const AppContainer = styled.div `
  /* border: red .5px solid; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: space-around;
  background-color: black;
  h1{
    font-size: 12vw;
    display: flex;
    justify-content: center;
    font-weight: 100;
    margin: 0;
  }
  .footer{
    display: flex;
    justify-content: space-between;
  }
  `
class App extends Component {
  render() {
    return (
      <AppContainer>
        <h1>Stories of Warcraft</h1>
        <UserPage/>
        <div className="footer">
          <div onClick={() => this.props.push('/')}>Back to Splash page</div>
          <div onClick={() => this.props.push('/quest')}>Quest Page Mock-up</div>
        </div>
      </AppContainer>
    )
  }
}
export default connect(null, {push})(App)
