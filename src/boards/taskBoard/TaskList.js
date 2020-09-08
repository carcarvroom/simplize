import React from 'react'
import TaskCard from './TaskCard'
import AddCardButton from './AddButton'
import { Draggable, Droppable } from 'react-beautiful-dnd'

const TaskList = ({title, cards, listId, index}) => {
    console.log(cards)
    return (
      <>
        <Draggable draggableId={String(listId)} index={index}>
            {provided => (
                <div {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
                <Droppable droppableId={String(listId)}>
                    {provided => (
                        <div {...provided.droppableProps} ref={provided.innerRef} style={styles.container} >
                        <h1>{title}</h1>
                        {cards.map((card, index) => {
                            return <TaskCard key={card.id} index={index} cardId={card.id} text={card.text}/>
                        })}
                        <AddCardButton listId={listId}/>
                        {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                </div>
            )}
        </Draggable>
        </>
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