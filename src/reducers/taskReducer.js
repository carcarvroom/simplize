const initialState = {
  boards: [],
  lists: []
}

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_TASK_BOARDS":
      return {
        ...state,
        boards: [...action.payload]
      }
    case "LOAD_LISTS":
      return {
        ...state,
        lists: [...action.payload]
      }
    default: 
      return state
  }
}

export default taskReducer

