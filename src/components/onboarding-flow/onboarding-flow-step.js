import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import { Steps } from 'antd';
import {ONBOARDING_ENTRY_MAP_BY_NAME} from '../../lib/util';

const { Step } = Steps;

const OnBoardingFlowStep = ({match}) => {
  
  const displayText = (step)  => {
    return ONBOARDING_ENTRY_MAP_BY_NAME[Object.keys(ONBOARDING_ENTRY_MAP_BY_NAME)[step]].text;
  };
  
  const displayTitle = (step)  => {
    return ONBOARDING_ENTRY_MAP_BY_NAME[Object.keys(ONBOARDING_ENTRY_MAP_BY_NAME)[step]].title;
  };
  
  return (
    <div style={{padding: 24, textAlign: 'center'}}>
      <h3>
        Set Up Your Account
      </h3>
      <h5>
        {displayText(match.params.step)}
      </h5>
      <div>
        <Steps current={match.params.step}>
          {Object.keys(ONBOARDING_ENTRY_MAP_BY_NAME).map((item, index) =>  (
            <Step key={item.title} title={displayTitle(index)}/>
          ))}
        </Steps>
      </div>
    </div>
  )
};

export default withRouter(OnBoardingFlowStep);
