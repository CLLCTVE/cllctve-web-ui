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


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

class LoginPage extends Component {
  handleFormSubmit = async (values) => {
    this.props.handleLoginRequest(values);
  };
  
  onSubmit = async values => {
    await sleep(100);
    console.log('LoginPage#onSubmit, values: ', values);
    console.log('LoginPage#onSubmit, checking username');
    if (values.email !== 'bailey1.brandon@gmail.com') {
      console.log('LoginPage#onSubmit, unknown email');
      return { email: 'Unknown username' }
    }
    if (values.password !== 'finalformrocks') {
      return { [FORM_ERROR]: 'Login Failed' }
    }
    window.alert('LOGIN SUCCESS!')
  }
  
  render() {
    return (
      <Container>
        <LoginForm onSubmit={this.onSubmit} />
        <div>
          <Link to='#'>Forgot your password? Click Here</Link>
          <br/>
          <Link to='/sign-up'>Not a member? Click here to create your account!</Link>
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
