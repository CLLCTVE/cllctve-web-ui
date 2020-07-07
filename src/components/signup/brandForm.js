import React from 'react';
import {StyledLink} from '../fields/renderFields';
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



export const AsyncBrandForm = ({isLoading}) => (
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
                    name="brandName"
                    component={renderAntInput}
                    validate={validations.composeValidators(
                      validations.required,
                      validations.minLength(4),
                      validations.maxLength(25)
                    )}
                    parse={value => value && value.toLowerCase()}
                    format={capitalize}
                    type="text"
                    placeholder="BRAND NAME*"
                  />
                </div>
                <div>
                  <FField
                    name="firstName"
                    component={renderAntInput}
                    validate={validations.composeValidators(
                      validations.required,
                      validations.minLength(3),
                      validations.maxLength(25)
                    )}
                    parse={value => value && value.toLowerCase()}
                    format={capitalize}
                    type="text"
                    placeholder="REPRESENTATIVE FIRST NAME*"
                  />
                </div>
                <div>
                <FField
                    name="lastName"
                    component={renderAntInput}
                    validate={validations.composeValidators(
                      validations.required,
                      validations.minLength(3),
                      validations.maxLength(25)
                    )}
                    parse={value => value && value.toLowerCase()}
                    format={capitalize}
                    type="text"
                    placeholder="REPRESENTATIVE LAST NAME*"
                  />
                </div>
                <div>
                  <FField
                    name="email"
                    component={renderAntInput}
                    validate={validations.composeValidators(
                      validations.required,
                      validations.email
                    )}
                    type="text"
                    placeholder="EMAIL*"
                  />
                </div>
                <div>
                  <FField
                    name="website"
                    component={renderAntInput}
                    type="text"
                    placeholder="WEBSITE*"
                  />
                </div>
                <div>
                <FField
                  name="password"
                  component={renderAntPasswordInput}
                  type="text"
                  placeholder="PASSWORD*"
                />
              </div>
                {/* <StyledLink to='/brand/start-discovery'> */}
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
                {/* </StyledLink> */}
              </form>
            </>
          )}
        />
      )}
    </MakeAsyncFunction>
  );