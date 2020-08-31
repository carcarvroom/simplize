import { CONSTANTS } from '../actions'

export const addTaskList = (title) => {
 return {
     type: CONSTANTS.ADD_LIST,
     payload: title
 }
}