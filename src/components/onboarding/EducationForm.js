import { Col, Row } from 'antd';
import { Field } from 'react-final-form';
import { renderCheckbox, renderInput, renderMonthPicker, renderTextArea, ConditionalRender } from '../fields/renderFields';
import * as validations from '../../utils/validations';
import React from 'react';
const monthFormat = 'MM-YYYY';
const required = value => (value ? undefined : 'Required')

export const EducationForm = () => (
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
        <ConditionalRender when="education.isStudent" is={false}>
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
        </ConditionalRender>
        
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
)
