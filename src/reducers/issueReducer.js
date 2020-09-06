const initialState = []

const issueReducer = (state = initialState, action) => {
  switch(action.type){
    case "GET_BOARDS":
      return [
        ...action.payload
      ]
    default: return state
  }
}

export default issueReducer