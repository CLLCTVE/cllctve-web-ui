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

const Condition = ({ when, is, children }) => (
  <Field name={when} subscription={{ value: true }}>
    {({ input: { value } }) => (value === is ? children : null)}
  </Field>
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
            <>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={18}>
                  <Field
                    name="education.school"
                    component={renderInput}
                    type="text"
                    placeholder="School*"
                    validate={required}
                  />
                </Col>
              </Row>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={9}>
                  <Field
                    name="education.degreeType"
                    component={renderInput}
                    type="text"
                    placeholder="Degree Type"
                    validate={required}
                  />
                </Col>
                <Col span={9}>
                  <Field
                    name="education.major"
                    component={renderInput}
                    type="text"
                    placeholder="Major"
                    validate={required}
                  />
                </Col>
              </Row>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={5}>
                  <Field
                    name="education.city"
                    component={renderInput}
                    type="text"
                    placeholder="City"
                    validate={required}
                  />
                </Col>
                <Col span={5}>
                  <Field
                    name="education.state"
                    component={renderInput}
                    type="text"
                    placeholder="State"
                    validate={required}
                  />
                </Col>
                <Col span={4}>
                  <Field
                    name="education.startMonthYear"
                    placeholder="Start Date"
                    component={renderMonthPicker}
                    monthFormat={monthFormat}
                    parse={value => value || value.format(monthFormat)}
                    format={value => value}
                    allowClear={false}
                    validate={validations.required}
                  />
                </Col>
                <Col span={4}>
                  <Condition when="education.isStudent" is={false}>
                    <Field
                      name="education.endMonthYear"
                      placeholder="End Date"
                      component={renderMonthPicker}
                      monthFormat={monthFormat}
                      parse={value => value || value.format(monthFormat)}
                      format={value => value}
                      allowClear={false}
                      validate={validations.required}
                    />
                  </Condition>
                  
                  <Field
                    name="education.isStudent"
                    component={renderCheckbox}
                    type="checkbox"
                    label="Still in School?"
                  />
                </Col>
              </Row>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={18}>
                  <Field
                    name="links"
                    component={renderInput}
                    type="text"
                    placeholder="Links"
                    validate={required}
                  />
                </Col>
              </Row>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={18}>
                  <Field
                    name="description"
                    component={renderTextArea}
                    type="text"
                    placeholder="Description"
                    label="Description"
                  />
                </Col>
              </Row>
            </>
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
