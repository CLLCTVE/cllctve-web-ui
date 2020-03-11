import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { AsyncLoginForm, LoginForm } from './loginForm';
import { handleLoginRequest } from '../../modules/auth/redux';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 300px;
  display: inline-block;
`;

const StyledLink = styled(Link)`
  color: #ffffff;
  text-decoration: underline;
  font-family: 'Open Sans Bold';
  
  &:hover {
    color: #E41E84;
    text-decoration: underline;
  }
`;

class LoginPage extends Component {
  handleFormSubmit = (values) => {
    console.log('#handleFormSubmit');
    return this.props.handleLoginRequest(values);
  };
  
  render() {
    return (
      <Container>
        <AsyncLoginForm />
        <div>
          <StyledLink to='#'  >Forgot your password? Click Here</StyledLink>
          <br/>
          <StyledLink to='/sign-up'>Not a member? Click here to create your account!</StyledLink>
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
