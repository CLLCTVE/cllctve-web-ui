import React, {Component} from 'react';
import { Field, Form } from 'react-final-form';
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, handleLoginRequest } from '../../modules/auth/redux';

const sleep = ms => new Promise((resolve, reject) => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

const LoginForm = () => (
  <Form
    onSubmit={onSubmit}
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
  >
  
  </Form>
)
