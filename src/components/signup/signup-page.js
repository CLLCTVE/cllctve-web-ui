import React, {Component} from 'react';
import { Form, Field } from 'react-final-form';
import { renderInputD } from '../fields/renderFields';
import styled from 'styled-components';
import { Input, Col, Row, Button, AutoComplete } from 'antd';

const InputGroup = Input.Group;

const Container = styled.div`
  max-width: 300px;
  display: inline-block;
`;

const AutoCompleteC = styled(AutoComplete)`
  width: 200px;
  border-top-width: 0 !important;
  border-left-width: 0 !important;
  border-right-width: 0 !important;
`;

const onSubmit = async values => {
  console.log('#onSumbit, values: ', values);
};

const onSelect = (value) => {
  console.log('onSelect', value);
};

class SignUpPage extends Component {
  state = {
    value: '',
    dataSource: [],
  };
  
  onSearch = searchText => {
    console.log('SignUpPage#onSearch, searchText: ', searchText);
    this.setState({
      dataSource: !searchText ? [] : [searchText, searchText.repeat(2), searchText.repeat(3)],
    });
  };
  
  render() {
    const { dataSource, value } = this.state;
    
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
                <AutoCompleteC
                  dataSource={dataSource}
                  onSelect={onSelect}
                  onSearch={this.onSearch}
                  placeholder="input here"
                />
              </div>
              <Row gutter={8}>
                <Col span={12}>
                  <Field
                    name="gradMonth"
                    component={renderInputD}
                    type="text"
                    placeholder="Grad Month"
                  />
                </Col>
                <Col span={12}>
                  <Field
                    name="gradYear"
                    component={renderInputD}
                    type="text"
                    placeholder="Grad Year"
                  />
                </Col>
              </Row>
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

