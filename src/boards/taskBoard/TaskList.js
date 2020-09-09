import React from 'react'
import TaskCard from './TaskCard'
import AddCard from './AddCard'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import {Col
} from "reactstrap"

const TaskList = ({boardId, list, index}) => {

  return (
    <Draggable draggableId={String(list.id)} index={index}>
      {provided => (
        <Col>
          <div {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
            <Droppable droppableId={String(list.id)}>
              {provided => (
                <div {...provided.droppableProps} ref={provided.innerRef}  >
                  <h1>{list.name}</h1>
                  {list.tasks.map((card, index) => {
                    return <TaskCard key={card.id} index={index} card={card}/>
                  })}
                  <AddCard listId={list.id} nextCard={list.tasks.length} boardId={boardId}/>
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