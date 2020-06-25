import { Button, Col, Form, Row } from 'antd';
import { Field as FField } from 'react-final-form';
import {
  ConditionalRender,
  renderAntMonthPicker,
  renderCheckbox,
  renderTextArea,
  StyledSpace,
  StyledDivider
} from '../fields/renderFields';
import {renderAntInput} from '../fields/InputFields';
import * as validations from '../../../utils/validations';
import { FieldArray as FFieldArray } from 'react-final-form-arrays';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import React from 'react';

const monthFormat = 'MM-YYYY';

export const FormOne = () => (
  <>
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <FField
          name="experience.title"
          component={renderAntInput}
          type="text"
          placeholder="Position*"
          // validate={validations.required}
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
          // validate={validations.required}
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
          // validate={validations.required}
        />
      </Col>
      <Col span={4}>
        <FField
          name="experience.state"
          component={renderAntInput}
          type="text"
          placeholder="State*"
          // validate={validations.required}
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
          // validate={validations.required}
        />
      </Col>
      <Col span={6}>
        <ConditionalRender when="experience.currentEmployer" is={false}>
          <FField
            name="experience.endDate"
            placeholder="End Date*"
            component={renderAntMonthPicker}
            monthFormat={monthFormat}
            // disabledDate={disabledDate}
            parse={value => value || value.format(monthFormat)}
            format={value => value}
            allowClear={false}
            // validate={validations.required}
          />
        </ConditionalRender>
      
        <FField
          name="experience.currentEmployer"
          component={renderCheckbox}
          type="checkbox"
          label="Current Employer?"
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
          <StyledSpace direction="vertical">
            {fields.map((name, index) => {
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
                          fields.remove(index);
                        }}
                      />
                    </Col>
                    <Col span={24}>
                      <FField
                        name={`${name}.position`}
                        component={renderAntInput}
                        type="text"
                        placeholder="Position*"
                        // validate={validations.required}
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
                        // validate={validations.required}
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
                        // validate={validations.required}
                      />
                    </Col>
                    <Col span={4}>
                      <FField
                        name={`${name}.state`}
                        component={renderAntInput}
                        type="text"
                        placeholder="State*"
                        // validate={validations.required}
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
                        // validate={validations.required}
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
                        // validate={validations.required}
                      />
                    </Col>
                  </Row>
                  <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 16]}>
                    <Col span={24}>
                      <FField
                        name={`${name}.links`}
                        component={renderAntInput}
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
  </>
);