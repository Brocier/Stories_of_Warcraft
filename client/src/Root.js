import React from 'react'
import {Provider} from 'react-redux'
import {Route} from 'react-router'
import {ConnectedRouter} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import configureStore from './configureStore'
import App from './components/App.js'
import LandingPage from './components/LandingPage.js'

const history = createHistory()
const store = configureStore(history)
console.log(store)

const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/app" component={App}/>
      </div>
    </ConnectedRouter>
  </Provider>
)

export default Root