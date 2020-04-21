import React from 'react';
import {Form, List, Input, Button, Row, Col} from 'antd';
import { StyledButton, renderAntInput } from '../fields/renderFields';
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const rules = [{ required: true }];

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

export const FormListForm  = ({educationsList = []}) => (
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
                  <Form.Item
                    name={"schoolName"}
                    fieldKey={"schoolName"}
                    rules={rules}
                  >
                    <Input placeholder="School Name" />
                  </Form.Item>
                </Col>
                <Col>
                  <Form.Item
                    name={"degreeType"}
                    fieldKey={"degreeType"}
                    rules={rules}
                  >
                    <Input placeholder="Degree Type" />
                  </Form.Item>
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
                      <Form.Item
                        name={[field.name, "schoolName"]}
                        fieldKey={[field.fieldKey, "schoolName"]}
                        rules={rules}
                      >
                        <Input placeholder="School Name" />
                      </Form.Item>
                    </Col>
                    <Col>
                      <Form.Item
                        name={[field.name, "degreeType"]}
                        fieldKey={[field.fieldKey, "degreeType"]}
                        rules={rules}
                      >
                        <Input placeholder="Degree Type" />
                      </Form.Item>
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
                <Button
                  type="dashed"
                  onClick={() => {
                    add();
                  }}
                  style={{ width: "100%" }}
                >
                  <PlusOutlined /> Add field
                </Button>
              </Form.Item>
            </div>
          )}}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  </>
);
