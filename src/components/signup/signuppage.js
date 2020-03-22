import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
import { renderInput, renderMonthPicker, renderPasswordInput, renderSelect } from '../fields/renderFields';
import styled from 'styled-components';
import { Row, Button } from 'antd';
import * as validations from '../../utils/validations';
import { AsyncSignUpForm } from './signupForm';

// const monthFormat = 'MM-YYYY';

const Container = styled.div`
  max-width: 300px;
  display: inline-block;
`;

const StyledButton = styled(Button)`
  font-family: 'Hanson Bold';
  
  &.ant-btn{
    border: none;
    color: #FFFFFF;
    opacity: 1;
    background: transparent linear-gradient(101deg, #E41E84 0%, #FF6633 100%) 0% 0% no-repeat padding-box;
    
    &:hover{
      color: #FFFFFF;
      opacity: .8;
      background: transparent linear-gradient(101deg, #FF6633 0%, #E41E84 100%) 0% 0% no-repeat padding-box;
    }
    
    &:focus{
      color: #E41E84;
    }
  }
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

const OPTIONS = ['Software Development', 'Graphic Designer', 'Digital Illustrator'];

class SignupPage extends Component {
  
  render() {
    return (
      <Container>
        <AsyncSignUpForm />
        <div>
          <StyledLink to='/login'>Already a member? Click here to Log in!</StyledLink>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.authenticated,
  };
};

export default connect(mapStateToProps, {})(SignupPage);

