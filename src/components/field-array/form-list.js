import React from 'react';
import {Field as FField, Form as FForm} from 'react-final-form';
import arrayMutators from 'final-form-arrays'
import { FieldArray as FFieldArray } from 'react-final-form-arrays'
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
    mutators={{
      ...arrayMutators
    }}
    initialValues={{ educations: [] }}
    render={({
               handleSubmit,
               form: {
                 mutators: { push, pop }
               }, // injected from final-form-arrays above
               pristine,
               form,
               submitting,
               values
    }) => (
      <>
        <Form onFinish={onSubmit}>
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
                <div>
                  {fields.map((name, index) => {
                    console.log('field: ', name);
                    console.log('index: ', index);
                    return (
                      <Row key={name.key}>
                        <Col>
                          <FField
                            name={`${name}.schoolName`}
                            component={renderAntInput}
                            type="text"
                            placeholder="School Name"
                            validate={validations.required}
                          />
                        </Col>
                        <Col>
                          <FField
                            name={`${name}.degreeType`}
                            component={renderAntInput}
                            type="text"
                            placeholder={`Degree Type + ${index +1}`}
                            validate={validations.required}
                          />
                        </Col>
                        <Col flex="none">
                          <MinusCircleOutlined
                            className="dynamic-delete-button"
                            onClick={() => {
                              console.log('dynamic delete handled');
                              pop(name.key);
                            }}
                          />
                        </Col>
                      </Row>
                    )
                  })}
                  <Form.Item>
                    <StyledButton
                      type="dashed"
                      onClick={(value) => {
                        console.log('add, value: ', value);
                        push('educations');
                      }}
                      style={{ width: "100%" }}
                    >
                      <PlusOutlined /> Add field
                    </StyledButton>
                  </Form.Item>
                </div>
              )}}
          </FFieldArray>
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
