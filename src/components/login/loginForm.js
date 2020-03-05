import React from 'react';
import { Field, Form } from 'react-final-form';
import { Button } from 'antd';
import { renderInput, renderPasswordInput } from '../fields/renderFields';
import styled from 'styled-components';

const StyledButton = styled(Button)`
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
  }
`;

export const LoginForm = (props) => (
  <Form
    onSubmit={props.onSubmit}
    validate={values => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Required';
      }
      if (!values.password) {
        errors.password = 'Required';
      }
      return errors;
    }}
    
    render={({ submitError, handleSubmit, submitting, pristine, values }) => (
      <form onSubmit={handleSubmit}>
        {submitError && <div className="error">{submitError}</div>}
          <Field
            name="email"
            component={renderInput}
            type="text"
            placeholder="creative@cllctve.edu"
          />
          <Field
            name="password"
            component={renderPasswordInput}
            type="text"
            placeholder="password"
          />
          <StyledButton
            size="large"
            shape="round"
            type="button"
            htmlType="submit"
          >
            Login
          </StyledButton>
        <pre>{JSON.stringify(values, 0, 2)}</pre>
      </form>
    )}
  />
);
