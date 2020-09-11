const loadBoards = (payload) => ({type: "LOAD_IDEA_BOARDS", payload})

export const getIdeaBoards = userId => {
  return async dispatch => {
    try {
      const res = await fetch(`http://localhost:3000/my_boards/${userId}/ideaboard`, {headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}})
      const ideaBoards = await res.json()
      console.log('fetched ideaBoards', ideaBoards)
      dispatch(loadBoards(ideaBoards))
    }
    catch(error) {
      console.log('Idea Board Fetch Error:', error)
    }
  }
}

export const createIdea = idea => {
  return async dispatch => {
    try {
      const res = await fetch(`http://localhost:3000/tasks`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(idea)
      })
      const newIdea = await res.json()
      if(newIdea.error) {
          alert(newIdea.error)
      } else {
        console.log('created new idea!', newIdea)
        dispatch(getIdeaBoards(parseInt(localStorage.getItem('userId'))))
      }
    }
    catch(error) {
      console.log('Create Issue Error:', error)
    }
  }
}

export const editIdeaCard = (cardId, updatedInfo) => {
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
      const ideaUpdated = await res.json()
      dispatch(getIdeaBoards(parseInt(localStorage.getItem('userId'))))
    }
    catch(error) {
      console.log('Update Task Card Error:', error)
    }
  }
}

export const editIdeaPosition = (ideaId, updatedInfo, boardId=null) => {
  return async dispatch => {
    try {
      const res = await fetch(`http://localhost:3000/tasks/${ideaId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(updatedInfo)
      })
      const ideaUpdated = await res.json()
      if(boardId) {
        dispatch(getIdeaBoards(parseInt(localStorage.getItem('userId'))))
      }
    }
    catch(error) {
      console.log('Update Task Card Error:', error)
    }
  }
}

export const deleteIdea = (taskId) => {
  return async dispatch => {
    try {
      await fetch(`http://localhost:3000/tasks/${taskId}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      })
      dispatch(getIdeaBoards(parseInt(localStorage.getItem('userId'))))
    }
    catch(error) {
      console.log('Delete Issue Error:', error)
    }
  }
}

export const createIdeaboard = ideaboard => {
  return async dispatch => {
    try {
      const res = await fetch(`http://localhost:3000/boards`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(ideaboard)
      })
      const newideaboard = await res.json()
      if(newideaboard.error) {
          alert(newideaboard.error)
      } else {
        dispatch(getIdeaBoards(parseInt(localStorage.getItem('userId'))))
      }
    }
    catch(error) {
      console.log('Create Ideaboard Error:', error)
    }
  }
}

export const editIdeaboard = (boardId, updatedInfo) => {
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
      const ideaboardUpdated = await res.json()
      dispatch(getIdeaBoards(parseInt(localStorage.getItem('userId'))))
    }
    catch(error) {
      console.log('Update Ideaboard Error:', error)
    }
  }
}

export const deleteIdeaboard = boardId => {
  return async dispatch => {
    try {
      await fetch(`http://localhost:3000/boards/${boardId}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      })
      dispatch(getIdeaBoards(parseInt(localStorage.getItem('userId'))))
    }
    catch(error) {
      console.log('Delete Ideaboard Error:', error)
    }
  }
}