const initialState = {
  loggedIn: false,
  user: {}
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
        user: {}
      }
    default: return state
  }
}

export default userReducer