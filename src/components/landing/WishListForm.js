import React from 'react';
import {Field as FField, Form as FForm} from 'react-final-form';
import {Form} from 'antd';
import {StyledButton} from '../fields/renderFields';
import {renderAntInput, renderAntPasswordInput} from '../fields/InputFields';
import styled from 'styled-components';
import MakeAsyncFunction from 'react-redux-promise-listener';
import {promiseListener} from '../../store';
import {WISHLIST_REQUEST, WISHLIST_SUCCESS, WISHLIST_FAILURE} from '../../modules/landing/redux';
import * as validations from '../../utils/validations';

export const AsyncWishListForm = ({isLoading}) => (
    <MakeAsyncFunction
    listener={promiseListener}
    start={WISHLIST_REQUEST}
    resolve={WISHLIST_SUCCESS}
    reject={WISHLIST_FAILURE}
  >
      {onSubmit => (
          <FForm
          onSubmit={onSubmit}
          render={({submitError, handleSubmit, form, submitting, pristine, values}) => (
            <>
              {isLoading && <div>Loading...</div>}
              {submitError && <div className="error">{submitError}</div>}
                <Form onFinish={handleSubmit}>
                <div>
                    <FField
                      name="firstName"
                      component={renderAntInput}
                      type="text"
                      placeholder="First Name*"
                      disabled={submitting}
                      validate={validations.required}
                    />
                  </div>
                  <div>
                    <FField
                      name="lastName"
                      component={renderAntInput}
                      type="text"
                      placeholder="Last Name*"
                      disabled={submitting}
                      validate={validations.required}
                    />
                  </div>
                  <div>
                    <FField
                      name="email"
                      component={renderAntInput}
                      type="text"
                      placeholder="creative@cllctve.edu*"
                      disabled={submitting}
                      validate={validations.composeValidators(
                        validations.required,
                        validations.email,
                        validations.edu
                      )}
                    />
                  </div>
                  <div>
                    <FField
                      name="major"
                      component={renderAntInput}
                      type="text"
                      placeholder="Major*"
                      disabled={submitting}
                      validate={validations.required}
                    />
                  </div>
                  <div>
                    <FField
                      name="skillsList"
                      component={renderAntInput}
                      type="text"
                      placeholder="List your skills (Separated by comma)*"
                      disabled={submitting}
                      validate={validations.required}
                    />
                  </div>
    
                  <StyledButton
                  style={{margin: '0 auto', display: 'block'}}
                    size="large"
                    shape="round"
                    type="button"
                    htmlType="submit"
                    disabled={submitting}
                    loading={isLoading || submitting}
                  >
                    Join The Wishlist
                  </StyledButton>
                </Form>
            </>
          )}
        />
      )}
  </MakeAsyncFunction>
)