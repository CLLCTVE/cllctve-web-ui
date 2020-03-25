import React, {Component} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import { Field } from 'react-final-form'
import {Button, Row, Col, Checkbox} from 'antd';
import {
  renderInput,
  renderMonthPicker,
  renderCheckbox,
  renderTextArea,
  normalizePhone,
  capitalize,
} from '../fields/renderFields';
import OnBoardingWizard from './onboarding-wizard';
import {EducationForm} from './EducationForm';
import * as validations from '../../utils/validations';

const SKILLS = [
  'Video Editing',
  'Videography',
  'Photography',
  'Writing',
  'Web Development',
  'Graphic Design',
  'Animation'
];

const monthFormat = 'MM-YYYY';

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
        <OnBoardingWizard
          initialValues={{
            education: {
              isStudent: false,
            }
          }}
          onSubmit={onSubmit}
        >
          <OnBoardingWizard.Page>
            <EducationForm />
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
