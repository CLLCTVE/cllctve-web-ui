import React from 'react';
import { Field as FField, Form as FForm } from 'react-final-form';
import arrayMutators from 'final-form-arrays'
import { FieldArray as FFieldArray } from 'react-final-form-arrays'
import { Form, Row, Col, Space, Button } from 'antd';
import {
  StyledDivider,
  StyledButton,
  renderTextArea,
  renderAntInput,
  renderAntMonthPicker,
  ConditionalRender,
  renderCheckbox
} from '../fields/renderFields';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import * as validations from '../../utils/validations';

const monthFormat = 'MM-YYYY';

const rules = [{required: true}];

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

export const FormListForm = ({educationsList = []}) => (
  <FForm
    onSubmit={onSubmit}
    mutators={{
      ...arrayMutators
    }}
    initialValues={{isEnrolled: false}}
    render={({
               handleSubmit,
               form: {
                 mutators: {push, remove}
               }, // injected from final-form-arrays above
               pristine,
               submitting,
               values,
               dirtySinceLastSubmit,
             }) => {
      return (
        <>
          <Form onFinish={onSubmit}>
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
            <Form.Item>
              <StyledButton
                size="large"
                shape="round"
                type="button"
                htmlType="submit"
                disabled={submitting}
                loading={submitting}
              >
                Submit
              </StyledButton>
            </Form.Item>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </Form>
        </>
      )
    }}
  />
);
