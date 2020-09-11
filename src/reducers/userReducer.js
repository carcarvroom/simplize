const initialState = {
  loggedIn: false,
  user: {},
  activity: []
}

const userReducer = (state = initialState, action) => {
  switch(action.type){
    case "LOGIN":
      return {
        loggedIn: true,
        user: {...action.payload}
      }
    case "LOGOUT":
      localStorage.clear()
      return {
        loggedIn: false,
        user: {},
        userBoards: []
      }
    case "LOAD_ACTIVITY":
      return {
        ...state,
        activity: [...action.payload]
      }

    default: return state
  }
}

export default userReducer