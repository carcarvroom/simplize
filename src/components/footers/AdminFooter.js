import React from "react";
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";

const Footer = () => {
    return (
      <footer className="footer">
        <Container>
        <Row className="align-items-center justify-content-xl-between">
          <Col xl="6">
            <div className="copyright text-center text-xl-left text-muted">
              Developed by{" "}
              <a
                className="font-weight-bold ml-1"
                href="https://www.linkedin.com/in/carlyla/"
                rel="noopener noreferrer"
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
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Website
                </NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink
                  href="https://medium.com/@carly_l"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Blog
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://github.com/carcarvroom"
                  rel="noopener noreferrer"
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
    );
}

export default Footer;
