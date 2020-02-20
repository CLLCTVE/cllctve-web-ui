import React, {Component} from 'react';
import { Field, Form } from 'react-final-form';

export const LoginForm = (props) => (
  <Form
    onSubmit={props.onSubmit}
    render={({ handleSubmit, submitting, pristine, values }) => (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <Field
            name="email"
            component="input"
            type="text"
            placeholder="creative@cllctve.edu"
          />
        </div>
        <div>
          <label>Password</label>
          <Field
            name="password"
            component="input"
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
