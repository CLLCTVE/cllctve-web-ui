import React from 'react';
import {Field, Form} from 'react-final-form';
import {Button} from 'antd';
import {
  renderInput,
  renderMonthPicker,
  renderPasswordInput,
  renderStyledButton,
  normalizePhone,
  capitalize,
} from '../fields/renderFields';
import styled from 'styled-components';
import MakeAsyncFunction from 'react-redux-promise-listener';
import {promiseListener} from '../../store';
import {SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE} from '../../modules/signup/redux';
import * as validations from '../../utils/validations';

const monthFormat = 'MM-YYYY';

const StyledButton = styled(Button)`
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

const Error = ({ name }) => (
  <Field
    name={name}
    subscribe={{ touched: true, error: true }}
    render={({ meta: { touched, error } }) =>
      touched && error ? <span>{error}</span> : null
    }
  />
);

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
        render={({submitError, handleSubmit, form, submitting, pristine, values}) => (
          <>
            {submitError && <div className="error">{submitError}</div>}
            <form onSubmit={handleSubmit}>
              <div>
                <Field
                  name="firstName"
                  component={renderInput}
                  validate={validations.composeValidators(
                    validations.required,
                    validations.minLength(4),
                    validations.maxLength(25)
                  )}
                  parse={value => value && value.toLowerCase()}
                  format={capitalize}
                  type="text"
                  placeholder="First Name*"
                />
                <Error name="firstName" />
              </div>
              <div>
                <Field
                  name="lastName"
                  component={renderInput}
                  validate={validations.composeValidators(
                    validations.required,
                    validations.minLength(4),
                    validations.maxLength(25)
                  )}
                  parse={value => value && value.toLowerCase()}
                  format={capitalize}
                  type="text"
                  placeholder="Last Name*"
                />
                <Error name="lastName" />
              </div>
              <div>
                <Field
                  name="gradMonthYear"
                  component={renderMonthPicker}
                  monthFormat={monthFormat}
                  parse={value => value || value.format(monthFormat)}
                  format={value => value}
                  allowClear={false}
                  validate={validations.required}
                />
                <Error name="gradMonthYear" />
              </div>
              <div>
                <Field
                  name="email"
                  component={renderInput}
                  validate={validations.composeValidators(
                    validations.required,
                    validations.edu,
                    validations.email
                  )}
                  type="text"
                  placeholder="creative@cllctve.edu"
                />
                <Error name="email" />
              </div>
              <div>
                <Field
                  name="phoneNumber"
                  component={renderInput}
                  type="text"
                  placeholder="555-555-5555"
                  format={normalizePhone}
                  parse={value => value}
                />
                <Error name="phoneNumber" />
              </div>
              <div>
                <Field
                  name="password"
                  component={renderPasswordInput}
                  type="text"
                  placeholder="password"
                />
                <Error name="password" />
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
            </form>
          </>
        )}
      />
    )}
  </MakeAsyncFunction>
);
