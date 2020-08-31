import { CONSTANTS } from '../actions'

export const addTaskCard = (listId, text) => {
 return {
     type: CONSTANTS.ADD_CARD,
     payload: {text, listId}
 }
}