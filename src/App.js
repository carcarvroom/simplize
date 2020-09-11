import React, { Component } from 'react';
import {connect} from 'react-redux'
import {autoLogin, getActivity} from './actions'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"

import HomePage from './components/layouts/HomePage'
import AdminLayout from './components/layouts/Admin'
import AuthLayout from './components/layouts/Auth'
import Dashboard from './components/Dashboard'

class App extends Component {
  componentDidMount(){
    if(localStorage.token) {
      this.props.autoLogin()
      this.props.getActivity()
    }
  }

  render() {
    return (
      <BrowserRouter>
      { localStorage.token ?
        <Switch>
          <Route path="/" render={() => <AdminLayout/>} />
          <Route path="/dashboard" component={Dashboard} />
          <Redirect from="*" to="/dashboard" />
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

export default connect(mapStateToProps, {autoLogin, getActivity})(App);
