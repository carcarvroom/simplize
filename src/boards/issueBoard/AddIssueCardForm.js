import React from 'react'
import {
  CardBody,
  CardHeader,
  Col,
  Row,
  Button,
  ButtonGroup,
  Form,
  FormGroup,
  Input
} from "reactstrap"

class AddIssueCardForm extends React.Component {
  state = {
    selectedPriority: null
  }

  handleOnChange = e => {
    e.preventDefault()
  }

  handleSelectedPriority = (e, option) => {
    e.persist()
    this.setState({selectedPriority: option})
  }

  render() {
    const {selectedPriority} = this.state
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

                size="sm"
              >
                X
              </Button>
            </Col>
          </Row>
        </CardHeader>
        <CardBody>
          <Form >
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
                    id="customRadio5"
                    name="priority"
                    type="radio"
                  />
                  <label className="custom-control-label" htmlFor="customRadio5">
                  High
                  </label>
                </div>
                <div className="custom-control custom-radio mb-3">
                  <input
                    className="custom-control-input"
                    id="customRadio6"
                    name="priority"
                    type="radio"
                  />
                  <label className="custom-control-label" htmlFor="customRadio6">
                    Medium
                  </label>
                </div>
                <div className="custom-control custom-radio mb-3">
                  <input
                    className="custom-control-input"
                    defaultChecked
                    id="customRadio6"
                    name="priority"
                    type="radio"
                  />
                  <label className="custom-control-label" htmlFor="customRadio6">
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

export default AddIssueCardForm