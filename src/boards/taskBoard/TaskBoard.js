import React, { Component } from 'react'
import { connect } from 'react-redux'
import TaskList from './TaskList'
import AddListButton from './AddButton'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { sort } from '../../actions'
import Header from "../../components/headers/Header"
import {Container} from "reactstrap"

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
        <Container className="mt--7" fluid>
          <div>
          <DragDropContext onDragEnd={this.onDragEnd}>
            {/* <div style={styles.listsContainer}> */}
            <div>
              <Droppable droppableId='all-lists' direction='horizontal' type='list'>
                {provided => (
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                  {lists.map((list, index) => {
                    return <TaskList key={list.id} index={index} listId={list.id} title={list.title} cards={list.cards} />
                  })}
                  <AddListButton list/>
                  </div>
                )}
              </Droppable>
            </div>
          </DragDropContext>
          </div>
        </Container>
      </>
    )
  }
}

// const styles = {
//   listsContainer: {
//     display: 'flex',
//     flexDirection: 'row',
//     marginRight: 8
//   }
// }
const mapStateToProps = state => ({
  lists: state.taskListReducer
})

export default connect(mapStateToProps)(TaskBoard)