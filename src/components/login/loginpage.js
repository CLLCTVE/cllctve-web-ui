import React, {Component} from 'react';
import { connect } from 'react-redux';
import { LoginForm } from './loginForm';
import { handleLoginRequest } from '../../modules/auth/redux';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 300px;
  display: inline-block;
`;

class LoginPage extends Component {
  handleFormSubmit = async (values) => {
    this.props.handleLoginRequest(values);
  };
  
  render() {
    return (
      <Container>
        <LoginForm onSubmit={this.handleFormSubmit} />
        <div>
          <a href="#">Forgot your password? Click Here</a>
          <br/>
          <a href="#">Not a member? Click here to create your account!</a>
        </div>
      </Container>
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
