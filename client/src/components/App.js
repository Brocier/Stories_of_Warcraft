import React, {Component} from 'react'
import UserPage from './UserPage.js'
import styled from 'styled-components'

const AppContainer = styled.div `
border: red 3px solid;`
class App extends Component {
  render() {
    return (
      <AppContainer>

        App Component
        <div>
          Router switch needed here:
        </div>
        <UserPage/>
      </AppContainer>
    )
  }
}
export default App
