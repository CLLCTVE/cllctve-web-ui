import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Field, Form } from 'react-final-form';
import MakeAsyncFunction from 'react-redux-promise-listener'
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, loginRequest } from '../../modules/auth/redux';

import {promiseListener} from '../../store';

const sleep = ms => new Promise((resolve, reject) => setTimeout(resolve, ms));

const showResults = async values => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

class LoginPage extends Component {
  onSubmit = (values) => {
    console.log('LoginPage#onSubmit, values: ', values);
    this.props.loginRequest(values);
  };
  
  render() {
    return (
      <MakeAsyncFunction
        listener={promiseListener}
        start={LOGIN_REQUEST}
        resolve={LOGIN_SUCCESS}
        reject={LOGIN_FAILURE}
      >
        {onSubmit => (
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
          />
        )}
      </MakeAsyncFunction>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    token: state.auth.user.token,
    authenticated: state.auth.authenticated,
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    loginRequest: () => dispatch(loginRequest)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
