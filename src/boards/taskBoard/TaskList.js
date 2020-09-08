import React from 'react'
import TaskCard from './TaskCard'
import AddCardButton from './AddButton'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import {Col
} from "reactstrap"

const TaskList = ({title, cards, listId, index}) => {
  console.log(cards)
  return (
    <Draggable draggableId={String(listId)} index={index}>
      {provided => (
        <Col >
          <div {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
            <Droppable droppableId={String(listId)}>
              {provided => (
                <div {...provided.droppableProps} ref={provided.innerRef}  >
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
        </Col>
      )}
    </Draggable>
  )
}

export default TaskList