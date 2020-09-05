import { combineReducers } from 'redux'
import userReducer from './userReducer'
import taskListReducer from './taskListReducer'
import teamReducer from './teamReducer'

export default combineReducers({
    userReducer,
    taskListReducer,
    teamReducer
})