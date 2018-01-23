import {combineReducers} from 'redux'
import userReducer from './userReducer'
import {routerReducer} from 'react-router-redux' // we need this for react-router

// Combine all reducers
const rootReducer = combineReducers({users: userReducer, router: routerReducer})

export default rootReducer