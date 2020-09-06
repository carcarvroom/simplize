import React from 'react'
import { connect } from 'react-redux'
import { getIssueBoards } from '../../actions'
import {
  Container
} from "reactstrap"
import Header from "../../components/headers/Header"
import IssueTable from './issueTable'

class IssueBoard extends React.Component {
  componentDidMount() {
    this.props.getIssueBoards(localStorage.getItem('userId'))
  }

  render() {
    const {boards} = this.props
    console.log('issueboards', boards)
    return (
      <>
        <Header />
        <Container className="mt--7" fluid>
          {boards.map(board => {
            return <IssueTable key={board.id} board={board}/>
          })}
        </Container>
      </>
    );
  }
}

const mapStateToProps = state => ({
  boards: state.issueReducer
})

export default connect(mapStateToProps, {getIssueBoards})(IssueBoard)
