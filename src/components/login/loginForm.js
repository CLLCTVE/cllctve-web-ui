import React from 'react';
import {Field as FField, Form as FForm} from 'react-final-form';
import {Form} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {StyledButton, renderAntInput, renderAntPasswordInput} from '../fields/renderFields';
import styled from 'styled-components';
import MakeAsyncFunction from 'react-redux-promise-listener';
import {promiseListener} from '../../store';
import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from '../../modules/auth/redux';
import * as validations from '../../utils/validations';

export const AsyncLoginForm = ({isLoading}) => (
  <MakeAsyncFunction
    listener={promiseListener}
    start={LOGIN_REQUEST}
    resolve={LOGIN_SUCCESS}
    reject={LOGIN_FAILURE}
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
                    name="email"
                    component={renderAntInput}
                    type="text"
                    placeholder="creative@cllctve.edu*"
                    validate={validations.required}
                  />
                </div>
                <div>
                  <FField
                    name="password"
                    component={renderAntPasswordInput}
                    type="text"
                    placeholder="password*"
                    validate={validations.required}
                  />
                </div>
  
                <StyledButton
                  size="large"
                  shape="round"
                  type="button"
                  htmlType="submit"
                  disabled={submitting}
                  loading={isLoading || submitting}
                >
                  Login
                </StyledButton>
              </Form>
              <pre>{JSON.stringify(values, 0, 2)}</pre>
          </>
        )}
      />
    )}
  </MakeAsyncFunction>
);
