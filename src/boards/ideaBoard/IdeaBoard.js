import React from "react";
import { connect } from 'react-redux'
import { getIdeaBoards } from '../../actions'

import {
  Container,
  Button,
  Modal
} from "reactstrap";

import Header from "../../components/headers/Header"
import IdeaTable from "./IdeaTable"
import AddBoardForm from "./AddBoardForm"

class IdeaBoard extends React.Component {
  state = {
    addBoardFormOpen: false
  }
  componentDidMount() {
    this.props.getIdeaBoards(localStorage.getItem('userId'))
  }

  toggleAddBoardForm = state => {
    this.setState({[state]: !this.state[state]})
  }

  render() {
    const {boards} = this.props
    console.log(boards)
    return (
      <>
        <Header />
          <Container className="mt--7" fluid>
            <Button className="mt--5 float-right" color="secondary" size="sm" type="button" onClick={() => this.toggleAddBoardForm('addBoardFormOpen')}>
              Create new board
            </Button>
              {boards.map(board => {
                return  <IdeaTable key={board.id} board={board}/>
              })}
          </Container>
          <Modal 
          className="modal-dialog-centered"
          isOpen={this.state.addBoardFormOpen}
          toggle={() => this.toggleAddBoardForm('addBoardFormOpen')}
          >
            <AddBoardForm toggleAddBoardForm={this.toggleAddBoardForm}/>
          </Modal>
      </>
    )
  }
}

const mapStateToProps = state => ({
  boards: state.ideaReducer
})

export default connect(mapStateToProps, {getIdeaBoards})(IdeaBoard)
