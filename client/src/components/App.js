import React, {Component} from 'react'
import UserPage from './UserPage.js'
import styled from 'styled-components'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

const AppContainer = styled.div `
border: red 3px solid;`
class App extends Component {
  render() {
    return (
      <Router>
        <AppContainer>
          App Component
          <Switch>
            <Route exact path="/" component={UserPage}/>
          </Switch>
        </AppContainer>
      </Router>
    )
  }
}
export default App
