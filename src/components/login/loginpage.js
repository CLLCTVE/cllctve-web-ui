import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {AsyncLoginForm} from './loginForm';
import styled from 'styled-components';

const Container = styled.div`
  display: inline-block;
  max-width: 300px;
`;

const StyledLink = styled(Link)`
  color: #ffffff;
  text-decoration: underline;
  font-family: 'Open Sans Bold';

  &:hover {
    color: #e41e84;
    text-decoration: underline;
  }
`;

class LoginPage extends Component {
  render() {
    return (
      <Container>
        <AsyncLoginForm />
        <div>
          <StyledLink to="#">Forgot your password? Click Here</StyledLink>
          <br />
          <StyledLink to="/sign-up">Not a member? Click here to create your account!</StyledLink>
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

export default connect(mapStateToProps, {})(LoginPage);
