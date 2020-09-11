import React, {useState} from "react";
import { connect } from 'react-redux'
import { createIdea, editIdeaboard, deleteIdeaboard } from '../../actions'
import IdeaCard from './IdeaCard'
import Textarea from 'react-textarea-autosize'
import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap
} from "react-grid-dnd";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Col,
  Row
} from "reactstrap";

const IdeaTable = ({board, createIdea, editIdeaboard, deleteIdeaboard }) => {
  const [editBoardOpen, toggleEditBoardOpen] = useState(false)
  const [boardName, setBoardName] = useState(board.name)


  const randomColor = () => {
    const colors = ["#ff7eb9", "#ff65a3", "#7afcff", "#feff9c", "#fff740"]
    const random = Math.floor(Math.random() * colors.length)
    return colors[random]
  }

  const handleEditBoardSubmit = () => {
    editIdeaboard(board.id, {name: boardName})
  }

  const handleInputChange = e => {
    setBoardName(e.target.value)
  }

  const handleDeleteBoard = () => {    
    deleteIdeaboard(board.id)
  }

  const handleAddIdeaCard = () => {
    createIdea({
      description: "New note",
      board_id: board.id,
      title: `${board.tasks.length+1}`,
      user_id: parseInt(localStorage.getItem('userId')),
      status: randomColor()
    })
  }

  const onChange = (sourceId, sourceIndex, targetIndex, targetId) => {
    // const nextState = swap(items, sourceIndex, targetIndex);
    // setItems(nextState);
  }

  return (
    <>
      <Col className="mb-5 mb-xl-0">
        <Card className="mb-3" style={{backgroundColor: "#9c6f3e"}}>
          { !editBoardOpen ?
            <CardHeader className="bg-transparent border-2"
              onClick={() => {
              toggleEditBoardOpen(true)
              setBoardName(board.name)
              }}
            >
              <h6 className="text-uppercase text-light ls-1 mb-1">
                Ideaboard
              </h6>
              <h2 className="text-white mb-0">{board.name}</h2>
            </CardHeader>
            :
            <div>
              <Textarea 
              className="text-white mb-0"
              value={boardName}
              autoFocus 
              onBlur={() => toggleEditBoardOpen(false)}
              name="name"
              onChange={e => handleInputChange(e)}
              style={{
                backgroundColor: "#9c6f3e",
                resize: 'none',
                width: '100%',
                overflow: 'hidden',
                outline: 'none',
                border: 'none'
              }}
              />
              <Button 
              color="primary"
              size="sm" type="button"
              onMouseDown={() => handleEditBoardSubmit()}
              variant='contained' >
                Edit Board Name
              </Button>
              <Button
                className="float-right"
                color="danger"
                onMouseDown={() => handleDeleteBoard()}
                size="sm" type="button"
              >
                Delete Idea Board
              </Button>
            </div>
          }
          <CardBody style={{height: "500px"}}>
            <Row>
              <Col>
                <Button
                  className="float-right"
                  onClick={() => handleAddIdeaCard()}
                  size="sm"
                >
                <i className="fas fa-plus" />
                </Button>
              </Col>
            </Row>
          <GridContextProvider onChange={onChange}>
            <div>
              <GridDropZone
                id="items"
                boxesPerRow={4}
                rowHeight={160}
                style={{ height: "500px" }}
              >
                {board.tasks.map(idea => {
                  return <GridItem key={idea.id}>
                    <div
                      style={{
                        width: "100%",
                        height: "100%"
                      }}
                    >
                      <IdeaCard key={idea.id} idea={idea} boardId={board.id} />
                    </div>
                  </GridItem>
                })}
                </GridDropZone>
              </div>
            </GridContextProvider>
          </CardBody>
        </Card>
      </Col>
    </>
  )
}

export default connect(null, {createIdea, editIdeaboard, deleteIdeaboard })(IdeaTable)
