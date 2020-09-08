import React, { Component } from 'react'
import { connect } from 'react-redux'
import TaskList from './TaskList'
import AddListButton from './AddButton'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { sort } from '../../actions'
import Header from "../../components/headers/Header"
import {
  Container,
  Col,
  Row
} from "reactstrap"

class TaskBoard extends Component {
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
  const { lists } = this.props
  return (
    <>
    <Header />
    <Container className="mt--7 border-0" fluid>
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId='all-lists' direction='horizontal' type='list'>
          {provided => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <Row>
                {lists.map((list, index) => {
                return <TaskList key={list.id} index={index} listId={list.id} title={list.title} cards={list.cards} />
                })}
                <Col><AddListButton list/></Col>
              </Row>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Container>
    </>
  )
  }
}

const mapStateToProps = state => ({
  lists: state.taskListReducer
})

export default connect(mapStateToProps)(TaskBoard)