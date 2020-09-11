const loadBoards = (payload) => ({type: "LOAD_ISSUE_BOARDS", payload})

const priorityOrder = ['High', 'Medium', 'Low']

export const getIssueBoards = userId => {
  return async dispatch => {
    try {
      const res = await fetch(`http://localhost:3000/my_boards/${userId}/issueboard`, {headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}})
      const issueBoards = await res.json()
      const sortedByIssue = issueBoards.map(board => {
        return {...board,
        tasks: board.tasks.sort((a, b) => {
          return priorityOrder.indexOf(a.priority) - priorityOrder.indexOf(b.priority)
        })}
      })
      dispatch(loadBoards(sortedByIssue))
    }
    catch(error) {
      console.log('Issue Board Fetch Error:', error)
    }
  }
}

export const editIssueboard = (boardId, updatedInfo) => {
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
      const issueboardUpdated = await res.json()
      dispatch(getIssueBoards(parseInt(localStorage.getItem('userId'))))
    }
    catch(error) {
      console.log('Update Issueboard Error:', error)
    }
  }
}

export const deleteIssueboard = boardId => {
  return async dispatch => {
    try {
      await fetch(`http://localhost:3000/boards/${boardId}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      })
      dispatch(getIssueBoards(parseInt(localStorage.getItem('userId'))))
    }
    catch(error) {
      console.log('Delete Issueboard Error:', error)
    }
  }
}

export const createIssue = issue => {
  return async dispatch => {
    try {
      const res = await fetch(`http://localhost:3000/tasks`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(issue)
      })
      const newIssue = await res.json()
      if(newIssue.error) {
          alert(newIssue.error)
      } else {
        dispatch(getIssueBoards(parseInt(localStorage.getItem('userId'))))
      }
    }
    catch(error) {
      console.log('Create Issue Error:', error)
    }
  }
}

export const editIssue = (issueId, updatedInfo, boardId) => {
  return async dispatch => {
    try {
      const res = await fetch(`http://localhost:3000/tasks/${issueId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(updatedInfo)
      })
      const issueUpdated = await res.json()
      dispatch(getIssueBoards(parseInt(localStorage.getItem('userId'))))
    }
    catch(error) {
      console.log('Update Issue Error:', error)
    }
  }
}

export const deleteIssue = (taskId, boardId) => {
  return async dispatch => {
    try {
      await fetch(`http://localhost:3000/tasks/${taskId}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      })
      dispatch(getIssueBoards(parseInt(localStorage.getItem('userId'))))
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
        dispatch(getIssueBoards(parseInt(localStorage.getItem('userId'))))
      }
    }
    catch(error) {
      console.log('Create Issueboard Error:', error)
    }
  }
}