import emailValidator from 'email-validator';

export const email = value => {
  return value && !emailValidator.validate(value) ? 'Invalid email address' : undefined;
};

export const edu = value => {
  return value && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.+-]+\.edu$/.test(value)
    ? 'You must be actively enrolled in a College or University.'
    : undefined;
};

export const yahoo = value => {
  return value && /.+@yahoo\.com/.test(value)
    ? 'Really? You still use Yahoo for your email?'
    : undefined;
};

export const required = value => {
  return value || typeof value === 'number' ? undefined : 'Required';
};
export const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
export const maxLength15 = maxLength(15);
export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;

export const minLength2 = minLength(2);

export const minLength6 = minLength(6);
export const maxLength6 = maxLength(6);

export const minLength10 = minLength(10);
export const maxLength10 = maxLength(10);

export const number = value => {
  return value && isNaN(Number(value)) ? 'Must be a number' : undefined;
};

export const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined;

export const minValue13 = minValue(13);

export const alphaNumeric = value => {
  return value && /[^a-zA-Z0-9 ]/i.test(value) ? 'Only alphanumeric characters' : undefined;
};

export const passwordsMustMatch = (value, allValues) => {
  console.log('value: ', value);
  console.log('allValues: ', allValues);
  return value !== allValues.password ? 'Passwords do not match' : undefined;
};

export const getValidator = isRequired => (
  isRequired ? value => (value ? undefined : 'Required') : () => {}
);

export const conditionalRequired = (value, allValues, when, is) => {
  console.log('value: ', value);
  console.log('allValues: ', allValues);
  console.log('when: %s, is: %s', when, is);
  
  return value || typeof value === 'number' ? undefined : 'Required';
};

export const phoneNumber = value => {
  return value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined;
};

export const composeValidators = (...validators) => (value, allValues, fieldState) => {
  return validators.reduce(
    (error, validator) => error || validator(value, allValues, fieldState),
    undefined
  );
};

export const simpleMemoize = fn => {
  let lastArg;
  let lastResult;
  return arg => {
    if (arg !== lastArg) {
      lastArg = arg;
      lastResult = fn(arg);
    }
    return lastResult;
  };
};
