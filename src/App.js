import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"

import HomePage from './components/layouts/HomePage'
import AdminLayout from './components/layouts/Admin'
import AuthLayout from './components/layouts/Auth'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/admin" component={AdminLayout} />
          <Route path="/auth" component={AuthLayout} />
          {/* redirect to /simplize */}
          {/* <Redirect from="/" to="/auth" /> */}
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
