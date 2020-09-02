import React, { Component } from 'react';
import {connect} from 'react-redux'
import {autoLogin} from './actions'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"

import HomePage from './components/layouts/HomePage'
import AdminLayout from './components/layouts/Admin'
import AuthLayout from './components/layouts/Auth'

class App extends Component {
  componentDidMount(){
    if(localStorage.token) {
      this.props.autoLogin()
    }
  }

  render() {
    return (
      <BrowserRouter>
      { this.props.userReducer.loggedIn ?
        <Switch>
          <Route path="/admin" component={AdminLayout} />
          <Redirect from="*" to="/admin" />
        </Switch>
      :
        <Switch>
          <Route exact path="/" render={() => <HomePage />} />
          <Route path="/auth" render={() => <AuthLayout />} />
          <Redirect from="*" to="/" />
        </Switch>
      }
      </BrowserRouter>
    )
  }
}

const mapStateToProps = state => {
  return {
    userReducer: state.userReducer
  }
}

export default connect(mapStateToProps, {autoLogin})(App);
