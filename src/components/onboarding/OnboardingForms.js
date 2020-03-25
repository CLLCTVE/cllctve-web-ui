import { Col, Row } from 'antd';
import { Field } from 'react-final-form';
import {
  renderCheckbox,
  renderInput,
  renderMonthPicker,
  renderTextArea,
  ConditionalRender,
  renderSelect,
  StyledLink
} from '../fields/renderFields';
import * as validations from '../../utils/validations';
import React from 'react';
import { SKILLS } from '../../lib/util';
const monthFormat = 'MM-YYYY';
const required = value => (value ? undefined : 'Required')

export const OnboardingForms = () => (
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
          name="education.links"
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
          name="education.description"
          component={renderTextArea}
          type="text"
          placeholder="Description"
          label="Description"
        />
      </Col>
    </Row>
  </>
);

export const SkillsForm = () => (
  <>
    <Field
      name="skills"
      component={renderSelect}
      options={SKILLS}
      mode="multiple"
      placeholder="Skills"
      size="large"
      value={[]}
      format={value => value || []}
    />
  </>
);

export const ExperienceForm = () => (
  <>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col span={18}>
        <Field
          name="experience.position"
          component={renderInput}
          type="text"
          placeholder="Position"
        />
      </Col>
    </Row>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col span={9}>
        <Field
          name="experience.projectBrandTitle"
          component={renderInput}
          type="text"
          placeholder="Company Name/Project Title"
        />
      </Col>
    </Row>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col span={5}>
        <Field
          name="experience.city"
          component={renderInput}
          type="text"
          placeholder="City"
          validate={required}
        />
      </Col>
      <Col span={5}>
        <Field
          name="experience.state"
          component={renderInput}
          type="text"
          placeholder="State"
          validate={required}
        />
      </Col>
      <Col span={4}>
        <Field
          name="experience.startMonthYear"
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
        <ConditionalRender when="experience.isEmployed" is={true}>
          <Field
            name="experience.endMonthYear"
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
          name="experience.isEmployed"
          component={renderCheckbox}
          type="checkbox"
          label="Currently Working Here?"
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
          name="experience.description"
          component={renderTextArea}
          type="text"
          placeholder="Description"
          label="Description"
        />
      </Col>
    </Row>
  </>
);

export const HonorsAwardsForm = () => (
  <>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col span={18}>
        <Field
          name="honorsAwards.title"
          component={renderInput}
          type="text"
          placeholder="Title"
        />
      </Col>
    </Row>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col span={9}>
        <Field
          name="honorsAwards.associatedWith"
          component={renderInput}
          type="text"
          placeholder="Company Name/Project Title"
        />
      </Col>
      <Col span={9}>
        <Field
          name="honorsAwards.issuer"
          component={renderInput}
          type="text"
          placeholder="Company Name/Project Title"
        />
      </Col>
    </Row>
    <Row>
      <Col span={10}>
        <Field
          name="honorsAwards.awardMonthYear"
          component={renderMonthPicker}
          monthFormat={monthFormat}
          parse={value => value || value.format(monthFormat)}
          format={value => value}
          allowClear={false}
          validate={validations.required}
        />
      </Col>
    </Row>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col span={18}>
        <Field
          name="honorsAwards.links"
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
          name="honorsAwards.description"
          component={renderTextArea}
          type="text"
          placeholder="Description"
          label="Description"
        />
      </Col>
    </Row>
  </>
);
