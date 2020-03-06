import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
import { renderInput, renderMonthPicker, renderPasswordInput, renderSelect } from '../fields/renderFields';
import styled from 'styled-components';
import { Row, Button } from 'antd';
import * as validations from '../../utils/validations';
import { handleLoginRequest } from '../../modules/auth/redux';
import { FORM_ERROR } from 'final-form';

const monthFormat = 'MM-YYYY';

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

class SignUpPage extends Component {
  
  onSubmit = async values => {
    await sleep(100);
    console.log('SignUpPage#onSumbit, values: ', values);
    console.log('SignUpPage#onSubmit, checking username');
  };
  
  render() {
    
    return (
      <Container>
        <Form
          onSubmit={this.onSubmit}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <Row gutter={8}>
                <Field
                  name="firstName"
                  component={renderInput}
                  validate={validations.composeValidators(validations.required, validations.minLength(4), validations.maxLength(25))}
                  type="text"
                  placeholder="First Name*"
                />
              </Row>
              <Row>
                <Field
                  name="lastName"
                  component={renderInput}
                  validate={validations.composeValidators(validations.required, validations.minLength(4), validations.maxLength(25))}
                  type="text"
                  placeholder="Last Name*"
                />
              </Row>
              <div>
                <Field
                  name="creativeName"
                  component={renderInput}
                  validate={validations.composeValidators(validations.required, validations.minLength(2), validations.maxLength(25))}
                  type="text"
                  placeholder="Creative Name*"
                />
              </div>
              <div>
                <Field
                  name="gradMonthYear"
                  component={renderMonthPicker}
                  monthFormat={monthFormat}
                  parse={value => value || value.format(monthFormat)}
                  format={value => value}
                  allowClear={false}
                />
              </div>
              <div>
                <Field
                  name="email"
                  component={renderInput}
                  validate={validations.composeValidators(validations.required, validations.edu, validations.email)}
                  type="text"
                  placeholder="creative@cllctve.edu"
                />
              </div>
              <div>
                <Field
                  name="password"
                  component={renderPasswordInput}
                  type="text"
                  placeholder="password"
                />
              </div>
              <StyledButton
                htmlType="submit"
                shape="round"
                size="large"
              >
                Submit
              </StyledButton>
              <pre>{JSON.stringify(values, 0, 2)}</pre>
            </form>
          )}
        />
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

const mapDispatchToProps = (dispatch) => {
  return {
    onHandleSignupRequest: (values) => dispatch(handleLoginRequest(values))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);

