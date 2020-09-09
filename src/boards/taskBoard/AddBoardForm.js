import React from 'react'
import { connect } from 'react-redux'
import { createTaskboard } from '../../actions'
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

class AddBoardForm extends React.Component {
  state = {
    newTaskboard: {
      board_type: 'taskboard',
      user_id: parseInt(localStorage.getItem('userId'))
    }
  }

  handleOnChange = e => {
    e.persist()
    this.setState({
      newTaskboard: {
        ...this.state.newTaskboard,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.createTaskboard(this.state.newTaskboard)
    this.props.toggleAddBoardForm('addBoardFormOpen')
  }

  render() {
    const {toggleAddBoardForm} = this.props
    return (
      <> 
        <CardHeader className="bg-white border-0">
          <Row className="align-items-center">
            <Col xs="8">
              <h3 className="mb-0">New Task Board</h3>
            </Col>
            <Col className="text-right" xs="4">
              <Button
                onClick={() => toggleAddBoardForm('addBoardFormOpen')}
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
                      Task Board Name
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
                onClick={() => toggleAddBoardForm('addBoardFormOpen')}
              >
                Close
              </Button>
              <Button color="primary" type="submit">
                Create Task Board
              </Button>
            </div>
          </Form>
        </CardBody>
      </>
    )
  }
}

export default connect(null, {createTaskboard})(AddBoardForm)