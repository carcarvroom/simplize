const initialState = [
    {
        title: 'To do',
        id: 0,
        cards: [
            {
                id: 0,
                text: "test 1"
            },
            {
                id: 1,
                text: "test 2"
            }
        ]
    },
    {
        title: 'In progress',
        id: 1,
        cards: [
            {
                id: 0,
                text: "test 1"
            },
            {
                id: 1,
                text: "test 2"
            }
        ]
    },
    {
        title: 'Done',
        id: 2,
        cards: [
            {
                id: 0,
                text: "test 1"
            },
            {
                id: 1,
                text: "test 2"
            }
        ]
    }
]

const taskListReducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state
    }
}

export default taskListReducer