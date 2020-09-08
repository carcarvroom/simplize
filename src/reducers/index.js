import { combineReducers } from 'redux'
import userReducer from './userReducer'
import taskReducer from './taskReducer'
import teamReducer from './teamReducer'
import issueReducer from './issueReducer'

export default combineReducers({
    userReducer,
    taskReducer,
    teamReducer,
    issueReducer
})