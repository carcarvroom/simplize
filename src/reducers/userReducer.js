const initialState = {
  loggedIn: false,
  user: {},
  issueBoards: [],
  taskBoards: [],
  ideaBoards: []
}

const userReducer = (state = initialState, action) => {
  switch(action.type){
    case "LOGIN":
      let issueBoards = []
      let taskBoards = []
      let ideaBoards = []
      action.payload.boards.forEach(board =>{
        if(board.board_type === 'issueboard') {
          issueBoards.push(board)
        } else if(board.board_type === 'taskboard') {
          taskBoards.push(board)
        } else if(board.board_type === 'ideaboard') {
          ideaBoards.push(board)
        }
      })
      return {
        loggedIn: true,
        user: {...action.payload},
        issueBoards,
        taskBoards,
        ideaBoards
      }
    case "LOGOUT":
      localStorage.clear()
      return {
        loggedIn: false,
        user: {},
        userBoards: []
      }
    default: return state
  }
}

export default userReducer