import React from "react";
import { Route, Switch } from "react-router-dom"
import { Container } from "reactstrap";

import AdminNavbar from "../navbars/AdminNavbar"
import AdminFooter from "../footers/AdminFooter"
import Sidebar from "../navbars/Sidebar"

import routes from "../../routes"
import Profile from "../Profile"
import DisplayTeams from "../teams/DisplayTeams"


class Admin extends React.Component {
  componentDidUpdate(e) {
    document.documentElement.scrollTop = 0
    document.scrollingElement.scrollTop = 0
    this.refs.mainContent.scrollTop = 0
  }

  getRoutes = routes => {
    return routes.map((component, index) => {
      if(component.layout === "/admin") {
        return (
          <Route
            path={component.path}
            component={component.component}
            key={index}
          />
        )
      } else {
        return null;
      }
    })
  }

  render() {
    return (
      <>
        <Sidebar
          {...this.props}
          routes={routes}
          logo={{
            innerLink: "/dashboard",
            imgSrc: require("../../assets/img/brand/blue-simplize-logo.png"),
            imgAlt: "simplize-logo"
          }}
        />
        <div className="main-content" ref="mainContent">
          <AdminNavbar
            // {team ? null : null}
          />
          <Switch>
            {this.getRoutes(routes)}
            <Route path="/profile" component={Profile} />
            <Route path="/teams" component={DisplayTeams} />
          </Switch>
          <Container fluid>
            <AdminFooter />
          </Container>
        </div>
      </>
    );
  }
}

export default Admin;
