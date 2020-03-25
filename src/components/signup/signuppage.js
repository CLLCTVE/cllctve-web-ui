import React, {Component} from 'react';

import {connect} from 'react-redux';
import {Form, Field} from 'react-final-form';
import {
  renderInput,
  renderMonthPicker,
  renderPasswordInput,
  renderSelect,
  StyledLink
} from '../fields/renderFields';
import styled from 'styled-components';
import {Row, Button} from 'antd';
import * as validations from '../../utils/validations';
import {AsyncSignUpForm} from './signupForm';

// const monthFormat = 'MM-YYYY';

const Container = styled.div`
  max-width: 300px;
  display: inline-block;
`;

const StyledButton = styled(Button)`
  font-family: 'Hanson Bold';

  &.ant-btn {
    border: none;
    color: #ffffff;
    opacity: 1;
    background: transparent linear-gradient(101deg, #e41e84 0%, #ff6633 100%) 0% 0% no-repeat
      padding-box;

    &:hover {
      color: #ffffff;
      opacity: 0.8;
      background: transparent linear-gradient(101deg, #ff6633 0%, #e41e84 100%) 0% 0% no-repeat
        padding-box;
    }

    &:focus {
      color: #e41e84;
    }
  }
`;



const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

class SignupPage extends Component {
  render() {
    return (
      <Container>
        <AsyncSignUpForm />
        <div>
          <StyledLink to="/login">Already a member? Click here to Log in!</StyledLink>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated,
  };
};

export default connect(mapStateToProps, {})(SignupPage);
