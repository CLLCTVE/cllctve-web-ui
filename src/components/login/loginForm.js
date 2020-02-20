import React from 'react';
import { Field, Form } from 'react-final-form';
import { FORM_ERROR } from 'final-form'
import { renderInput } from '../fields/renderFields';

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
        <div>
          <label>Email</label>
          <Field
            name="email"
            component={renderInput}
            type="text"
            placeholder="creative@cllctve.edu"
          />
        </div>
        <div>
          <label>Password</label>
          <Field
            name="password"
            component={renderInput}
            type="text"
            placeholder="password"
          />
        </div>
        <div className="buttons">
          <button type="submit" disabled={submitting || pristine}>
            Submit
          </button>
        </div>
        <pre>{JSON.stringify(values, 0, 2)}</pre>
      </form>
    )}
  />
);
