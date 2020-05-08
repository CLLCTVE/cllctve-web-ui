import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import { Typography, Steps } from 'antd';
import {ONBOARDING_ENTRY_MAP_BY_NAME} from '../../lib/util';

const { Step } = Steps;
const { Title } = Typography;


const OnBoardingFlowStep = ({match}) => {
  
  const displayText = (step)  => {
    return ONBOARDING_ENTRY_MAP_BY_NAME[Object.keys(ONBOARDING_ENTRY_MAP_BY_NAME)[step]].text;
  };
  
  const displayTitle = (step)  => {
    return ONBOARDING_ENTRY_MAP_BY_NAME[Object.keys(ONBOARDING_ENTRY_MAP_BY_NAME)[step]].title;
  };
  
  return (
    <div style={{padding: 24, textAlign: 'center'}}>
      <Title>Set Up Your Account</Title>
      <Title level={2}>{displayText(match.params.step)}</Title>
      <div>
      </div>
    </div>
  )
};

export default withRouter(OnBoardingFlowStep);
