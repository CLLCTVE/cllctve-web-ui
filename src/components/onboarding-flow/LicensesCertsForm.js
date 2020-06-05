import { Button, Col, Form, Row } from 'antd';
import { Field as FField } from 'react-final-form';
import {
  ConditionalRender,
  renderAntMonthPicker,
  renderCheckbox,
  renderTextArea,
  StyledDivider,
  StyledSpace
} from '../fields/renderFields';
import {renderAntInput} from '../fields/InputFields';
import * as validations from '../../utils/validations';
import { FieldArray as FFieldArray } from 'react-final-form-arrays';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import React from 'react';

const monthFormat = 'MM-YYYY';

export const LicensesCertsForm = () => (
  <div style={{}}>
    <Row gutter={[{xs: 8, sm: 16, md: 24, lg: 32}, 16]}>
      <Col span={24}>
        <FField
          name="licensesCert.title"
          component={renderAntInput}
          type="text"
          placeholder="Name of Cert"
        />
      </Col>
    </Row>
    <Row gutter={[{xs: 8, sm: 16, md: 24, lg: 32}, 16]}>
      <Col span={24}>
        <FField
          name="licensesCert.organization"
          component={renderAntInput}
          type="text"
          placeholder="Licensing Organization"
        />
      </Col>
    </Row>
    <Row gutter={[{xs: 8, sm: 16, md: 24, lg: 32}, 16]}>
      <Col span={12}>
        <FField
          name="licensesCert.issuedMonthYear"
          placeholder="Start Date*"
          component={renderAntMonthPicker}
          monthFormat={monthFormat}
          parse={value => value || value.format(monthFormat)}
          format={value => value}
          allowClear={false}
          // validate={validations.required}
        />
      </Col>
      <Col span={12}>
        <ConditionalRender when="licensesCert.canExpire" is={true}>
          <FField
            name="licensesCert.expMonthYear"
            placeholder="Expiration Date*"
            component={renderAntMonthPicker}
            monthFormat={monthFormat}
            parse={value => value || value.format(monthFormat)}
            format={value => value}
            allowClear={false}
            // validate={validations.required}
          />
        </ConditionalRender>
        
        <FField
          name="licensesCert.canExpire"
          component={renderCheckbox}
          type="checkbox"
          label="This credential will expire"
          defaultValue={false}
        />
      </Col>
    </Row>
    <Row gutter={[{xs: 8, sm: 16, md: 24, lg: 32}, 16]}>
      <Col span={24}>
        <FField
          name="licensesCert.links"
          component={renderAntInput}
          type="text"
          placeholder="Links"
        />
      </Col>
    </Row>
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <FField
          name="licensesCert.description"
          component={renderTextArea}
          type="text"
          placeholder="Description"
          label="Description"
        />
      </Col>
    </Row>
    <FFieldArray name='licensesCerts'>
      {({fields, meta}) => {
        return (
          <StyledSpace direction="vertical">
            {fields.map((name, index) => {
              return (
                <div key={name} style={{}}>
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
                        name={`${name}.title`}
                        component={renderAntInput}
                        type="text"
                        placeholder="Name of Cert"
                        // validate={validations.required}
                      />
                    </Col>
                  </Row>
                  <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 16]}>
                    <Col span={24}>
                      <FField
                        name={`${name}.organization`}
                        component={renderAntInput}
                        type="text"
                        placeholder="Licensing Organization"
                        // validate={validations.required}
                      />
                    </Col>
                  </Row>
                  <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 16]}>
                    <Col span={12}>
                      <FField
                        name={`${name}.issuedMonthYear`}
                        placeholder="Start Date*"
                        component={renderAntMonthPicker}
                        monthFormat={monthFormat}
                        parse={value => value || value.format(monthFormat)}
                        format={value => value}
                        allowClear={false}
                        // validate={validations.required}
                      />
                    </Col>
                    <Col span={12}>
                      <ConditionalRender when={`${name}.canExpire`} is={true}>
                        <FField
                          name={`${name}.expMonthYear`}
                          placeholder="Expiration Date*"
                          component={renderAntMonthPicker}
                          monthFormat={monthFormat}
                          parse={value => value || value.format(monthFormat)}
                          format={value => value}
                          allowClear={false}
                          // validate={validations.required}
                        />
                      </ConditionalRender>
    
                      <FField
                        name={`${name}.canExpire`}
                        component={renderCheckbox}
                        type="checkbox"
                        label="This credential will expire"
                        defaultValue={false}
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
