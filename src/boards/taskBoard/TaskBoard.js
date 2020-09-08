import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from "../../components/headers/Header"
import { getTaskBoards } from '../../actions'
import TaskTable from './TaskTable'

import {
  Container,
} from "reactstrap"

class TaskBoard extends Component {
  componentDidMount() {
    this.props.getTaskBoards(localStorage.getItem('userId'))
  }

  render() {
    const { boards } = this.props
    return (
      <>
      <Header />
      <Container className="mt--7 border-0" fluid>
        {boards.map(board => {
          return <TaskTable key={board.id} board={board}/>
        })}
      </Container>
      </>
    )
  }
}

const mapStateToProps = state => ({
  boards: state.taskReducer.boards
})

export default connect(mapStateToProps, {getTaskBoards})(TaskBoard)