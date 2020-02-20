import React, {Component} from 'react';
import { connect } from 'react-redux';
import { LoginForm } from './loginForm';
import { handleLoginRequest } from '../../modules/auth/redux';

class LoginPage extends Component {
  handleFormSubmit = async (values) => {
    this.props.handleLoginRequest(values);
  };
  
  render() {
    return (
      <LoginForm onSubmit={this.handleFormSubmit} />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    authenticated: state.auth.authenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleLoginRequest: (values) => dispatch(handleLoginRequest(values))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
