import React from 'react'
import { connect } from 'react-redux'
import { getIssueBoards } from '../../actions'
import {
  Container,
  Button,
  Modal
} from "reactstrap"
import Header from "../../components/headers/Header"
import IssueTable from './issueTable'
import AddTableForm from './AddTableForm'

class IssueBoard extends React.Component {
  state = {
    addTableOpen: false
  }

  componentDidMount() {
    this.props.getIssueBoards(localStorage.getItem('userId'))
  }

  toggleAddTableModal = state => {
    this.setState({[state]: !this.state[state]})
  }

  render() {
    const {boards} = this.props
    const {addTableOpen} = this.state
    return (
      <>
        <Header />
          <Container className="mt--8" fluid>
            <Button className="mt--5 float-right" color="secondary" size="sm" type="button" onClick={() => this.toggleAddTableModal('addTableOpen')}>
              Create new board
            </Button>
            {boards.map(board => {
              return <IssueTable key={board.id} board={board}/>
            })}
          </Container>
        <Modal 
        className="modal-dialog-centered"
        isOpen={addTableOpen}
        toggle={() => this.toggleAddTableModal('addTableOpen')}
        >
          <AddTableForm toggleAddTableModal={this.toggleAddTableModal}/>
      </Modal>
      </>
    );
  }
}

const mapStateToProps = state => ({
  boards: state.issueReducer
})

export default connect(mapStateToProps, {getIssueBoards})(IssueBoard)
