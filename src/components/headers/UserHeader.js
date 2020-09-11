import React from "react";
import { connect } from 'react-redux'
import { Container, Row, Col } from "reactstrap";

class UserHeader extends React.Component {
  render() {
    const {user} = this.props
    return (
      <>
        <div
          className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
          style={{
            minHeight: "500px",
            backgroundSize: "cover",
            backgroundPosition: "center top"
          }}
        >
          <span className="mask bg-gradient-default opacity-8" />
          <Container className="d-flex align-items-center" fluid>
            <Row>
              <Col>
                <h1 className="display-2 text-white">Hello {user.first_name}!</h1>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  user: state.userReducer.user
})

export default connect(mapStateToProps)(UserHeader)