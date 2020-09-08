import React from 'react'
import { connect } from 'react-redux'
import { createIssue } from '../../actions'
import {
  CardBody,
  CardHeader,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Input
} from "reactstrap"

class AddIssueCardForm extends React.Component {
  state = {
    newIssue: {
      priority: "Low",
      resolved: false,
      status: "Pending",
      owner_id: parseInt(localStorage.getItem('userId')),
      board_id: this.props.boardId
    }
  }

  handleOnChange = e => {
    e.persist()
    this.setState({
      newIssue: {
        ...this.state.newIssue,
        [e.target.name]: e.target.value,
        priority: this.state.selectedPriority
      }
    })
  }

  handleSelectedPriority = (e, option) => {
    e.persist()
    this.setState({
      newIssue: {
        ...this.state.newIssue,
        priority: option
      }
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    // console.log(this.state.newIssue)
    this.props.createIssue(this.state.newIssue)
    this.setState({newIssue: {}})
    this.props.toggleAddIssueModal(false)
    console.log('after', this.state)
  }

  render() {
    const {addIssueModalOpen, toggleAddIssueModal} = this.props
    return (
      <> 
        <CardHeader className="bg-white border-0">
          <Row className="align-items-center">
            <Col xs="8">
              <h3 className="mb-0">New Issue</h3>
            </Col>
            <Col className="text-right" xs="4">
              <Button
                color="primary"
                onClick={() => addIssueModalOpen ? toggleAddIssueModal(false) : toggleAddIssueModal(true)}
                size="sm"
              >
                X
              </Button>
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
                      placeholder='Title'
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
                  placeholder="Issue description"
                  rows="4"
                  type="textarea"
                  name="description"
                  onChange={this.handleOnChange}
                />
              </FormGroup>
            </div>
            <div className="pl-lg-4">
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
            </div>
            <div className="modal-footer">
              <Button
                color="secondary"
                data-dismiss="modal"
                type="button"
                onClick={() => addIssueModalOpen ? toggleAddIssueModal(false) : toggleAddIssueModal(true)}
              >
                Close
              </Button>
              <Button color="primary" type="submit">
                Add Issue
              </Button>
            </div>
          </Form>
        </CardBody>
      </>
    )
  }
}

export default connect(null, {createIssue})(AddIssueCardForm)