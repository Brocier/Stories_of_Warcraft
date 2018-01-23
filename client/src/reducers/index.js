import {combineReducers} from 'redux'
import user from './userReducer'
import {routerReducer as router} from 'react-router-redux' // we need this for react-router

// Combine all reducers
const rootReducer = combineReducers({user, router})

export default rootReducer