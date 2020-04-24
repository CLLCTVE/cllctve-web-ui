import React from 'react';
import {Field as FField, Form as FForm} from 'react-final-form';
import {Form, List, Input, Button, Row, Col} from 'antd';
import { StyledButton, renderAntInput } from '../fields/renderFields';
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import * as validations from '../../utils/validations';

const rules = [{ required: true }];

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

export const FormListForm  = ({educationsList = []}) => (
  <FForm
    onSubmit={onSubmit}
    initialValues={{ stooge: 'larry', employed: false }}
    render={({ handleSubmit, form, submitting, pristine, values }) => (
      <>
        <Form onFinish={onSubmit}>
          <Form.List name='educations'>
            {(fields, {add, remove}) => {
              /**
               * `fields` internal fill with `name`, `key`, `fieldKey` props.
               * You can extends this into sub field to support multiple dynamic fields.
               */
              return (
                <div>
                  <Row key="form-list">
                    <Col>
                      <FField
                        name="schoolName"
                        component={renderAntInput}
                        type="text"
                        placeholder="School Name"
                        validate={validations.required}
                      />
                    </Col>
                    <Col>
                      <FField
                        name="degreeType"
                        component={renderAntInput}
                        type="text"
                        placeholder="Degree Type"
                        validate={validations.required}
                      />
                    </Col>
                    <Col flex="none">
                      <MinusCircleOutlined
                        className="dynamic-delete-button"
                        onClick={() => {
                          debugger;
                        }}
                      />
                    </Col>
                  </Row>
                  {fields.map((field, index) => (
                    <Row key={field.key}>
                      <Col>
                        <FField
                          name="schoolName"
                          component={renderAntInput}
                          type="text"
                          placeholder="School Name"
                          validate={validations.required}
                        />
                      </Col>
                      <Col>
                        <FField
                          name="degreeType"
                          component={renderAntInput}
                          type="text"
                          placeholder="Degree Type"
                          validate={validations.required}
                        />
                      </Col>
                      <Col flex="none">
                        <MinusCircleOutlined
                          className="dynamic-delete-button"
                          onClick={() => {
                            console.log('dynamic delete handled');
                          }}
                        />
                      </Col>
                      <Col flex="none">
                        <MinusCircleOutlined
                          className="dynamic-delete-button"
                          onClick={() => {
                            remove(field.name);
                          }}
                        />
                      </Col>
                    </Row>
                  ))}
                  <Form.Item>
                    <StyledButton
                      type="dashed"
                      onClick={() => {
                        add();
                      }}
                      style={{ width: "100%" }}
                    >
                      <PlusOutlined /> Add field
                    </StyledButton>
                  </Form.Item>
                </div>
              )}}
          </Form.List>
          <Form.Item>
            <StyledButton type="primary" htmlType="submit">
              Submit
            </StyledButton>
          </Form.Item>
        </Form>
        <pre>{JSON.stringify(values, 0, 2)}</pre>
      </>
    )}
  />
);
