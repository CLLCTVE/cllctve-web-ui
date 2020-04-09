import React from 'react';
import {Field as FField, Form as FForm} from 'react-final-form';
import {Form, Button} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {renderAntInput, renderAntPasswordInput} from '../fields/renderFields';
import styled from 'styled-components';
import MakeAsyncFunction from 'react-redux-promise-listener';
import {promiseListener} from '../../store';
import LoadingSpinner from '../../lib/components/loadingSpinner';
import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from '../../modules/auth/redux';
import * as validations from '../../utils/validations';

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
            <form onSubmit={handleSubmit}>
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
            </form>
          </>
        )}
      />
    )}
  </MakeAsyncFunction>
);
