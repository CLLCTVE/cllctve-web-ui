import React, {Component} from 'react';

import {connect} from 'react-redux';
import {
  StyledLink
} from '../fields/renderFields';
import {AsyncSignUpForm} from './signupForm';
import {CenteredContainer as Container} from '../fields/ContainerFields';
import { Typography } from 'antd';

const { Title } = Typography;

class SignupPage extends Component {
  render() {
    const {isLoading} = this.props;
    return (
      <Container>
        <div style={{padding: 24, textAlign: 'center', width: '30%'}}>
          <div style={{paddingTop: 12, paddingBottom: 20, marginBottom: 40}}>
            <Title level={2} style={{marginBottom: 0}}>CREATIVE SIGN UP</Title>
            <strong>Create an Account with CLLCTVE Today!</strong>
          </div>
          <AsyncSignUpForm isLoading={isLoading} />
          <div>
            <StyledLink to="/login">Already a member? Click here to Log in!</StyledLink>
          </div>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.signUp.isLoading,
  };
};

export default connect(mapStateToProps, {})(SignupPage);
