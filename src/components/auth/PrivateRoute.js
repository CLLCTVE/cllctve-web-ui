import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest}
    render={(props) => (
      props.auth && props.auth.authenticated ? <Component {...props}/> : <Redirect to='/' />
    )}
  />
);

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, {})(PrivateRoute);
