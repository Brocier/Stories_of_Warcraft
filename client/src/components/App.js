import React, {Component} from 'react'
import UserPage from './UserPage.js'
import styled from 'styled-components'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const AppContainer = styled.div `
border: red 3px solid;
height: 98vh;
display: flex;
flex-direction: column;
justify-content: space-between;
img{
  width: 
}
`
class App extends Component {
  render() {
    return (
      <Router>
        <AppContainer>
          App.js Component
          <UserPage/>
          <img src="https://i.imgur.com/sSEOAXu.png?1" alt="Tavern Fireplace"/>
        </AppContainer>
      </Router>
    )
  }
}
export default App
