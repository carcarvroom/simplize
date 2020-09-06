import { combineReducers } from 'redux'
import userReducer from './userReducer'
import taskListReducer from './taskListReducer'
import teamReducer from './teamReducer'
import issueReducer from './issueReducer'

export default combineReducers({
    userReducer,
    taskListReducer,
    teamReducer,
    issueReducer
})