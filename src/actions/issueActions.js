const loadBoards = (payload) => ({type: "GET_ISSUE_BOARDS", payload})

export const getIssueBoards = userId => {
  return async dispatch => {
    try {
      const res = await fetch(`http://localhost:3000/my_boards/${userId}/issueboard`, {headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}})
      const issueBoards = await res.json()
      console.log('fetched issueboards', issueBoards)
      dispatch(loadBoards(issueBoards))
    }
    catch(error) {
      console.log('Issue Board Fetch Error:', error)
    }
  }
}