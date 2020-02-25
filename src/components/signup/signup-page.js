import React, {Component} from 'react';
import { Form, Field } from 'react-final-form';
import { renderInput, renderMonthPicker, renderSelect } from '../fields/renderFields';
import styled from 'styled-components';
import { Row, Button } from 'antd';
import moment from "moment";

const monthFormat = 'MM-YYYY';




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
    
    return (
      <Container>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <Row gutter={8}>
                <Field
                  name="firstName"
                  component={renderInput}
                  type="text"
                  placeholder="First Name"
                />
              </Row>
              <Row>
                <Field
                  name="lastName"
                  component={renderInput}
                  type="text"
                  placeholder="Last Name"
                />
              </Row>
              <div>
                <Field
                  name="creativeName"
                  component={renderInput}
                  type="text"
                  placeholder="Creative Name"
                />
              </div>
              
              <div>
                <Field
                  name="skills"
                  component={renderSelect}
                  options={OPTIONS}
                  mode="multiple"
                  placeholder="Skills"
                  value={[]}
                  format={value => value || []}
                />
              </div>
              <div>
                <Field
                  name="gradMonthYear"
                  component={renderMonthPicker}
                  monthFormat={monthFormat}
                  parse={value => value || value.format(monthFormat)}
                  format={value => value}
                />
              </div>
              <div>
                <Field
                  name="email"
                  component={renderInput}
                  type="text"
                  placeholder="creative@cllctve.edu"
                />
              </div>
              <div>
                <Field
                  name="password"
                  component={renderInput}
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

