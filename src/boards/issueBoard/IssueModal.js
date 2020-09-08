import React from 'react'

import {
  CardBody,
  CardHeader,
  Col,
  Row,
  Button,
} from "reactstrap"

class IssueModal extends React.Component {
  render() {
    const {issueModalOpen, toggleIssueModal, issue} = this.props
    return (
      <> 
        <CardHeader className="bg-white border-0">
          <Row className="align-items-center">
            <Col xs="8">
              <h3 className="mb-0">{issue.title}</h3>
            </Col>
            <Col className="text-right" xs="4">
              <Button
                color="primary"
                onClick={() => issueModalOpen ? toggleIssueModal(false) : toggleIssueModal(true)}
                size="sm"
              >
                X
              </Button>
            </Col>
          </Row>
        </CardHeader>
        <CardBody>
            <div className="pl-lg-4">
              <label className="form-control-label">Details</label>
              <p>{issue.description}</p>
            </div>
            <div className="pl-lg-4">
              <label className="form-control-label">Priority</label>
              <p>{issue.priority}</p>
            </div>
            <div className="pl-lg-4">
              <label className="form-control-label">Status</label>
              <p>{issue.status}</p>
            </div>
            <div className="modal-footer">
              <Button
                color="secondary"
                data-dismiss="modal"
                type="button"
                onClick={() => issueModalOpen ? toggleIssueModal(false) : toggleIssueModal(true)}
              >
                Close
              </Button>
              <Button color="primary" type="submit">
                Edit Issue
              </Button>
            </div>
        </CardBody>
      </>
    )
  }
}

export default (IssueModal)