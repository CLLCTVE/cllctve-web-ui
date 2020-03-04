import React from 'react';
import { DatePicker, Input, Select } from "antd";
import styled from 'styled-components';

const {MonthPicker} = DatePicker;

const StyledInput = styled(Input)`
  background: none;
  -webkit-appearance: none;
   outline-color: transparent;
  outline-style: none;

  &.ant-input-affix-wrapper:hover,
  &.ant-input-affix-wrapper-focused{
    border-top-width: 0px;
    border-left-width:0px;
    border-right-width:0px !important;
    border-color: #FF6633;
  }
  
  &.ant-input, &.ant-input-focused {
    border-top-width: 0px;
    border-left-width:0px;
    border-right-width:0px !important;
    margin-bottom: 1em;

    
    &:hover, &:focus{
    border-top-width: 0px;
    border-left-width:0px;
    border-right-width:0px !important;
      border-color: #FF6633;
    }
  }
`;

const StyledPasswordInput = styled(Input.Password)`

  &.ant-input-affix-wrapper:hover,
  &.ant-input-affix-wrapper-focused{
    border-top-width: 0px;
    border-left-width:0px;
    border-right-width:0px !important;
    border-color: #FF6633;
  }
  
  &.ant-input-password {
    border-top-width: 0px;
    border-left-width:0px;
    border-right-width:0px;
    margin-bottom: 1em;
    background: none;
  }
  
  &.ant-input {
    border-top-width: 0px;
    border-left-width:0px;
    border-right-width:0px;
    margin-bottom: 1em;
  }
`;

export const renderInput = ({ input, placeholder, label, meta }) => (
  <div>
    <StyledInput
      {...input}
      placeholder={placeholder || label}
    />
    {(meta.error || meta.submitError) && meta.touched && (
      <span className="error">{meta.error || meta.submitError}</span>
    )}
  </div>
);

export const renderPasswordInput = ({ input, placeholder, label, meta }) => (
  <div>
    <StyledPasswordInput
      {...input}
      placeholder={placeholder}
      label={label}
    />
    {meta.error && meta.touched && <span className="error">{meta.error}</span>}
  </div>
);

export const renderSelect = ({input, options, mode, placeholder}) => {
  return (
    <Select
      {...input}
      mode={mode}
      placeholder={placeholder}
    >
      {
        options.filter(o => !input.value.includes(o))
          .map((option, index) => (
            <Select.Option key={index} value={option} >
              {option}
            </Select.Option>
          ))
      }
    </Select>
  )
};

export const renderMonthPicker = ({input, monthFormat}) => {
  return (
    <MonthPicker
      {...input}
      format={monthFormat}
    />
  )
};

export const renderTextArea = ({
  input,
  label,
  placeholder,
  type,
  meta: {touched, error, warning},
  rows,
  col,
}) => (
  <div>
    <label>{label}</label>
    <div>
      <textarea {...input} placeholder={placeholder} rows={rows} col={col} />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
);

export const renderError = ({ meta: { touched, error } }) => (
    <div>
        { touched && error ? <span>{error}</span> : false }
    </div>
);
