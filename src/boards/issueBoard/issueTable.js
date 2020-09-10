import React, {useState} from 'react'
import IssueCard from './issueCard'
import AddIssueCardForm from './AddIssueCardForm'

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

const IssueTable = ({board}) => {
  const [addIssueModalOpen, toggleAddIssueModal] = useState(false)
  return (
    <Row className="mt-4">
      <div className="col">
        <Card className="shadow">
          <CardHeader className="border-0">
            <h3 className="mb-0">{board.name}</h3>
          </CardHeader>
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

export default (IssueTable)