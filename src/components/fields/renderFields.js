import React from 'react';
import { DatePicker, Input, Select } from "antd";

const {MonthPicker} = DatePicker;

export const renderInput = ({ input, placeholder, label, meta }) => (
  <div>
    <Input
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
    <Input.Password
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
