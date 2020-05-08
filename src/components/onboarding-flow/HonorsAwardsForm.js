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

export const HonorsAwardsForm = ({remove, push}) => (
  <>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col span={18}>
        <FField
          name="honorsAward.title"
          component={renderInput}
          type="text"
          placeholder="Title"
        />
      </Col>
    </Row>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col span={12}>
        <FField
          name="honorsAward.associatedWith"
          component={renderInput}
          type="text"
          placeholder="Associated With"
        />
      </Col>
      <Col span={12}>
        <FField
          name="honorsAward.issuer"
          component={renderInput}
          type="text"
          placeholder="Issuer"
        />
      </Col>
    </Row>
    <Row>
      <Col span={10}>
        <FField
          name="honorsAward.issuedMonthYear"
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
        <FField
          name="honorsAward.links"
          component={renderInput}
          type="text"
          placeholder="Links"
        />
      </Col>
    </Row>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col span={18}>
        <FField
          name="honorsAward.description"
          component={renderTextArea}
          type="text"
          placeholder="Description"
          label="Description"
        />
      </Col>
    </Row>
    <FFieldArray name='honorsAwards'>
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
                        placeholder="Title"
                        validate={validations.required}
                      />
                    </Col>
                  </Row>
                  <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col span={12}>
                      <FField
                        name={`${name}.associatedWith`}
                        component={renderInput}
                        type="text"
                        placeholder="Associated With"
                      />
                    </Col>
                    <Col span={12}>
                      <FField
                        name={`${name}.issuer`}
                        component={renderInput}
                        type="text"
                        placeholder="Issuer"
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
                  <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 16]}>
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
          </Space>
        )
      }}
    </FFieldArray>
  </>
);
