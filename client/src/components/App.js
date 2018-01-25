import React, {Component} from 'react'
import UserPage from './UserPage.js'
import styled from 'styled-components'
import {BrowserRouter as Router} from 'react-router-dom'

const AppContainer = styled.div `
border: red .5px solid;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: space-around;
background-color: #ebdec2;
h1{
  font-size: 12vw;
  display: flex;
  justify-content: center;
  font-weight: 100;
  margin: 0;
}
`
class App extends Component {
  render() {
    return (
      <Router>
        <AppContainer>
          <h1>Stories of Warcraft</h1>
          <UserPage/>
        </AppContainer>
      </Router>
    )
  }
}
export default App
