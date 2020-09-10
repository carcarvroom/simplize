import React, {useState} from 'react'
import { connect } from 'react-redux'
import { editIssueboard, deleteIssueboard } from '../../actions'
import IssueCard from './issueCard'
import AddIssueCardForm from './AddIssueCardForm'
import Textarea from 'react-textarea-autosize'
import {
  Card,
  CardHeader,
  CardFooter,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Row,
  Button,
  Modal,
  UncontrolledTooltip
} from "reactstrap"

const IssueTable = ({board, editIssueboar, deleteIssueboard}) => {
  const [addIssueModalOpen, toggleAddIssueModal] = useState(false)
  const [editBoardOpen, toggleEditBoardOpen] = useState(false)
  const [boardName, setBoardName] = useState(board.name)

  const handleEditBoardSubmit = () => {
    editIssueboard(board.id, {name: boardName})
  }

  const handleInputChange = e => {
    setBoardName(e.target.value)
  }

  const handleDeleteBoard = () => {
    deleteIssueboard(board.id)
  }

  return (
    <Row className="mt-4">
      <div className="col">
        <Card className="shadow">
          { !editBoardOpen ?
              <CardHeader className="border-2"
                onClick={() => {
                toggleEditBoardOpen(true)
                setBoardName(board.name)
              }}
              >
                <h3 className="mb-0">{board.name}</h3>
              </CardHeader>
            :
              <div>
                <Textarea 
                value={boardName}
                autoFocus 
                onBlur={() => toggleEditBoardOpen(false)}
                name="name"
                onChange={e => handleInputChange(e)}
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
                onMouseDown={() => handleEditBoardSubmit()}
                variant='contained' >
                  Edit Board Name
                </Button>
                <Button
                  onClick={() => toggleEditBoardOpen(false)}
                  size="sm" type="button"
                >
                  X
                </Button>
                <Button
                  className="float-right"
                  color="danger"
                  onMouseDown={() => handleDeleteBoard()}
                  size="sm" type="button"
                >
                  Delete Issue Board
                </Button>
              </div>
            }
          <Table className="align-items-center table-flush" responsive>
            <thead className="thead-light">
              <tr>
                <th scope="col">Issues</th>
                <th scope="col" id="UCTT-Priority">Priority</th>
                <th scope="col" id="UCTT-Status">Status</th>
                <th scope="col">Assigned to</th>
                <th scope="col">More</th>
                <UncontrolledTooltip
                  delay={0}
                  data-placement="top"
                  target="UCTT-Priority"
                >
                  High / Medium / Low
                </UncontrolledTooltip>
                <UncontrolledTooltip
                  delay={0}
                  data-placement="top"
                  target="UCTT-Status"
                >
                  Resolved / In Review / Pending
                </UncontrolledTooltip>
              </tr>
            </thead>
            <tbody>
              {board.tasks.map(issue => {
                return <IssueCard key={issue.id} issue={issue} boardId={board.id}/>
              })}
            </tbody>
          </Table>
          <CardFooter className="py-4">
            <Col>
              <div className="col text-left">
                <Button
                  color="primary"
                  onClick={() => {addIssueModalOpen ? toggleAddIssueModal(false) : toggleAddIssueModal(true)}}
                  size="sm"
                >
                  Add Issue
                </Button>
              </div>
              <nav aria-label="...">
                <Pagination
                  className="pagination justify-content-end mb-0"
                  listClassName="justify-content-end mb-0"
                >
                  <PaginationItem className="disabled">
                    <PaginationLink
                      onClick={e => e.preventDefault()}
                      tabIndex="-1"
                    >
                      <i className="fas fa-angle-left" />
                      <span className="sr-only">Previous</span>
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem className="active">
                    <PaginationLink
                      onClick={e => e.preventDefault()}
                    >
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fas fa-angle-right" />
                      <span className="sr-only">Next</span>
                    </PaginationLink>
                  </PaginationItem>
                </Pagination>
              </nav>
            </Col>
          </CardFooter>
        </Card>
      </div>
      <Modal
        className="modal-dialog-centered"
        isOpen={addIssueModalOpen}
        toggle={() => addIssueModalOpen ? toggleAddIssueModal(false) : toggleAddIssueModal(true)}
      >
        <AddIssueCardForm boardId={board.id} addIssueModalOpen={addIssueModalOpen} toggleAddIssueModal={toggleAddIssueModal}/>
      </Modal>

    </Row>

  )
}

export default connect(null, {editIssueboard, deleteIssueboard})(IssueTable)