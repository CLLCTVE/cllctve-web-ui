import React from 'react';
import { Field, Form } from 'react-final-form';
import { Button } from 'antd';
import { renderInput, renderPasswordInput } from '../fields/renderFields';
import styled from 'styled-components';
import MakeAsyncFunction from 'react-redux-promise-listener'
import { promiseListener } from '../../store';
import LoadingSpinner from '../../lib/components/loadingSpinner';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../../modules/auth/redux';
import * as validations from '../../utils/validations';

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

export const AsyncLoginForm = () => (
  <MakeAsyncFunction
    listener={promiseListener}
    start={LOGIN_REQUEST}
    resolve={LOGIN_SUCCESS}
    reject={LOGIN_FAILURE}
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
                  name="email"
                  component={renderInput}
                  type="text"
                  placeholder="creative@cllctve.edu"
                  validate={validations.required}
                />
              </div>
              <div>
                <Field
                  name="password"
                  component={renderPasswordInput}
                  type="text"
                  placeholder="password"
                  validate={validations.required}
                />
              </div>
    
              <StyledButton
                size="large"
                shape="round"
                type="button"
                htmlType="submit"
                disabled={submitting}
              >
                Login
              </StyledButton>
            </form>
          </>
        )}
      />
    )}
  </MakeAsyncFunction>
)
