import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"

import AdminLayout from './components/layouts/Admin'
import AuthLayout from './components/layouts/Auth'

import Sidebar from './components/navbars/Sidebar'
import TaskBoard from './boards/taskBoard/TaskBoard'
import routes from "./routes.js"


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      {/* <div>
        <Sidebar routes={routes}
        logo={{
            innerLink: "/admin/index",
            imgSrc: require("./assets/simplize-logo.png"),
            imgAlt: "..."
          }} />
        <h1>This is app</h1>
        <TaskBoard />
      </div> */}
        <Switch>
          <Route path="/admin" render={props => <AdminLayout {...props} />} />
          <Route path="/auth" render={props => <AuthLayout {...props} />} />
          {/* redirect to /simplize */}
          <Redirect from="/" to="/auth" />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
