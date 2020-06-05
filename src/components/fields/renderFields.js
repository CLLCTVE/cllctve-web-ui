import React from 'react';
import { DatePicker, Form, Input, Select, Checkbox, Button, Divider, Space } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Field } from 'react-final-form';
import moment from 'moment';

const {TextArea} = Input;

const {MonthPicker} = DatePicker;

export const StyledSpace = styled(Space)`
  &.ant-space {
    display: flex;
  }
`;

const StyledMultiSelect = styled(Select)`
  &.ant-select {
    color: #ffffff;
    background: none;
    
    &.ant-select-focused,
    &.ant-select-selector {
      border-color: #ff6633 !important;
    }
    
    &.ant-select-multiple .ant-select-selector {
    color: #ffffff;
    background: none;
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px !important;
    margin-bottom: 1em;
    
      &:hover,
      &:focus {
        color: #ffffff !important;
        border-color: #ff6633 !important;
      }
    }
    
    &.ant-select-multiple .ant-select-selection-item {
      background: #FF6633;
      
      &:hover {
        border-color: #ff6633;
      }
    }
    
    &:hover,
    &:focus {
      color: #ffffff !important;
      border-color: #ff6633 !important;
    }
    
    &.ant-select-item .ant-select-item-option .ant-select-item-option-active {
      color: #FF6633 !important;
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

export const StyledLink = styled(Link)`
  color: #ffffff;
  text-decoration: underline;
  font-family: 'Open Sans Bold';

  &:hover {
    color: #e41e84;
    text-decoration: underline;
  }
`;

export const disabledDate = (current) => {
  // Can not select days before today and today
  return current && current < moment().endOf('day');
};

const StyledMonthPicker = styled(MonthPicker)`
  background: none;

  &.ant-picker {
    display: flex;
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

    &:focus > span,
    &:active > span {
      color: #e41e84 !important;
    }
    
    &:active {
       span {
        color: #e41e84 !important;
       }
    }
    
   
  }
`;

export const StyledDivider = styled(Divider)`
  &.ant-divider {
    background: transparent linear-gradient(101deg, #e41e84 0%, #ff6633 100%) 0% 0% no-repeat
      padding-box;
  }
`;

export const renderAntCheckbox = ({input, label, type}) => {
  return (
    <Form.Item>
      <Checkbox {...input} type={type}>
        {label}
      </Checkbox>
    </Form.Item>
  )
};

export const renderSelect = ({input, options, mode, placeholder, size}) => {
  return (
    <StyledMultiSelect {...input} mode={mode} placeholder={placeholder} size={size} style={{width: 250}}>
      {options
        .filter(o => !input.value.includes(o))
        .map((option, index) => (
          <Select.Option key={index} value={option}>
            {option}
          </Select.Option>
        ))}
    </StyledMultiSelect>
  );
};

export const renderAntMonthPicker = ({input, placeholder, meta, label, size, monthFormat, disabledDate, allowClear}) => (
  <Form.Item name={label}
             validateStatus={(meta.error || meta.submitError) && meta.touched ? 'error' : ''}
             help={(meta.error || meta.submitError) && meta.touched && (
               <span className="error">{meta.error || meta.submitError}</span>
             )}
  >
    <StyledMonthPicker size={size} {...input} placeholder={placeholder} disabledDate={disabledDate} format={monthFormat} allowClear={allowClear}/>
  </Form.Item>
);

export const renderMonthPicker = ({input, placeholder, monthFormat, allowClear}) => {
  return <StyledMonthPicker size="large" {...input} placeholder={placeholder} format={monthFormat}
                            allowClear={allowClear}/>;
};

export const parsePhone = (value) => !value ? value : value.replace(/[^\d]/g, '');

export const formatPhone = value => {
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

export const renderCheckbox = ({input, label, type, defaultValue}) => {
  return (
    <Checkbox {...input} type={type} defaultChecked={defaultValue}>
      {label}
    </Checkbox>
  )
};

export const ConditionalRender = ({when, is, children}) => (
  <Field name={when} subscription={{value: true}}>
    {({input: {value}}) => (value === is ? children : null)}
  </Field>
);

export const renderError = ({meta: {touched, error}}) => (
  <div>{touched && error ? <span>{error}</span> : false}</div>
);
