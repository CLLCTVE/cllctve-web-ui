import { Field as FField } from 'react-final-form';
import { renderSelect } from '../fields/renderFields';
import { SKILLS } from '../../lib/util';
import React from 'react';

export const SkillsForm = () => (
  <>
    <FField
      name="skills"
      component={renderSelect}
      options={SKILLS}
      mode="multiple"
      placeholder="Skills"
      size="large"
      value={[]}
      format={value => value || []}
    />
  </>
)
