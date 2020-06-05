import React from 'react';
import { Field as FField, Form as FForm } from 'react-final-form';
import { Button } from 'antd';
import {
  renderAntMonthPicker,
  parsePhone,
  formatPhone,
  capitalize,
  StyledButton,
} from '../fields/renderFields';
import {renderAntInput, renderAntPasswordInput} from '../fields/InputFields';
import MakeAsyncFunction from 'react-redux-promise-listener';
import {promiseListener} from '../../store';
import {SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE} from '../../modules/signup/redux';
import * as validations from '../../utils/validations';

const monthFormat = 'MM-YYYY';

export const AsyncSignUpForm = ({isLoading}) => (
  <MakeAsyncFunction
    listener={promiseListener}
    start={SIGNUP_REQUEST}
    resolve={SIGNUP_SUCCESS}
    reject={SIGNUP_FAILURE}
  >
    {onSubmit => (
      <FForm
        onSubmit={onSubmit}
        render={({submitError, handleSubmit, form, submitting, errors, pristine, values}) => (
          <>
            {isLoading && <div>Loading...</div>}
            {submitError && <div className="error">{submitError}</div>}
            {/*{errors && <div className="error">{errors}</div>}*/}
            <form onSubmit={handleSubmit}>
              <div>
                <FField
                  name="firstName"
                  component={renderAntInput}
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
              </div>
              <div>
                <FField
                  name="lastName"
                  component={renderAntInput}
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
              </div>
              <div>
                <FField
                  name="gradMonthYear"
                  placeholder="Graduation Date MM-YY"
                  component={renderAntMonthPicker}
                  monthFormat={monthFormat}
                  parse={value => value || value.format(monthFormat)}
                  format={value => value}
                  allowClear={false}
                  validate={validations.required}
                />
              </div>
              <div>
                <FField
                  name="email"
                  component={renderAntInput}
                  validate={validations.composeValidators(
                    validations.required,
                    validations.email,
                    validations.edu
                  )}
                  type="text"
                  placeholder="creative@cllctve.edu"
                />
              </div>
              <div>
                <FField
                  name="phone"
                  component={renderAntInput}
                  type="text"
                  placeholder="555-555-5555"
                  parse={parsePhone}
                  format={formatPhone}
                />
              </div>
              <div>
                <FField
                  name="password"
                  component={renderAntPasswordInput}
                  type="text"
                  placeholder="password"
                />
              </div>
              <StyledButton
                size="large"
                shape="round"
                type="button"
                htmlType="submit"
                disabled={isLoading || submitting}
                loading={isLoading || submitting}
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
