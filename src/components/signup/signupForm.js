import React from 'react';
import { Field, Form } from 'react-final-form';
import { Button } from 'antd';
import { renderInput, renderMonthPicker, renderPasswordInput, normalizePhone, capitalize } from '../fields/renderFields';
import styled from 'styled-components';
import MakeAsyncFunction from 'react-redux-promise-listener'
import { promiseListener } from '../../store';
import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE
} from '../../modules/signup/redux';
import * as validations from '../../utils/validations';


const monthFormat = 'MM-YYYY';

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
    
    &:focus{
      color: #E41E84;
    }
  }
`;

export const AsyncSignUpForm = () => (
  <MakeAsyncFunction
    listener={promiseListener}
    start={SIGNUP_REQUEST}
    resolve={SIGNUP_SUCCESS}
    reject={SIGNUP_FAILURE}
  >
    {onSubmit => (
      <Form
        onSubmit={onSubmit}
        render={({ submitError, handleSubmit, form, submitting, pristine, values }) => (
          <>
            {submitError && <div className="error">{submitError}</div>}
            <form onSubmit={handleSubmit}>
              <div>
                <Field
                  name="firstName"
                  component={renderInput}
                  validate={validations.composeValidators(validations.required, validations.minLength(4), validations.maxLength(25))}
                  parse={value => value && value.toLowerCase()}
                  format={capitalize}
                  type="text"
                  placeholder="First Name*"
                />
              </div>
              <div>
                <Field
                  name="lastName"
                  component={renderInput}
                  validate={validations.composeValidators(validations.required, validations.minLength(4), validations.maxLength(25))}
                  parse={value => value && value.toLowerCase()}
                  format={capitalize}
                  type="text"
                  placeholder="Last Name*"
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
                  name="phoneNumber"
                  component={renderInput}
                  type="text"
                  placeholder="555-555-5555"
                  parse={normalizePhone}
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
                size="large"
                shape="round"
                type="button"
                htmlType="submit"
                disabled={submitting}
              >
                Submit
              </StyledButton>
              <pre>{JSON.stringify(values, 0, 2)}</pre>
              <pre>{JSON.stringify(form, 0, 2)}</pre>
            </form>
          </>
        )}
      />
      )}
  </MakeAsyncFunction>
);
