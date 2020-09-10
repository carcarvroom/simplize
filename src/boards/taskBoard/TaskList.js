import React, {useState} from 'react'
import TaskCard from './TaskCard'
import { connect } from 'react-redux'
import { editListName, deleteList } from '../../actions'
import AddCard from './AddCard'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import Textarea from 'react-textarea-autosize'

import 
{ Col,
  Button,
  Card
} from "reactstrap"

const TaskList = ({boardId, list, index, editListName, deleteList}) => {
  const [editList, setEditList] = useState(false)
  const [listName, setListName] = useState(list.name)

  const handleEditList = () => {
    editListName(list.id, {name: listName}, boardId)
  }

  const handleDeleteList = () => {
    deleteList(list.id, boardId)
  }

  const handleInputChange = e => {
    setListName(e.target.value)
  }

  return (
    <Draggable draggableId={String(list.id)} index={index}>
      {(provided) => (
        <Col>
          <div>
            <div {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps} >
              <Droppable droppableId={String(list.id)}>
                {(provided) => (
                  <div {...provided.droppableProps}
                  ref={provided.innerRef}
                  >
                    { !editList ?
                      <h1 onClick={() => {
                        setEditList(true)
                        setListName(list.name)
                      }}>
                        {list.name}
                      </h1>
                    :
                      <div>
                        <Card style = {{
                          overflow: 'visible',
                          minHeight: 80,
                          minWidth: 250,
                          }}>
                          <Textarea 
                          value={listName}
                          autoFocus 
                          onBlur={() => setEditList(false)}
                          name="name"
                          onChange={e => handleInputChange(e)}
                          style={{
                            resize: 'none',
                            width: '100%',
                            overflow: 'hidden',
                            outline: 'none',
                            border: 'none'
                          }}
                          />
                        </Card>
                        <Button 
                        color="primary"
                        size="sm" type="button"
                        onMouseDown={() => handleEditList()}
                        variant='contained' >
                          Edit List Name
                        </Button>
                        <Button
                          className="float-right"
                          color="danger"
                          onMouseDown={() => handleDeleteList()}
                          size="sm" type="button"
                        >
                          Delete List
                        </Button>
                      </div>
                    }
                    {list.tasks.map((card, index) => {
                      return <TaskCard key={card.id} index={index} card={card} boardId={boardId}/>
                    })}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              <AddCard listId={list.id} nextCard={list.tasks.length} boardId={boardId}/>
            </div>
          </div>
        </Col>
      )}
    </Draggable>
  )
}

export default connect(null, {editListName, deleteList})(TaskList)