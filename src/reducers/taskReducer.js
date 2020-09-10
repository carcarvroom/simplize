const initialState = {
  boards: [],
  lists: []
  // lists: [
  //   {
  //     title: 'To do',
  //     id: `list-${0}`,
  //     cards: [
  //       {
  //         id: `card-${0}`,
  //         text: "test 1"
  //       },
  //       {
  //         id: `card-${2}`,
  //         text: "test 2"
  //       }
  //     ]
  //   }
  // ]
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
    // case CONSTANTS.DRAGGED: 
    //   const {droppableIdStart,
    //     droppableIdEnd,
    //     droppableIndexStart,
    //     droppableIndexEnd,
    //     // draggableId,
    //     type
    //   } = action.payload

    //   const newState = [...state]
    

    //   if(droppableIdStart !== droppableIdEnd) {
    //     const listStart = state.find(list => droppableIdStart === list.id)
    //     const card = listStart.cards.splice(droppableIndexStart, 1)
    //     const listEnd = state.find(list => droppableIdEnd === list.id)
    //     listEnd.cards.splice(droppableIndexEnd, 0, ...card)
    //   }
    //   return newState

    default: 
      return state
  }
}

export default taskReducer

