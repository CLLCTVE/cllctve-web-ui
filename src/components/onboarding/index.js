import React, {Component} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import { Field } from 'react-final-form'
import OnBoardingWizard from './onboarding-wizard';

const SKILLS = [
  'Video Editing',
  'Videography',
  'Photography',
  'Writing',
  'Web Development',
  'Graphic Design',
  'Animation'
];

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

const Error = ({ name }) => (
  <Field
    name={name}
    subscribe={{ touched: true, error: true }}
    render={({ meta: { touched, error } }) =>
      touched && error ? <span>{error}</span> : null
    }
  />
)

const required = value => (value ? undefined : 'Required')

class OnBoardingPage extends Component {
  
  render() {
    const { match } = this.props;
    return (
      <>
        <OnBoardingWizard onSubmit={onSubmit}>
          <OnBoardingWizard.Page>
            <div>
              <label>First Name</label>
              <Field
                name="firstName"
                component="input"
                type="text"
                placeholder="First Name"
                validate={required}
              />
              <Error name="firstName" />
            </div>
            <div>
              <label>Last Name</label>
              <Field
                name="lastName"
                component="input"
                type="text"
                placeholder="Last Name"
                validate={required}
              />
              <Error name="lastName" />
            </div>
          </OnBoardingWizard.Page>
          <OnBoardingWizard.Page>
            <div>
              <label>First Name</label>
              <Field
                name="middleName"
                component="input"
                type="text"
                placeholder="Middle Name"
              />
              <Error name="middleName" />
            </div>
          </OnBoardingWizard.Page>
          <OnBoardingWizard.Page>
            <Field
              name="schoolName"
              component="input"
              type="text"
              placeholder="school Name"
            />
            <Error name="schoolName" />
          </OnBoardingWizard.Page>
        </OnBoardingWizard>
      </>
    );
  }
}

export default withRouter(OnBoardingPage);
