import React from 'react';
import { Field, Form } from 'react-final-form';
import { Button } from 'antd';
import { FORM_ERROR } from 'final-form'
import { renderInput, renderPasswordInput } from '../fields/renderFields';

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
        <div>
          <Field
            name="email"
            component={renderInput}
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
        <div className="buttons">
          <Button
            shape="round"
            type="button"
            htmlType="submit"
            disabled={submitting || pristine}
          >
            Login
          </Button>
        </div>
        <pre>{JSON.stringify(values, 0, 2)}</pre>
      </form>
    )}
  />
);
