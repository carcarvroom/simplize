import React from 'react'
import Typography from "@material-ui/core/Typography";
import { Draggable } from 'react-beautiful-dnd'
import {
  Card,
  CardBody
} from "reactstrap"

const TaskCard = ({card, index}) => {
  return (
    <>
      <Draggable draggableId={String(card.id)} index={index}>
        {provided => (
          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            <Card>
              <CardBody>
                <Typography gutterBottom>{card.description}</Typography>
              </CardBody>
            </Card>
          </div>
        )}
      </Draggable>
    </>
  )
}

export default TaskCard