import React, {Component} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import { Field } from 'react-final-form'
import {Button, Row, Col, Checkbox} from 'antd';
import {
  renderSelect,
  renderMonthPicker,
  renderCheckbox,
  renderTextArea,
  normalizePhone,
  capitalize,
} from '../fields/renderFields';
import OnBoardingWizard from './onboarding-wizard';
import {
  EducationForm,
  SkillsForm,
  ExperienceForm,
  HonorsAwardsForm
} from './EducationForm';
import * as validations from '../../utils/validations';

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
            },
            experience: {
              isEmployed: true,
            }
          }}
          onSubmit={onSubmit}
        >
          <OnBoardingWizard.Page>
            <EducationForm />
          </OnBoardingWizard.Page>
          <OnBoardingWizard.Page>
            <SkillsForm />
          </OnBoardingWizard.Page>
          <OnBoardingWizard.Page>
            <ExperienceForm />
          </OnBoardingWizard.Page>
          <OnBoardingWizard.Page>
            <HonorsAwardsForm />
          </OnBoardingWizard.Page>
        </OnBoardingWizard>
      </>
    );
  }
}

export default withRouter(OnBoardingPage);
