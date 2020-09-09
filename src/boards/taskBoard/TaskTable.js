import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getListsByBoardId, sort } from '../../actions'
import TaskList from './TaskList'
import AddList from './AddList'

import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import {
  Col,
  Row,
  Card,
  CardHeader,
  CardBody
} from "reactstrap"

class TaskTable extends Component {
  componentDidMount() {
    this.props.getListsByBoardId(this.props.board.id)
  }

  onDragEnd = (result) => {
  const {destination, source, draggableId, type} = result

  if(!destination) {
    return
  }

  this.props.dispatch(sort(
    source.droppableId,
    destination.droppableId,
    source.index,
    destination.index,
    draggableId,
    type
  ))
  }

  render() {
    const { board, lists } = this.props
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId='all-lists' direction='horizontal' type='list'>
          {provided => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <Row>
                <div className="col">
                  <Card className="shadow">
                    <CardHeader className="border-0">
                      <h3 className="mb-0">{board.name}</h3>
                      </CardHeader>
                      <CardBody>
                        <Row>
                          {lists.map((list, index) => {
                            return <TaskList key={list.id} index={index} list={list} boardId={board.id}/>
                          })}
                        <Col><AddList boardId={board.id} nextList={lists.length}/></Col>
                      </Row>
                      </CardBody>
                  </Card>
                </div>
              </Row>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    )
  }
}

const mapStateToProps = state => ({
  lists: state.taskReducer.lists
})

export default connect(mapStateToProps, {getListsByBoardId})(TaskTable)