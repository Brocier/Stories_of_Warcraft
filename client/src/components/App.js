import React, {Component} from 'react'
import UserPage from './UserPage.js'
import styled from 'styled-components'
import {BrowserRouter as Router} from 'react-router-dom'

const AppContainer = styled.div `
border: red 3px solid;
height: 98vh;
display: flex;
flex-direction: column;
justify-content: space-between;
background-color: #ebdec2;
/* @font-face {
  font-family: 'LifeCraft';
  src:  url('/fonts/LifeCraft_Font.woff2') format('woff2'),
        url('/fonts/LifeCraft_Font.woff') format('woff');
}
font-family: LifeCraft; */
h1{
  font-size: 30px;
}
`
class App extends Component {
  render() {
    return (
      <Router>
        <AppContainer>
          App.js Component
          <h1>Stories of Warcraft</h1>
          <UserPage/>
        </AppContainer>
      </Router>
    )
  }
}
export default App
