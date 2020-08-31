import { CONSTANTS } from '../actions'

export const addTaskList = (title) => {
 return {
     type: CONSTANTS.ADD_LIST,
     payload: title
 }
}

export const sort = (
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId,
    type
    ) => {
    return {
        type: CONSTANTS.DRAGGED,
        payload: {
            droppableIdStart,
            droppableIdEnd,
            droppableIndexStart,
            droppableIndexEnd,
            draggableId,
            type
        }
    }
}