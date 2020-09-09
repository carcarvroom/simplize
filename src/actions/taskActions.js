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
      const sortedLists = lists.sort((a, b) => {
        return a.position - b.position
      }).map(list => {
        return {
          ...list,
          position: `list-${list.position}`
        }
      })
      console.log('fetched lists and sorted', sortedLists)
      dispatch(loadLists(sortedLists))
    }
    catch(error) {
      console.log('Task Board List Fetch Error:', error)
    }
  }
}

export const addTaskList = list => {
  return async dispatch => {
    try {
      const res = await fetch(`http://localhost:3000/lists`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(list)
      })
      const newList = await res.json()
      if(newList.error) {
          alert(newList.error)
      } else {
        console.log('created new list!', newList)
        dispatch(getListsByBoardId(list.board_id))
      }
    }
    catch(error) {
      console.log('Create List Error:', error)
    }
  }
}

export const addTaskCard = task => {
  return async dispatch => {
    try {
      const res = await fetch(`http://localhost:3000/tasks`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(task)
      })
      const newTask = await res.json()
      if(newTask.error) {
          alert(newTask.error)
      } else {
        console.log('created new list!', newTask)
        dispatch(getListsByBoardId(task.board_id))
      }
    }
    catch(error) {
      console.log('Create Task Card Error:', error)
    }
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

// export const addTaskCard = (listId, text) => {
//   return {
//       type: "ADD_CARD",
//       payload: {text, listId}
//   }
//  }