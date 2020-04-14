import React from 'react';
import {Field as FField, Form as FForm} from 'react-final-form';
import {Form, Button} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { renderAntInput, ConditionalRender, renderCheckbox, renderAntMonthPicker, renderMonthPicker } from '../fields/renderFields';
import styled from 'styled-components';
import arrayMutators from 'final-form-arrays'
import { FieldArray as FFieldArray } from 'react-final-form-arrays'
import LoadingSpinner from '../../lib/components/loadingSpinner';
import * as validations from '../../utils/validations';
const monthFormat = 'MM-YYYY';

const StyledButton = styled(Button)`
  &.ant-btn {
    border: none;
    color: #ffffff;
    opacity: 1;
    background: transparent linear-gradient(101deg, #e41e84 0%, #ff6633 100%) 0% 0% no-repeat
      padding-box;

    &:hover {
      color: #ffffff;
      opacity: 0.8;
      background: transparent linear-gradient(101deg, #ff6633 0%, #e41e84 100%) 0% 0% no-repeat
        padding-box;
    }

    &:focus {
      color: #e41e84;
    }
  }
`;

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

export const FieldArrayForm = () => (
      <FForm
        initialValues={{isCurrentlyEnrolled: false}}
        onSubmit={onSubmit}
        mutators={{
          ...arrayMutators
        }}
        render={({submitError, handleSubmit, form: { mutators: { push, pop }}, submitting, errors, pristine, values}) => (
          <>
            {submitError && <div className="error">{submitError}</div>}
            <Form onFinish={handleSubmit}>
              <div>
                <FField
                  name="schoolName"
                  component={renderAntInput}
                  type="text"
                  placeholder="School"
                  validate={validations.required}
                />
                <FField
                  name="degreeType"
                  component={renderAntInput}
                  type="text"
                  placeholder="Degree Type"
                  validate={validations.required}
                />
                <FField
                  name="major"
                  component={renderAntInput}
                  type="text"
                  placeholder="Major"
                  validate={validations.required}
                />
                <FField
                  name="startMonthYear"
                  placeholder="Start Date"
                  component={renderAntMonthPicker}
                  monthFormat={monthFormat}
                  parse={value => value || value.format(monthFormat)}
                  format={value => value}
                  allowClear={false}
                  validate={validations.required}
                />
                <ConditionalRender when="isCurrentlyEnrolled" is={false}>
                  <FField
                    name="gradMonthYear"
                    placeholder="Graduation Date"
                    component={renderAntMonthPicker}
                    size="large"
                    monthFormat={monthFormat}
                    parse={value => value || value.format(monthFormat)}
                    format={value => value}
                    allowClear={false}
                    validate={validations.composeValidators(
                      validations.getValidator(values.isCurrentlyEnrolled),
                      validations.required
                    )
                    }
                  />
                </ConditionalRender>
                <FField
                  name="isCurrentlyEnrolled"
                  component={renderCheckbox}
                  type="checkbox"
                  label="Currently Enrolled as a Student?"
                />
              </div>
              <StyledButton
                size="large"
                shape="round"
                type="button"
                htmlType="submit"
                disabled={submitting || pristine}
                loading={submitting}
              >
                Submit
              </StyledButton>
            </Form>
            <h3>Values</h3>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
            <h3>Errors</h3>
            <pre>{JSON.stringify(errors, undefined, 2)}</pre>
          </>
        )}
      />
);
