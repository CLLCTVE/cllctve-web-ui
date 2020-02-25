import React, {Component} from 'react';
import { Form, Field } from 'react-final-form';
import { renderInputD, renderSelectD, renderSelectA } from '../fields/renderFields';
import styled from 'styled-components';
import { DatePicker, Select, Col, Row, Button } from 'antd';

const {MonthPicker} = DatePicker;


const Container = styled.div`
  max-width: 300px;
  display: inline-block;
`;

const onSubmit = async values => {
  console.log('#onSumbit, values: ', values);
};

const OPTIONS = ['Software Development', 'Graphic Designer', 'Digital Illustrator'];

class SignUpPage extends Component {
  
  render() {
    const selectedItems = [];
    const filteredOptions = OPTIONS.filter(option => !selectedItems.includes(option));
    
    return (
      <Container>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <Row gutter={8}>
                <Field
                  name="firstName"
                  component={renderInputD}
                  type="text"
                  placeholder="First Name"
                />
              </Row>
              <Row>
                <Field
                  name="lastName"
                  component={renderInputD}
                  type="text"
                  placeholder="Last Name"
                />
              </Row>
              <div>
                <Field
                  name="creativeName"
                  component={renderInputD}
                  type="text"
                  placeholder="Creative Name"
                />
              </div>
              
              <div>
                <Field
                  name="skills"
                  component={renderSelectA}
                  options={OPTIONS}
                  mode="multiple"
                  placeholder="Skills"
                  value={selectedItems}
                  format={value => value || []}
                />
              </div>
              <div>
                <MonthPicker/>
              </div>
              <div>
                <Field
                  name="email"
                  component={renderInputD}
                  type="text"
                  placeholder="creative@cllctve.edu"
                />
              </div>
              <div>
                <Field
                  name="password"
                  component={renderInputD}
                  type="text"
                  placeholder="password"
                />
              </div>
              <div className="buttons">
                <Button
                  type="submit"
                  disabled={submitting || pristine}
                  htmlType="submit"
                >
                  Submit
                </Button>
                <Button
                  type="button"
                  onClick={form.reset}
                  disabled={submitting || pristine}
                >
                  Reset
                </Button>
              </div>
              <pre>{JSON.stringify(values, 0, 2)}</pre>
            </form>
          )}
        />
      </Container>
    );
  }
}

export default SignUpPage;

