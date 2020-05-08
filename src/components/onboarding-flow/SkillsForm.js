import React from 'react';
import { Col, Row } from 'antd';
import { Field as FField } from 'react-final-form';
import { renderSelect } from '../fields/renderFields';
import { SKILLS } from '../../lib/util';


export const SkillsForm = () => (
  <>
    <Row gutter={[{xs: 8, sm: 16, md: 24, lg: 32}, 16]}>
      <Col span={24}>
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
      </Col>
    </Row>
  </>
);
