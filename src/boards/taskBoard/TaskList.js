import React from 'react'
import TaskCard from './TaskCard'
import AddCardButton from './AddButton'
import { Droppable } from 'react-beautiful-dnd'

const TaskList = ({title, cards, listId}) => {
    console.log(cards)
    return (
        <Droppable droppableId={String(listId)}>
            {provided => (
                <div {...provided.droppableProps} ref={provided.innerRef} style={styles.container}>
                <h1>{title}</h1>
                {cards.map((card, index) => {
                    return <TaskCard key={card.id} index={index} cardId={card.id} text={card.text}/>
                })}
                <AddCardButton listId={listId}/>
                {provided.placeholder}
                </div>
            )}
        </Droppable>
    )
}

const styles = {
    container: {
        backgroundColor: "#ccc",
        borderRadius: 3,
        width: 300,
        padding: 8,
        marginRight: 8
    }
}

export default TaskList