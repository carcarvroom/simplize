import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from "../../components/headers/Header"
import { getTaskBoards } from '../../actions'
import TaskTable from './TaskTable'
import AddBoardForm from './AddBoardForm'

import {
  Container,
  Button,
  Modal
} from "reactstrap"

class TaskBoard extends Component {
  componentDidMount() {
    this.props.getTaskBoards(localStorage.getItem('userId'))
  }

  state = {
    addBoardFormOpen: false
  }

  toggleAddBoardForm = state => {
    this.setState({
      [state]: !this.state[state]
    })
  }

  render() {
    const { boards } = this.props
    const { addBoardFormOpen } = this.state
    return (
      <>
      <Header />
      <Container className="mt--7 border-0" fluid>
        {boards.map(board => {
          return <TaskTable key={board.id} board={board}/>
        })}
      </Container>
      <Button className="mt-5" block color="secondary" size="sm" type="button" onClick={() => this.toggleAddBoardForm('addBoardFormOpen')}>
          Create new board
        </Button>
        <Modal 
        className="modal-dialog-centered"
        isOpen={addBoardFormOpen}
        toggle={() => this.toggleAddBoardForm('addBoardFormOpen')}
        >
          <AddBoardForm toggleAddBoardForm={this.toggleAddBoardForm}/>
      </Modal>
      </>
    )
  }
}

const mapStateToProps = state => ({
  boards: state.taskReducer.boards
})

export default connect(mapStateToProps, {getTaskBoards})(TaskBoard)