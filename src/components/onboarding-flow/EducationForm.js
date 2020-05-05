import { Button, Col, Form, Row, Space } from 'antd';
import { Field as FField } from 'react-final-form';
import {
  ConditionalRender,
  renderAntInput,
  renderAntMonthPicker,
  renderCheckbox,
  renderTextArea, StyledButton, StyledDivider
} from '../fields/renderFields';
import * as validations from '../../utils/validations';
import { FieldArray as FFieldArray } from 'react-final-form-arrays';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import React from 'react';

const monthFormat = 'MM-YYYY';

export const EducationForm = ({remove, push}) => (
  <>
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <FField
          name="schoolName"
          component={renderAntInput}
          type="text"
          placeholder="School Name*"
          validate={validations.required}
        />
      </Col>
    </Row>
    <Row gutter={[16, 16]}>
      <Col span={8}>
        <FField
          name="degreeType"
          component={renderAntInput}
          type="text"
          placeholder="Degree Type*"
          validate={validations.required}
        />
      </Col>
      <Col span={16}>
        <FField
          name="major"
          component={renderAntInput}
          type="text"
          placeholder="Declared Major*"
          validate={validations.required}
        />
      </Col>
    </Row>
    <Row gutter={[16, 16]}>
      <Col span={8}>
        <FField
          name="city"
          component={renderAntInput}
          type="text"
          placeholder="City*"
          validate={validations.required}
        />
      </Col>
      <Col span={4}>
        <FField
          name="state"
          component={renderAntInput}
          type="text"
          placeholder="State*"
          validate={validations.required}
        />
      </Col>
      <Col span={6}>
        <FField
          name="startMonthYear"
          placeholder="Start Date MM-YY*"
          component={renderAntMonthPicker}
          monthFormat={monthFormat}
          parse={value => value || value.format(monthFormat)}
          format={value => value}
          allowClear={false}
          validate={validations.required}
        />
      </Col>
      <Col span={6}>
        <ConditionalRender when="isEnrolled" is={false}>
          <FField
            name="gradMonthYear"
            placeholder="Graduation Date MM-YY*"
            component={renderAntMonthPicker}
            monthFormat={monthFormat}
            parse={value => value || value.format(monthFormat)}
            format={value => value}
            allowClear={false}
            validate={validations.required}
          />
        </ConditionalRender>
        
        <FField
          name="isEnrolled"
          component={renderCheckbox}
          type="checkbox"
          label="Currently Enrolled as a Student?"
        />
      </Col>
    </Row>
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <FField
          name="description"
          component={renderTextArea}
          type="text"
          placeholder="Description"
          label="Description"
        />
      </Col>
    </Row>
    <FFieldArray name='educations'>
      {({fields, meta}) => {
        console.log('come thru fields: ', fields);
        console.log('come thru meta: ', meta);
        
        /**
         * `fields` internal fill with `name`, `key`, `fieldKey` props.
         * You can extends this into sub field to support multiple dynamic fields.
         */
        return (
          <Space direction="vertical">
            {fields.map((name, index) => {
              console.log('field: ', name);
              console.log('index: ', index);
              return (
                <div key={name}>
                  <StyledDivider/>
                  <Row gutter={[16, 16]}>
                    <Col flex="none">
                      <MinusCircleOutlined
                        className="dynamic-delete-button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          remove('educations', index);
                        }}
                      />
                    </Col>
                    <Col span={24}>
                      <FField
                        name={`${name}.schoolName`}
                        component={renderAntInput}
                        type="text"
                        placeholder="School Name"
                        validate={validations.required}
                      />
                    </Col>
                  </Row>
                  <Row gutter={[16, 16]}>
                    <Col span={8}>
                      <FField
                        name={`${name}.degreeType`}
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
                  <Row gutter={[16, 16]}>
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
                        placeholder="Start Date MM-YY"
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
                        placeholder="Graduation Date MM-YY"
                        component={renderAntMonthPicker}
                        monthFormat={monthFormat}
                        parse={value => value || value.format(monthFormat)}
                        format={value => value}
                        allowClear={false}
                        validate={validations.required}
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
            <Row gutter={[16, 16]}>
              <Col span={4} offset={20}>
                <Form.Item>
                  <Button
                    type="link"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      push('educations', undefined);
                    }}
                  >
                    <PlusOutlined/> Add More
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Space>
        )
      }}
    </FFieldArray>
  </>
);
