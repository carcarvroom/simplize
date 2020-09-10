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

export const createTaskboard = taskboard => {
  return async dispatch => {
    try {
      const res = await fetch(`http://localhost:3000/boards`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(taskboard)
      })
      const newTaskboard = await res.json()
      if(newTaskboard.error) {
          alert(newTaskboard.error)
      } else {
        console.log('created new taskboard!', newTaskboard)
        dispatch(getTaskBoards(parseInt(localStorage.getItem('userId'))))
      }
    }
    catch(error) {
      console.log('Create Taskboard Error:', error)
    }
  }
}

export const editTaskboard = (boardId, updatedInfo) => {
  return async dispatch => {
    try {
      const res = await fetch(`http://localhost:3000/boards/${boardId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(updatedInfo)
      })
      const taskboardUpdated = await res.json()
      console.log('updated taskboard', taskboardUpdated)
      dispatch(getTaskBoards(parseInt(localStorage.getItem('userId'))))
    }
    catch(error) {
      console.log('Update Taskboard Error:', error)
    }
  }
}

export const deleteTaskboard = boardId => {
  return async dispatch => {
    try {
      await fetch(`http://localhost:3000/boards/${boardId}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      })
      dispatch(getTaskBoards(parseInt(localStorage.getItem('userId'))))
    }
    catch(error) {
      console.log('Delete Taskboard Error:', error)
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
      // console.log('fetched lists and sorted', sortedLists)
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

export const editTaskCard = (cardId, updatedInfo, boardId) => {
  return async dispatch => {
    try {
      const res = await fetch(`http://localhost:3000/tasks/${cardId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(updatedInfo)
      })
      const taskUpdated = await res.json()
      console.log('updated task', taskUpdated)
      dispatch(getListsByBoardId(boardId))
    }
    catch(error) {
      console.log('Update Task Card Error:', error)
    }
  }
}

export const deleteTask = (taskId, boardId) => {
  return async dispatch => {
    try {
      await fetch(`http://localhost:3000/tasks/${taskId}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      })
      dispatch(getListsByBoardId(boardId))
    }
    catch(error) {
      console.log('Delete Task Error:', error)
    }
  }
}

export const editListName = (listId, updatedInfo, boardId) => {
  return async dispatch => {
    try {
      const res = await fetch(`http://localhost:3000/lists/${listId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(updatedInfo)
      })
      const listUpdated = await res.json()
      console.log('updated list', listUpdated)
      dispatch(getListsByBoardId(boardId))
    }
    catch(error) {
      console.log('Update List Name Error:', error)
    }
  }
}

export const editListPosition = (listId, updatedInfo, boardId=null) => {
  return async dispatch => {
    try {
      const res = await fetch(`http://localhost:3000/lists/${listId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(updatedInfo)
      })
      if(boardId) {
        dispatch(getListsByBoardId(boardId))
      }
    }
    catch(error) {
      console.log('Update List Position Error:', error)
    }
  }
}

export const deleteList = (listId, boardId) => {
  return async dispatch => {
    try {
      await fetch(`http://localhost:3000/lists/${listId}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      })
      dispatch(getListsByBoardId(boardId))
    }
    catch(error) {
      console.log('Delete List Error:', error)
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
