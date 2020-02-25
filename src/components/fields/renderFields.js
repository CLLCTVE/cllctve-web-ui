import React from 'react';
import { Input, Select } from "antd";
import styled from "styled-components";

const InputC = styled(Input)`
  border-top-width: 0px;
  border-left-width:0px;
  border-right-width:0px;
`;

export const renderInput = ({input, label, placeholder, type, meta: {touched, error, warning}}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={placeholder || label} type={type} className={error ? 'error' : null} />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
);

export const renderInputD = ({ input, placeholder, label }) => (
  <div>
    <InputC
      {...input}
      placeholder={placeholder || label}
      
    />
  </div>
);

export const renderSelect = ({
  input,
  label,
  type,
  meta: {touched, error, warning},
  selectOptions,
}) => (
  <div>
    <label>{label}</label>
    <div>
      <select {...input}>
        {selectOptions.map((option, index) => (
          <option value={option} key={index}>
            {option}
          </option>
        ))}
      </select>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
);

export const renderSelectA = ({input, options, mode, placeholder}) => {
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
}



export const renderSelectD = function ({input, mode, selectedItems, selectOptions, handleChange, placeholder, label, value})  {
  const filteredOptions = selectOptions.filter(option => !selectedItems.includes(option));
  
  return (
    <Select
      {...input}
      mode={mode}
      placeholder={placeholder}
      value={selectedItems}
      onChange={handleChange}
    >
      {filteredOptions.map((option, index) => (
        <Select.Option key={index} value={option}>
          {option}
        </Select.Option>
      ))}
    </Select>
  )
}

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
