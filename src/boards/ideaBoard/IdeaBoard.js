import React from "react";
import { connect } from 'react-redux'
import { getIdeaBoards } from '../../actions'

import {
  Container,
  Button
} from "reactstrap";

import Header from "../../components/headers/Header"
import IdeaTable from "./IdeaTable"

class IdeaBoard extends React.Component {
  componentDidMount() {
    this.props.getIdeaBoards(localStorage.getItem('userId'))
  }

  render() {
    const {boards} = this.props
    console.log(boards)
    return (
      <>
        <Header />
        <Container className="mt--7" fluid>
        <Button className="mt--5 float-right" color="secondary" size="sm" type="button" onClick={() => this.toggleAddTableModal('addTableOpen')}>
          Create new board
        </Button>
            {boards.map(board => {
              return  <IdeaTable key={board.id} board={board}/>
            })}
        </Container>
      </>
    )
  }
}

const mapStateToProps = state => ({
  boards: state.ideaReducer
})

export default connect(mapStateToProps, {getIdeaBoards})(IdeaBoard)
