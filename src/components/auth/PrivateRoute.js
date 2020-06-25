import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = (props) => {

  const {component: Component, auth, role} = props;
  console.log('role: ', role);
  return (
    <Route {...props}
    render={(props) => {
      return (
        auth && auth.authenticated ? <Component {...props}/> : <Redirect to='/' />
      );
    }}
  />
  );
};

export default PrivateRoute;