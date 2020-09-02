import { combineReducers } from 'redux'
import userReducer from './userReducer'
import taskListReducer from './taskListReducer'

export default combineReducers({
    userReducer,
    taskListReducer
})