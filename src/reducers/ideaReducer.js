const initialState = []

const ideaReducer = (state = initialState, action) => {
  switch(action.type){
    case "LOAD_IDEA_BOARDS":
      return [
        ...action.payload
      ]
    default: return state
  }
}

export default ideaReducer