import React from "react";
import { connect } from 'react-redux'
import { createIdea } from '../../actions'
import IdeaCard from './IdeaCard'
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Col
} from "reactstrap";

const IdeaTable = ({board}) => {

  const handleAddIdeaCard = () => {
    this.props.createIdea({
      description: "New note",
      board_id: board.id
    })
  }

  return (
    <>
      <Col className="mb-5 mb-xl-0">
        <Card style={{backgroundColor: "#9c6f3e"}}>
          <CardHeader className="bg-transparent border-2">
              <div>
                <h6 className="text-uppercase text-light ls-1 mb-1">
                  Ideaboard
                </h6>
                <h2 className="text-white mb-0">{board.name}</h2>
              </div>
          </CardHeader>
          <CardBody style={{height: "400px"}}>
            <Button
              className="float-right"
              onClick={() => handleAddIdeaCard()}
              size="sm"
            >
            <i className="fas fa-plus" />
            </Button>
            {board.tasks.map(idea => {
              return <IdeaCard idea={idea} />
            })}
          </CardBody>
        </Card>
      </Col>
    </>
  )
}

export default connect(null, {createIdea})(IdeaTable)
