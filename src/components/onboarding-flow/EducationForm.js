import { Button, Col, Form, Row } from 'antd';
import { Field as FField } from 'react-final-form';
import {
  ConditionalRender,
  renderAntInput,
  renderAntCheckbox,
  renderAntMonthPicker,
  disabledDate,
  renderInput,
  renderTextArea, StyledSpace, StyledDivider
} from '../fields/renderFields';
import * as validations from '../../utils/validations';
import { FieldArray as FFieldArray } from 'react-final-form-arrays';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import React from 'react';

const monthFormat = 'MM-YYYY';

export const EducationForm = () => (
  <div style={{}}>
    <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 16]}>
      <Col span={24}>
        <FField
          name="education.school"
          component={renderAntInput}
          type="text"
          placeholder="School Name*"
          // validate={validations.required}
        />
      </Col>
    </Row>
    <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 16]}>
      <Col span={8}>
        <FField
          name="education.degree"
          component={renderAntInput}
          type="text"
          placeholder="Degree Type*"
          // validate={validations.required}
        />
      </Col>
      <Col span={16}>
        <FField
          name="education.major"
          component={renderAntInput}
          type="text"
          placeholder="Declared Major*"
          // validate={validations.required}
        />
      </Col>
    </Row>
    <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 16]}>
      <Col span={8}>
        <FField
          name="education.city"
          component={renderAntInput}
          type="text"
          placeholder="City*"
          // validate={validations.required}
        />
      </Col>
      <Col span={4}>
        <FField
          name="education.state"
          component={renderAntInput}
          type="text"
          placeholder="State*"
          // validate={validations.required}
        />
      </Col>
      <Col span={6}>
        <FField
          name="education.startMonthYear"
          placeholder="Start Date*"
          component={renderAntMonthPicker}
          monthFormat={monthFormat}
          parse={value => value || value.format(monthFormat)}
          format={value => value}
          allowClear={false}
          // validate={validations.required}
        />
      </Col>
      <Col span={6}>
        <ConditionalRender when="education.isEnrolled" is={false}>
          <FField
            name="education.gradMonthYear"
            placeholder="Grad Date*"
            component={renderAntMonthPicker}
            monthFormat={monthFormat}
            disabledDate={(val, val2) => {console.log('val: ', val); console.log('val2', val2);}}
            parse={value => value || value.format(monthFormat)}
            format={value => value}
            allowClear={false}
            // validate={validations.required}
          />
        </ConditionalRender>
        
        <FField
          name="education.isEnrolled"
          component={renderAntCheckbox}
          type="checkbox"
          label="Currently Enrolled as a Student?"
          initialValue={false}
        />
      </Col>
    </Row>
    <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 16]}>
      <Col span={24}>
        <FField
          name="education.links"
          component={renderInput}
          type="text"
          placeholder="Links"
        />
      </Col>
    </Row>
    <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 16]}>
      <Col span={24}>
        <FField
          name="education.description"
          component={renderTextArea}
          type="text"
          placeholder="Description"
          label="Description"
        />
      </Col>
    </Row>
    <FFieldArray name='educations'>
      {({fields, meta}) => {
        return (
          <StyledSpace direction="vertical">
            {fields.map((name, index) => {
              return (
                <div key={name}>
                  <StyledDivider/>
                  <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 16]}>
                    <Col flex="none">
                      <MinusCircleOutlined
                        className="dynamic-delete-button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          fields.remove(index);
                        }}
                      />
                    </Col>
                    <Col span={24}>
                      <FField
                        name={`${name}.school`}
                        component={renderAntInput}
                        type="text"
                        placeholder="School Name"
                        validate={validations.required}
                      />
                    </Col>
                  </Row>
                  <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 16]}>
                    <Col span={8}>
                      <FField
                        name={`${name}.degree`}
                        component={renderAntInput}
                        type="text"
                        placeholder="Degree Type"
                        validate={validations.required}
                      />
                    </Col>
                    <Col span={16}>
                      <FField
                        name={`${name}.major`}
                        component={renderAntInput}
                        type="text"
                        placeholder="Declared Major"
                        validate={validations.required}
                      />
                    </Col>
                  </Row>
                  <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 16]}>
                    <Col span={8}>
                      <FField
                        name={`${name}.city`}
                        component={renderAntInput}
                        type="text"
                        placeholder="City"
                        validate={validations.required}
                      />
                    </Col>
                    <Col span={4}>
                      <FField
                        name={`${name}.state`}
                        component={renderAntInput}
                        type="text"
                        placeholder="State"
                        validate={validations.required}
                      />
                    </Col>
                    <Col span={6}>
                      <FField
                        
                        name={`${name}.startMonthYear`}
                        placeholder="Start Date"
                        component={renderAntMonthPicker}
                        monthFormat={monthFormat}
                        parse={value => value || value.format(monthFormat)}
                        format={value => value}
                        allowClear={false}
                        validate={validations.required}
                      />
                    </Col>
                    <Col span={6}>
                      <FField
                        name={`${name}.gradMonthYear`}
                        placeholder="Grad Date"
                        component={renderAntMonthPicker}
                        monthFormat={monthFormat}
                        disabledDate={disabledDate}
                        parse={value => value || value.format(monthFormat)}
                        format={value => value}
                        allowClear={false}
                        validate={validations.required}
                      />
                    </Col>
                  </Row>
                  <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 16]}>
                    <Col span={24}>
                      <FField
                        name={`${name}.links`}
                        component={renderInput}
                        type="text"
                        placeholder="Links"
                      />
                    </Col>
                  </Row>
                  <Row gutter={[16, 16]}>
                    <Col span={24}>
                      <FField
                        name={`${name}.description`}
                        component={renderTextArea}
                        type="text"
                        placeholder="Description"
                        label="Description"
                      />
                    </Col>
                  </Row>
                </div>
              )
            })}
            <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 16]}>
              <Col span={4} offset={20}>
                <Form.Item>
                  <Button
                    type="link"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      fields.push();
                    }}
                  >
                    <PlusOutlined/> Add More
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </StyledSpace>
        )
      }}
    </FFieldArray>
  </div>
);
