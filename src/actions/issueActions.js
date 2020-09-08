const loadBoards = (payload) => ({type: "LOAD_ISSUE_BOARDS", payload})

export const getIssueBoards = userId => {
  return async dispatch => {
    try {
      const res = await fetch(`http://localhost:3000/my_boards/${userId}/issueboard`, {headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}})
      const issueBoards = await res.json()
      // console.log('fetched issueboards', issueBoards)
      dispatch(loadBoards(issueBoards))
    }
    catch(error) {
      console.log('Issue Board Fetch Error:', error)
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
        console.log('created new issue!', newIssue)
        dispatch(getIssueBoards(parseInt(localStorage.getItem('userId'))))
      }
    }
    catch(error) {
      console.log('Create Issue Error:', error)
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
        console.log('created new issueboard!', newIssueboard)
        dispatch(getIssueBoards(parseInt(localStorage.getItem('userId'))))
      }
    }
    catch(error) {
      console.log('Create Issueboard Error:', error)
    }
  }
}