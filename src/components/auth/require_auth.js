import React, {Component} from 'react';
import {connect} from 'react-redux';
import {history} from '../../store';

export default function(ComposedComponent) {
  class Authentication extends Component {
    UNSAFE_componentWillMount() {
      if (!this.props.authenticated) {
        history.push('/login');
      }
    }

    UNSAFE_componentWillUpdate(nextProps) {
      console.log('#UNSAFE_componentWillUpdate, nextProps: ', nextProps);
      if (!nextProps.authenticated) {
        history.push('/login');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    console.log('mapStateToProps, state: ', state);
    return {authenticated: state.auth.authenticated};
  }

  return connect(mapStateToProps)(Authentication);
}
