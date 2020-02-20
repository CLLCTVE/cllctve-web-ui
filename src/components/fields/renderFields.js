import React from 'react';

export const renderInput = ({input, label, placeholder, type, meta: {touched, error, warning}}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={placeholder || label} type={type} className={error ? 'error' : null} />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
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
