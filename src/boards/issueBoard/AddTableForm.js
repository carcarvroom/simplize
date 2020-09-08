import React from 'react'
import { connect } from 'react-redux'
import { createIssueboard } from '../../actions'
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

class AddTableForm extends React.Component {
  state = {
    newIssueboard: {
      board_type: 'issueboard',
      user_id: parseInt(localStorage.getItem('userId'))
    }
  }

  handleOnChange = e => {
    e.persist()
    this.setState({
      newIssueboard: {
        ...this.state.newIssueboard,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.createIssueboard(this.state.newIssueboard)
    this.props.toggleAddTableModal('addTableOpen')
  }

  render() {
    const {toggleAddTableModal} = this.props
    return (
      <> 
        <CardHeader className="bg-white border-0">
          <Row className="align-items-center">
            <Col xs="8">
              <h3 className="mb-0">New Issue Board</h3>
            </Col>
            <Col className="text-right" xs="4">
              <Button
                color="primary"
                onClick={() => toggleAddTableModal('addTableOpen')}
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
                      Issue Board Name
                    </label>
                    <Input
                      className="form-control-alternative"
                      id="input-title"
                      placeholder='Name'
                      type="text"
                      name="name"
                      onChange={this.handleOnChange}
                    />
                  </FormGroup>
                </Col>
              </Row>
            </div>
            <div className="modal-footer">
              <Button
                color="secondary"
                data-dismiss="modal"
                type="button"
                onClick={() => this.toggleAddTableModal('addTableOpen')}
              >
                Close
              </Button>
              <Button color="primary" type="submit">
                Create Issue Board
              </Button>
            </div>
          </Form>
        </CardBody>
      </>
    )
  }
}

export default connect(null, {createIssueboard})(AddTableForm)