import React from "react";
import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

const AuthFooter = () => {
  return (
    <>
      <footer className="py-5">
        <Container>
          <Row className="align-items-center justify-content-xl-between">
            <Col xl="6">
              <div className="copyright text-center text-xl-left text-muted">
                Developed by{" "}
                <a
                  className="font-weight-bold ml-1"
                  href="https://www.linkedin.com/in/carlyla/"
                  target="_blank"
                >
                  Carly La
                </a>
              </div>
            </Col>
            <Col xl="6">
              <Nav className="nav-footer justify-content-center justify-content-xl-end">
                {/* <NavItem>
                  <NavLink
                    href="#"
                    target="_blank"
                  >
                    Website
                  </NavLink>
                </NavItem> */}
                <NavItem>
                  <NavLink
                    href="https://medium.com/@carly_l"
                    target="_blank"
                  >
                    Blog
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://github.com/carcarvroom"
                    target="_blank"
                  >
                    Github
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default AuthFooter;
