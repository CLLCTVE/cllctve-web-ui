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
  display: flex;
  align-items: center;
  justify-content: center;
`;

class SignUpPage extends Component {
  render() {
    const {isLoading} = this.props;
    return (
      <Container>
        <div style={{padding: 24, textAlign: 'center'}}>
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

export default connect(mapStateToProps, {})(SignUpPage);
