import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getListsByBoardId, editTaskboard, deleteTaskboard, editListPosition, sort } from '../../actions'
import TaskList from './TaskList'
import AddList from './AddList'

import Textarea from 'react-textarea-autosize'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import {
  Col,
  Row,
  Card,
  CardHeader,
  CardBody,
  Button
} from "reactstrap"

class TaskTable extends Component {
  componentDidMount() {
    this.props.getListsByBoardId(this.props.board.id)
  }

  state = {
    editTableOpen: false,
    name: '',
    updateLists: false
  }

  toggleEditTableOpen = state => {
    this.setState({
      [state]: !this.state[state]
    })
  }

  handleInputChange = e => {
    e.persist()
    this.setState({
      name: e.target.value
    })
  }

  handleEditTableSubmit = () => {
    this.props.editTaskboard(this.props.board.id, {name: this.state.name})
  }

  handleDeleteTable = () => {
    this.props.deleteTaskboard(this.props.board.id)
  }

  onDragEnd = (result) => {
    const {destination, source, draggableId, type} = result
    // console.log('original list order', this.props.lists)
    console.log('results', result)
    
    // if(!destination) {
      //   return
      // }
    if(type === 'list') {
      let newListOrder = [...this.props.lists]
      const list = newListOrder.splice(source.index, 1)
      newListOrder.splice(destination.index, 0, ...list)
      newListOrder.forEach((list, index) => {
        if(index == newListOrder.length-1) {
          this.props.editListPosition(list.id, {position: index+1}, this.props.board.id)
        } else {
          this.props.editListPosition(list.id, {position: index+1})
        }
      })
    }

    if(type !== 'list' && source.droppableId === destination.droppableId) {
      // const list = this.props..find(list => droppableIdStart === list.id)
      // const card = list.cards.splice(droppableIndexStart, 1)
      // list.cards.splice(droppableIndexEnd, 0, ...card)
      //find list id
      // update card list
      //dispatch action
    }

    //   if(droppableIdStart !== droppableIdEnd) {
    //     const listStart = state.find(list => droppableIdStart === list.id)
    //     const card = listStart.cards.splice(droppableIndexStart, 1)
    //     const listEnd = state.find(list => droppableIdEnd === list.id)
    //     listEnd.cards.splice(droppableIndexEnd, 0, ...card)
    //   }

    // this.props.dispatch(sort(
    //   source.droppableId,
    //   destination.droppableId,
    //   source.index,
    //   destination.index,
    //   draggableId,
    //   type
    // ))
  }

  render() {
    const { board, lists } = this.props
    const { editTableOpen, name } = this.state
    return (
      <DragDropContext onDragEnd={this.onDragEnd} >
        <Row className="mt-5">
          <div className="col">
            <Card className="shadow">
              { !editTableOpen ?
                <CardHeader className="border-2"
                onClick={() => {
                  this.toggleEditTableOpen("editTableOpen")
                  this.setState({name: board.name})
                }}
                >
                  <h3 className="mb-0">{board.name}</h3>
                </CardHeader>
              :
                <div>
                  <Textarea 
                  value={name}
                  autoFocus 
                  onBlur={() => this.toggleEditTableOpen("editTableOpen")}
                  name="name"
                  onChange={this.handleInputChange}
                  style={{
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
                  onMouseDown={this.handleEditTableSubmit}
                  variant='contained' >
                    Edit Board Name
                  </Button>
                  <Button
                    onClick={() => this.toggleEditTableOpen("editTableOpen")}
                    size="sm" type="button"
                  >
                    X
                  </Button>
                  <Button
                    className="float-right"
                    color="danger"
                    onMouseDown={this.handleDeleteTable}
                    size="sm" type="button"
                  >
                    Delete Taskboard
                  </Button>
                </div>
              }
              <CardBody>
                <Droppable droppableId='all-lists' direction='horizontal' type='list'>
                  {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                      <Row>
                        {lists.map((list, index) => {
                          return <TaskList key={list.id} index={index} list={list} boardId={board.id}/>
                        })}
                        {provided.placeholder}
                        <Col><AddList boardId={board.id} nextList={lists.length}/></Col>
                      </Row>
                    </div>
                  )}
                </Droppable>
              </CardBody>
            </Card>
          </div>
        </Row>
      </DragDropContext>
    )
  }
}

const mapStateToProps = state => ({
  lists: state.taskReducer.lists
})

export default connect(mapStateToProps, {getListsByBoardId, editTaskboard, deleteTaskboard, editListPosition})(TaskTable)