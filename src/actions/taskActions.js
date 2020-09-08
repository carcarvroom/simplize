const loadBoards = (payload) => ({type: "LOAD_TASK_BOARDS", payload})
const loadLists = (payload) => ({type: "LOAD_LISTS", payload})

export const getTaskBoards = userId => {
  return async dispatch => {
    try {
      const res = await fetch(`http://localhost:3000/my_boards/${userId}/taskboard`, {headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}})
      const taskBoards = await res.json()
      console.log('fetched taskBoards', taskBoards)
      dispatch(loadBoards(taskBoards))
    }
    catch(error) {
      console.log('Task Board Fetch Error:', error)
    }
  }
}

export const getListsByBoardId = boardId => {
  return async dispatch => {
    try {
      const res = await fetch(`http://localhost:3000/board_lists/${boardId}`, {headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}})
      const lists = await res.json()
      console.log('fetched lists', lists)
      dispatch(loadLists(lists))
    }
    catch(error) {
      console.log('Task Board List Fetch Error:', error)
    }
  }
}

export const addTaskList = (title) => {
 return {
   type: "ADD_LIST",
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
    type: "DRAGGED",
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

export const addTaskCard = (listId, text) => {
  return {
      type: "ADD_CARD",
      payload: {text, listId}
  }
 }