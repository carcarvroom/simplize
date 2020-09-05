const initialState = []

const teamReducer = (state = initialState, action) => {
  switch(action.type){
    case "GET_TEAMS":
      return [
        ...action.payload
      ]
    default: return state
  }
}

export default teamReducer