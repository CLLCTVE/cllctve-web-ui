import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoginForm } from './loginForm';
import { handleLoginRequest } from '../../modules/auth/redux';
import styled from 'styled-components';
import { FORM_ERROR } from 'final-form';

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


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

class LoginPage extends Component {
  handleFormSubmit = async (values) => {
    this.props.handleLoginRequest(values);
  };
  
  onSubmit = async values => {
    await sleep(100);
    console.log('LoginPage#onSubmit, values: ', values);
    console.log('LoginPage#onSubmit, checking username');
    if (values.email !== 'bailey1.brandon@gmail.edu') {
      console.log('LoginPage#onSubmit, unknown email');
      return { email: 'Unknown username' }
    }
    if (values.password !== 'abc123') {
      return { [FORM_ERROR]: 'Login Failed' }
    }
    window.alert('LOGIN SUCCESS!')
  };
  
  render() {
    return (
      <Container>
        <LoginForm onSubmit={this.onSubmit} />
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
