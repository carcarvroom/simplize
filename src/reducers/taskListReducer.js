import { CONSTANTS } from '../actions'

let listId = 3
let cardId = 7

const initialState = [
    {
        title: 'To do',
        id: `list-${0}`,
        cards: [
            {
                id: `card-${0}`,
                text: "test 1"
            },
            {
                id: `card-${2}`,
                text: "test 2"
            }
        ]
    },
    {
        title: 'In progress',
        id: `list-${1}`,
        cards: [
            {
                id: `card-${3}`,
                text: "test 1"
            },
            {
                id: `card-${4}`,
                text: "test 2"
            }
        ]
    },
    {
        title: 'Done',
        id: `list-${2}`,
        cards: [
            {
                id: `card-${5}`,
                text: "test 1"
            },
            {
                id: `card-${6}`,
                text: "test 2"
            }
        ]
    }
]

const taskListReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.ADD_LIST:
            const newList = {
                    title: action.payload,
                    id: `list-${listId}`,
                    cards: []
            }
            listId += 1
            return [...state, newList]

        case CONSTANTS.ADD_CARD:
            const newCard = {
                text: action.payload.text,
                id: `card-${cardId}`
            }
            cardId += 1
            const newState = state.map(list => {
                if(list.id === action.payload.listId) {
                    return {
                        ...list,
                        cards: [...list.cards, newCard]
                    }
                } else {
                    return list
                }
            })
            return newState

        default: 
            return state
    }
}

export default taskListReducer