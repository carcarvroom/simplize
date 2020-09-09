import React from 'react'
import {
  CardBody,
  CardHeader,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Input,
  DropdownItem,
  DropdownMenu,
  UncontrolledDropdown,
  DropdownToggle,
} from "reactstrap"

class EditIssueModal extends React.Component {
  state = {
    editIssue: {
    }
  }

  handleOnChange = e => {
    e.persist()
    this.setState({
      editIssue: {
        ...this.state.editIssue,
        [e.target.name]: e.target.value,
        priority: this.state.selectedPriority
      }
    })
  }

  handleSelectedPriority = (e, option) => {
    e.persist()
    this.setState({
      editIssue: {
        ...this.state.editIssue,
        priority: option
      }
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state.editIssue)
    // this.props.createIssue(this.state.editIssue)
    // this.setState({editIssue: {}})
    // this.props.toggleEditEdit(false)
    // console.log('after', this.state)
  }

  render() {
    const {editIssueModalOpen, toggleEditIssueModal, issue} = this.props
    return (
      <> 
        <CardHeader className="bg-white border-0">
          <Row className="align-items-center">
            <Col xs="8">
              <h3 className="mb-0">{issue.title}</h3>
            </Col>
            <Col className="text-right" xs="4">
              <Button
                onClick={() => editIssueModalOpen ? toggleEditIssueModal(false) : toggleEditIssueModal(true)}
                close
              />
            </Col>
          </Row>
        </CardHeader>
        <CardBody>
          <Form onSubmit={e => {this.handleSubmit(e)}}>
            <div className="pl-lg-4">
              <Row>
                <Col lg="6">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="input-title"
                    >
                      Title
                    </label>
                    <Input
                      className="form-control-alternative"
                      id="input-title"
                      placeholder={issue.title}
                      type="text"
                      name="title"
                      onChange={this.handleOnChange}
                    />
                  </FormGroup>
                </Col>
              </Row>
            </div>
            <div className="pl-lg-4">
              <FormGroup>
                <label className="form-control-label">Details</label>
                <Input
                  className="form-control-alternative"
                  placeholder={issue.description}
                  rows="4"
                  type="textarea"
                  name="description"
                  onChange={this.handleOnChange}
                />
              </FormGroup>
            </div>
            <div className="pl-lg-4">
              <Row>
              <Col lg="6">
                <FormGroup>
                  <label className="form-control-label">Priority</label>
                  <div className="custom-control custom-radio mb-3">
                    <input
                      className="custom-control-input"
                      id="radio1"
                      name="priority"
                      type="radio"
                      onClick={e => this.handleSelectedPriority(e, 'High')}
                    />
                    <label className="custom-control-label" htmlFor="radio1">
                    High
                    </label>
                  </div>
                  <div className="custom-control custom-radio mb-3">
                    <input
                      className="custom-control-input"
                      id="radio2"
                      name="priority"
                      type="radio"
                      onClick={e => this.handleSelectedPriority(e, 'Medium')}
                    />
                    <label className="custom-control-label" htmlFor="radio2">
                      Medium
                    </label>
                  </div>
                  <div className="custom-control custom-radio mb-3">
                    <input
                      className="custom-control-input"
                      id="radio3"
                      name="priority"
                      type="radio"
                      onClick={e => this.handleSelectedPriority(e, 'Low')}
                    />
                    <label className="custom-control-label" htmlFor="radio3">
                      Low
                    </label>
                  </div>
                </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label">Status</label>
                    <div>
                    <UncontrolledDropdown>
                      <DropdownToggle caret>
                        {issue.status}
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>
                          <span>Pending</span>
                        </DropdownItem>
                        <DropdownItem>
                          <span>In Review</span>
                        </DropdownItem>
                        <DropdownItem>
                          <span>Resolved</span>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                    </div>
                  </FormGroup>
                </Col>
              </Row>
            </div>
            <div className="modal-footer">
              <Button
                color="secondary"
                data-dismiss="modal"
                type="button"
                onClick={() => editIssueModalOpen ? toggleEditIssueModal(false) : toggleEditIssueModal(true)}
              >
                Close
              </Button>
              <Button color="primary" type="submit">
                Edit Issue
              </Button>
            </div>
          </Form>
        </CardBody>
      </>
    )
  }
}

export default (EditIssueModal)