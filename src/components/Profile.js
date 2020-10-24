import React from "react";
import { connect } from 'react-redux'
import { updateUser, deleteUser } from '../actions'
import UserHeader from "./headers/UserHeader"

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
  Modal
} from "reactstrap"

class Profile extends React.Component {

  state = {
    profileModalOpen: false,
    updateInfo: {}
  }

  toggleModal = (state, user=null) => {
    if(this.state.profileModalOpen) {
      this.setState({
        [state]: !this.state[state],
        updateInfo: {}
      })
    } else {
      this.setState({
        [state]: !this.state[state],
        updateInfo: {
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          address: '',
          description: user.description
        }
      })
    }
  }

  handleOnChange = e => {
    e.persist()
    this.setState(() => ({

      updateInfo: {
        ...this.state.updateInfo,
        [e.target.name]: e.target.value
      }
    }))
  }  

  handleEditProfile = e => {
    e.preventDefault()
    this.props.updateUser(this.props.user.id, this.state.updateInfo)
    this.toggleModal("profileModalOpen")
  }

  render() {
    const {user} = this.props
    return (
      <>
        <UserHeader />
        <Container className="mt--9" fluid>
          <Row>
            <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
              <Card className="card-profile shadow">
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3">
                    <div className="card-profile-image">
                      <a href="#" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="rounded-circle"
                          src={user.profile_img}
                        />
                      </a>
                    </div>
                  </Col>
                </Row>
                <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                  <div className="d-flex justify-content-between">
                    <Button
                      className="mr-4"
                      color="info"
                      href="#"
                      onClick={e => e.preventDefault()}
                      size="sm"
                    >
                      Connect
                    </Button>
                    <Button
                      className="float-right"
                      color="default"
                      href="#"
                      onClick={e => e.preventDefault()}
                      size="sm"
                    >
                      Message
                    </Button>
                  </div>
                </CardHeader>
                <CardBody className="pt-0 pt-md-4">
                  <Row>
                    <div className="col">
                      <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                      </div>
                    </div>
                  </Row>
                  <div className="text-center">
                    <h3>
                      {user.first_name}
                      <span className="font-weight-light">{', '}{user.age}</span>
                    </h3>
                    <div className="h5 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      {user.location}
                    </div>
                    <div className="h5 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      {user.position}
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      {user.organization}
                    </div>
                    <hr className="my-4" />
                    <p>
                      {user.description}
                    </p>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col className="order-xl-1" xl="8">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">My account</h3>
                    </Col>
                    <Col className="text-right" xs="4">
                      <Button
                        color="primary"
                        onClick={() => this.toggleModal("profileModalOpen", user)}
                        size="sm"
                      >
                        Edit Profile
                      </Button>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form>
                    <h6 className="heading-small text-muted mb-4">
                      User information
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              Username
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue={user.username}
                              id="input-username"
                              placeholder={user.username}
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-first-name"
                            >
                              First name
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-first-name"
                              placeholder={user.first_name}
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-last-name"
                            >
                              Last name
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-last-name"
                              placeholder={user.last_name}
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    <h6 className="heading-small text-muted mb-4">
                      Contact information
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Email address
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-email"
                              placeholder={user.email}
                              type="email"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-address"
                            >
                              Address
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-address"
                              placeholder="Home Address"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-city"
                            >
                              City
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-city"
                              placeholder="City"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              Country
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-country"
                              placeholder="Country"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              Postal code
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-postal-code"
                              placeholder="Postal code"
                              type="number"
                            />
                          </FormGroup>
                        </Col>
                      </Row>

                    </div>
                    <hr className="my-4" />
                    <h6 className="heading-small text-muted mb-4">About me</h6>
                    <div className="pl-lg-4">
                      <FormGroup>
                        <label>About Me</label>
                        <Input
                          className="form-control-alternative"
                          placeholder={user.description}
                          rows="4"
                          type="textarea"
                        />
                      </FormGroup>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Button
          className="mt-4 float-center"
            color="info"
            onClick={() => {if (window.confirm('Are you sure you want to delete this account?')) this.props.deleteUser(user.id)}}
          >
            Delete Account
          </Button>
          </Container>
          <Modal
          className="modal-dialog-centered"
          isOpen={this.state.profileModalOpen}
          toggle={() => this.toggleModal("profileModalOpen")}
          >
            <CardHeader className="bg-white border-0">
              <Row className="align-items-center">
                <Col xs="8">
                  <h3 className="mb-0">Edit Profile</h3>
                </Col>
                <Col className="text-right" xs="4">
                  <Button
                    color="primary"
                    onClick={() => this.toggleModal("profileModalOpen")}
                    size="sm"
                  >
                    X
                  </Button>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <Form onSubmit={(e) => {this.handleEditProfile(e)}}>
                <h6 className="heading-small text-muted mb-4">
                  User information
                </h6>
                <div className="pl-lg-4">
                  <Row>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-first-name"
                        >
                          First name
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="input-first-name"
                          placeholder={user.first_name}
                          defaultValue={user.first_name}
                          type="text"
                          name="first_name"
                          onChange={this.handleOnChange}
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-last-name"
                        >
                          Last name
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="input-last-name"
                          placeholder={user.last_name}
                          defaultValue={user.last_name}
                          type="text"
                          name="last_name"
                          onChange={this.handleOnChange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-position"
                        >
                          Position
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="input-position"
                          placeholder={user.position}
                          defaultValue={user.position}
                          type="text"
                          name="position"
                          onChange={this.handleOnChange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-organization"
                        >
                          Organization
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="input-organization"
                          placeholder={user.organization}
                          defaultValue={user.organization}
                          type="text"
                          name="organization"
                          onChange={this.handleOnChange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
                <hr className="my-4" />
                <h6 className="heading-small text-muted mb-4">
                  Contact information
                </h6>
                <div className="pl-lg-4">
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-email"
                        >
                          Email address
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="input-email"
                          placeholder={user.email}
                          defaultValue={user.email}
                          type="email"
                          name="email"
                          onChange={this.handleOnChange}
                        />
                      </FormGroup>
                    </Col>
                    <Col md="12">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-address"
                        >
                          Address
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="input-address"
                          placeholder="Address"
                          defaultValue={user.address}
                          name="address"
                          type="text"
                          onChange={this.handleOnChange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="4">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-city"
                        >
                          City
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="input-city"
                          placeholder="City"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="4">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-country"
                        >
                          Country
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="input-country"
                          placeholder="Country"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="4">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-country"
                        >
                          Postal code
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="input-postal-code"
                          placeholder="Postal code"
                          type="number"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-social"
                        >
                          Social
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="input-social"
                          placeholder="How would you like others to connect with you? (e.g. LinkedIn)"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
                <hr className="my-4" />
                <h6 className="heading-small text-muted mb-4">About me</h6>
                <div className="pl-lg-4">
                  <Row>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-age"
                        >
                          Age
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="input-age"
                          placeholder={user.age}
                          defaultValue={user.age}
                          type="text"
                          name="age"
                          onChange={this.handleOnChange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-img"
                        >
                          Profile Image
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="input-img"
                          placeholder="Profile picture"
                          name="profile_img"
                          type="text"
                          onChange={this.handleOnChange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup>
                    <label>About Me</label>
                    <Input
                      className="form-control-alternative"
                      placeholder={user.description}
                      defaultValue={user.description}
                      rows="4"
                      type="textarea"
                      name="description"
                      onChange={this.handleOnChange}
                    />
                  </FormGroup>
                </div>
                <div className="modal-footer">
                  <Button
                    color="secondary"
                    data-dismiss="modal"
                    type="button"
                    onClick={() => this.toggleModal("profileModalOpen")}
                  >
                    Close
                  </Button>
                  <Button color="primary" type="submit">
                    Save changes
                  </Button>
                </div>
              </Form>
            </CardBody>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = state => ({
  user: state.userReducer.user
})


export default connect(mapStateToProps, {updateUser, deleteUser})(Profile)
