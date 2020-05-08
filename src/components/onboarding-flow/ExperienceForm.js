import { Button, Col, Form, Row, Space } from 'antd';
import { Field as FField } from 'react-final-form';
import {
  ConditionalRender,
  renderAntInput,
  renderAntMonthPicker,
  renderCheckbox, renderInput,
  renderTextArea, StyledButton, StyledDivider
} from '../fields/renderFields';
import * as validations from '../../utils/validations';
import { FieldArray as FFieldArray } from 'react-final-form-arrays';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import React from 'react';

const monthFormat = 'MM-YYYY';

export const ExperienceForm = () => (
  <>
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <FField
          name="experience.position"
          component={renderAntInput}
          type="text"
          placeholder="Position*"
          validate={validations.required}
        />
      </Col>
    </Row>
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <FField
          name="experience.company"
          component={renderAntInput}
          type="text"
          placeholder="Company Name/Project Title*"
          validate={validations.required}
        />
      </Col>
    </Row>
    <Row gutter={[16, 16]}>
      <Col span={8}>
        <FField
          name="experience.city"
          component={renderAntInput}
          type="text"
          placeholder="City*"
          validate={validations.required}
        />
      </Col>
      <Col span={4}>
        <FField
          name="experience.state"
          component={renderAntInput}
          type="text"
          placeholder="State*"
          validate={validations.required}
        />
      </Col>
      <Col span={6}>
        <FField
          name="experience.startDate"
          placeholder="Start Date*"
          component={renderAntMonthPicker}
          monthFormat={monthFormat}
          parse={value => value || value.format(monthFormat)}
          format={value => value}
          allowClear={false}
          validate={validations.required}
        />
      </Col>
      <Col span={6}>
        <ConditionalRender when="experience.currentlyWorking" is={false}>
          <FField
            name="experience.endDate"
            placeholder="End Date*"
            component={renderAntMonthPicker}
            monthFormat={monthFormat}
            parse={value => value || value.format(monthFormat)}
            format={value => value}
            allowClear={false}
            validate={validations.required}
          />
        </ConditionalRender>
      
        <FField
          name="experience.currentlyWorking"
          component={renderCheckbox}
          type="checkbox"
          label="Currently Employed here?"
        />
      </Col>
    </Row>
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <FField
          name="experience.description"
          component={renderTextArea}
          type="text"
          placeholder="Description"
          label="Description"
        />
      </Col>
    </Row>
    <FFieldArray name='experiences'>
      {({fields, meta}) => {
        return (
          <Space direction="vertical">
            {fields.map((name, index) => {
              return (
                <div key={name}>
                  <StyledDivider/>
                  <Row gutter={[16, 16]}>
                    <Col flex="none">
                      <MinusCircleOutlined
                        className="dynamic-delete-button"
                        onClick={(e) => {
                          debugger;
                          e.preventDefault();
                          e.stopPropagation();
                          fields.remove('educations', index);
                        }}
                      />
                    </Col>
                    <Col span={24}>
                      <FField
                        name={`${name}.position`}
                        component={renderAntInput}
                        type="text"
                        placeholder="Position*"
                        validate={validations.required}
                      />
                    </Col>
                  </Row>
                  <Row gutter={[16, 16]}>
                    <Col span={24}>
                      <FField
                        name={`${name}.company`}
                        component={renderAntInput}
                        type="text"
                        placeholder="Company Name/Project Title*"
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
                        placeholder="City*"
                        validate={validations.required}
                      />
                    </Col>
                    <Col span={4}>
                      <FField
                        name={`${name}.state`}
                        component={renderAntInput}
                        type="text"
                        placeholder="State*"
                        validate={validations.required}
                      />
                    </Col>
                    <Col span={6}>
                      <FField
                        name={`${name}.startDate`}
                        placeholder="Start Date*"
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
                        name={`${name}.endDate`}
                        placeholder="End Date*"
                        component={renderAntMonthPicker}
                        monthFormat={monthFormat}
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
            <Row gutter={[16, 16]}>
              <Col span={4} offset={20}>
                <Form.Item>
                  <Button
                    type="link"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      fields.push('experiences', undefined);
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
