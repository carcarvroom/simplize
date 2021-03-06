import React from "react";
import { Route } from "react-router-dom"
import { Container, Row, Col } from "reactstrap"
import AuthNavbar from "../navbars/AuthNavbar"
import AuthFooter from "../footers/AuthFooter"

class Home extends React.Component {
  componentDidMount() {
    document.body.classList.add("bg-default");
  }
  
  componentWillUnmount() {
    document.body.classList.remove("bg-default");
  }

  getRoutes = routes => {
    return routes.map((component, index) => {
      if (component.layout === "/auth") {
        return (
          <Route
            path={component.layout + component.path}
            component={component.component}
            key={index}
          />
        )
      } else {
        return null
      }
    })
  }

  render() {
    return (
      <>
        <div className="main-content">
          <AuthNavbar />
          <div className="header bg-gradient-info py-7 py-lg-8">
            <Container>
              <div className="header-body text-center mb-7">
                <Row className="justify-content-center">
                  <Col lg="5" md="6">
                    <h1 className="text-white">Welcome to Simplize!</h1>
                    <p className="text-lead text-light">
                      Simplize your life with our managing tools: idea boards, task boards, issue tracking and more!
                    </p>
                  </Col>
                </Row>
              </div>
            </Container>
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-default"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </div>
        </div>
        <AuthFooter />
      </>
    );
  }
}

export default Home;
