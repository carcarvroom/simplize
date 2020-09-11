import React, {useState} from 'react'
import { connect } from 'react-redux'
import { editTaskCard, deleteTask } from '../../actions'
import Typography from "@material-ui/core/Typography";
import Textarea from 'react-textarea-autosize'
import { Draggable } from 'react-beautiful-dnd'
import {
  Card,
  CardBody,
  Button
} from "reactstrap"

const TaskCard = ({card, index, editTaskCard, deleteTask, boardId}) => {
  const [editTask, setEditTask] = useState(false)
  const [cardDescription, setCardDescription] = useState(card.description)

  const handleEditTask = () => {
    editTaskCard(card.id, {description: cardDescription}, boardId)
  }

  const handleDeleteTask = () => {
    deleteTask(card.id, boardId)
  }

  const handleInputChange = e => {
    setCardDescription(e.target.value)
    console.log(cardDescription)
  }

  return (
    <>
      <Draggable draggableId={String(card.id)} index={index}>
        {provided => (
          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            <Card className="mb-3">
              <CardBody
                style={{backgroundColor: "lemonchiffon"}}
                onClick={() => setEditTask(true)}
              >
                {!editTask ?
                  <Typography onClick={() => {
                    setEditTask(true)
                    setCardDescription(card.description)
                  }} gutterBottom>{card.description}</Typography>
                  :
                  <div>
                    <Card style = {{
                    backgroundColor: "lemonchiffon",
                    overflow: 'visible',
                    minHeight: 80,
                    minWidth: 250,
                    }}>
                      <Textarea 
                      value = {cardDescription}
                      autoFocus 
                      onBlur={() => setEditTask(false)}
                      name="description"
                      onChange={e => handleInputChange(e)}
                      style={{
                        backgroundColor: "lemonchiffon",
                        resize: 'none',
                        width: '100%',
                        overflow: 'hidden',
                        outline: 'none',
                        border: 'none'
                      }}
                      />
                    </Card>
                    <div>
                      <Button 
                      color="primary"
                      size="sm" type="button"
                      onMouseDown={() => handleEditTask()}
                      variant='contained' >
                        Edit card
                      </Button>
                      <Button 
                      color="danger"
                      size="sm" type="button"
                      onMouseDown={() => handleDeleteTask()}
                      variant='contained' >
                        Delete
                      </Button>
                    </div>
                  </div>
                }
              </CardBody>
            </Card>
            {provided.placeholder}
          </div>
        )}
      </Draggable>
    </>
  )
}

export default connect(null, {editTaskCard, deleteTask})(TaskCard)