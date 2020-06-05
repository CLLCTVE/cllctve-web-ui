import React from 'react';
import styled from 'styled-components';
import { Form, Input } from 'antd';

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

export const renderAntInput = ({input, placeholder,label, meta}) => (
  <Form.Item name={label}
             validateStatus={(meta.error || meta.submitError) && meta.touched ? 'error' : ''}
             help={(meta.error || meta.submitError) && meta.touched && (
               <span className="error">{meta.error || meta.submitError}</span>
             )}
  >
    <StyledInput {...input} placeholder={placeholder || label}/>
  </Form.Item>
);

const StyledPasswordInput = styled(Input.Password)`
  color: #ffffff;

  &.ant-input-affix-wrapper:hover,
  &.ant-input-affix-wrapper-focused {
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px !important;
    border-color: #ff6633;
  }

  &.ant-input-password {
    color: #ffffff;
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    margin-bottom: 1em;
    background: none !important;
  }

  &.ant-input {
    color: #ffffff;
    background: none !important;
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    margin-bottom: 1em;
  }
`;

export const renderAntPasswordInput = ({input, placeholder, label, meta}) => (
  <Form.Item name={label}
             validateStatus={(meta.error || meta.submitError) && meta.touched ? 'error' : ''}
             help={(meta.error || meta.submitError) && meta.touched && (
               <span className="error">{meta.error || meta.submitError}</span>
             )}
  >
    <StyledPasswordInput {...input} placeholder={placeholder} label={label}/>
  </Form.Item>
);
