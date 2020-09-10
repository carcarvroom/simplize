import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getListsByBoardId, editTaskboard, deleteTaskboard, sort } from '../../actions'
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
    name: ''
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
    // console.log('results', result)

    // if(!destination) {
    //   return
    // }

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

export default connect(mapStateToProps, {getListsByBoardId, editTaskboard, deleteTaskboard})(TaskTable)