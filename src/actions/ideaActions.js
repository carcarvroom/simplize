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

export const deleteIdea = (taskId, boardId) => {
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

export const createIssueboard = issueboard => {
  return async dispatch => {
    try {
      const res = await fetch(`http://localhost:3000/boards`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(issueboard)
      })
      const newIssueboard = await res.json()
      if(newIssueboard.error) {
          alert(newIssueboard.error)
      } else {
        console.log('created new issueboard!', newIssueboard)
        dispatch(getIdeaBoards(parseInt(localStorage.getItem('userId'))))
      }
    }
    catch(error) {
      console.log('Create Issueboard Error:', error)
    }
  }
}