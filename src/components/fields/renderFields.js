import React from 'react';
import { DatePicker, Input, Select, Checkbox, Button } from 'antd';
import styled from 'styled-components';
import { Field } from 'react-final-form';
const { TextArea } = Input;

const {MonthPicker} = DatePicker;

const StyledInput = styled(Input)`
  background: none;
  -webkit-appearance: none;
  outline-color: transparent;
  outline-style: none;

  &.ant-input-affix-wrapper:hover,
  &.ant-input-affix-wrapper-focused {
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px !important;
    border-color: #ff6633;
  }

  &.ant-input,
  &.ant-input-focused {
    color: #ffffff;
    background: none;
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px !important;
    margin-bottom: 1em;

    &:hover,
    &:focus {
      color: #ffffff;
      border-top-width: 0px;
      border-left-width: 0px;
      border-right-width: 0px !important;
      border-color: #ff6633;
    }
  }
`;

const StyledTextArea = styled(TextArea)`
  &.ant-input,
  &.ant-input-focused {
    color: #ffffff;
    background: none;
    
    &:hover,
    &:focus {
      color: #ffffff;
      border-color: #ff6633;
    }
  }
  
  &.ant-input-affix-wrapper:hover,
  &.ant-input-affix-wrapper-focused {
    border-color: #ff6633;
  }
`;

export const StyledButton = styled(Button)`
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

const StyledPasswordInput = styled(Input.Password)`
  color: white;

  &.ant-input-affix-wrapper:hover,
  &.ant-input-affix-wrapper-focused {
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px !important;
    border-color: #ff6633;
  }

  &.ant-input-password {
    color: white;
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    margin-bottom: 1em;
    background: none !important;
  }

  &.ant-input {
    color: white;
    background: none !important;
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    margin-bottom: 1em;
  }
`;

const StyledMonthPicker = styled(MonthPicker)`
  background: none;

  &.ant-picker {
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    margin-bottom: 1em;
    background: none;
  }

  &.ant-picker:hover,
  &.ant-picker-focused {
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px !important;
    border-color: #ff6633;
  }

  &.ant-picker-input {
    color: #ffffff;
  }
`;

export const renderInput = ({input, placeholder, label, meta}) => (
  <>
    <StyledInput {...input} placeholder={placeholder || label} />
    {(meta.error || meta.submitError) && meta.touched && (
      <span className="error">{meta.error || meta.submitError}</span>
    )}
  </>
);

export const renderPasswordInput = ({input, placeholder, label, meta}) => (
  <div>
    <StyledPasswordInput {...input} placeholder={placeholder} label={label} />
    {meta.error && meta.touched && <span className="error">{meta.error}</span>}
  </div>
);

export const renderSelect = ({input, options, mode, placeholder}) => {
  return (
    <Select {...input} mode={mode} placeholder={placeholder}>
      {options
        .filter(o => !input.value.includes(o))
        .map((option, index) => (
          <Select.Option key={index} value={option}>
            {option}
          </Select.Option>
        ))}
    </Select>
  );
};

export const renderMonthPicker = ({input, monthFormat, allowClear}) => {
  return <StyledMonthPicker size="large" {...input} format={monthFormat} allowClear={allowClear} />;
};

export const normalizePhone = value => {
  if (!value) {
    return value;
  }
  const onlyNums = value.replace(/[^\d]/g, '');
  if (onlyNums.length <= 3) {
    return onlyNums;
  }
  if (onlyNums.length <= 7) {
    return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3, 7)}`;
  }

  return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3, 6)}-${onlyNums.slice(6, 10)}`;
};

export const capitalize = value => {
  if (typeof value !== 'string') return '';
  return value.charAt(0).toUpperCase() + value.slice(1);
};

export const renderTextArea = ({input, label, placeholder}) => (
  <>
    <StyledTextArea
      {...input}
      placeholder={placeholder}
    />
  </>
);

export const renderCheckbox = ({input, label, type}) => {
  return (
    <Checkbox {...input} type={type}>
      {label}
    </Checkbox>
  )
};

export const ConditionalRender = ({ when, is, children }) => (
  <Field name={when} subscription={{ value: true }}>
    {({ input: { value } }) => (value === is ? children : null)}
  </Field>
)

export const renderError = ({meta: {touched, error}}) => (
  <div>{touched && error ? <span>{error}</span> : false}</div>
);
