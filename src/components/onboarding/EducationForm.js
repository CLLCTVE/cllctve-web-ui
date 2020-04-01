import { Field } from 'react-final-form';
import { Form as AntForm, Input, Button, Col, Row } from 'antd';
import { FieldArray } from 'react-final-form-arrays'
import {
  renderCheckbox,
  renderInput,
  renderMonthPicker,
  renderTextArea,
  ConditionalRender,
  renderSelect,
  StyledLink
} from '../fields/renderFields';
import {EducationForm} from './OnboardingForms';
import * as validations from '../../utils/validations';
import React from 'react';
import { SKILLS } from '../../lib/util';
const monthFormat = 'MM-YYYY';
const required = value => (value ? undefined : 'Required')

export const EducationFieldArrayForm = () => (
  
    <FieldArray name="education">
      {({fields}) =>
        fields.map((name, index) => (
          <div key={name}>
            <EducationForm name={name}/>
          </div>
        ))
      }
    </FieldArray>
  
);
