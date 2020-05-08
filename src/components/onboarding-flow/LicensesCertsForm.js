import { Button, Col, Form, Row, Space } from 'antd';
import { Field as FField } from 'react-final-form';
import {
  ConditionalRender,
  renderAntInput,
  renderAntMonthPicker,
  renderCheckbox, renderInput, renderMonthPicker,
  renderTextArea, StyledButton, StyledDivider
} from '../fields/renderFields';
import * as validations from '../../utils/validations';
import { FieldArray as FFieldArray } from 'react-final-form-arrays';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import React from 'react';

const monthFormat = 'MM-YYYY';

export const LicensesCertsForm = () => (
  <>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col span={24}>
        <FField
          name="licensesCert.title"
          component={renderInput}
          type="text"
          placeholder="Name of Cert"
        />
      </Col>
    </Row>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col span={12}>
        <FField
          name="licensesCert.organization"
          component={renderInput}
          type="text"
          placeholder="Associated With"
        />
      </Col>
      <Col span={12}>
        <FField
          name="licensesCert.organization"
          component={renderInput}
          type="text"
          placeholder="Issuing Organization"
        />
      </Col>
    </Row>
    <Row>
      <Col span={12}>
        <FField
          name="licensesCert.issuedMonthYear"
          placeholder="Issued Date"
          component={renderMonthPicker}
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
            disabledDate={(val, val2) => {console.log('val: ', val); console.log('val2', val2);}}
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
        />
      </Col>
    </Row>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col span={24}>
        <FField
          name="licensesCert.links"
          component={renderInput}
          type="text"
          placeholder="Links"
        />
      </Col>
    </Row>
    <FFieldArray name='licensesCerts'>
      {({fields, meta}) => {
        return (
          <Space direction="vertical">
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
                        name={`${name}.title`}
                        component={renderInput}
                        type="text"
                        placeholder="Name of Cert"
                        validate={validations.required}
                      />
                    </Col>
                  </Row>
                  <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col span={24}>
                      <FField
                        name={`${name}.organization`}
                        component={renderInput}
                        type="text"
                        placeholder="Issuing Organization"
                      />
                    </Col>
                  </Row>
                  <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 16]}>
                    <Col span={12}>
                      <FField
                        name={`${name}.issuedMonthYear`}
                        placeholder="Issued Date"
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
          </Space>
        )
      }}
    </FFieldArray>
  </>
);
