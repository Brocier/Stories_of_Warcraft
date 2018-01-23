import React from 'react'
import {Provider} from 'react-redux'
import {Route, Switch} from 'react-router'
import {ConnectedRouter} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import configureStore from './configureStore'
import UserPage from './components/UserPage.js'

const history = createHistory()
const store = configureStore(history)
console.log(store)
const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={UserPage}/>
      </Switch>
    </ConnectedRouter>
  </Provider>
)

export default Root