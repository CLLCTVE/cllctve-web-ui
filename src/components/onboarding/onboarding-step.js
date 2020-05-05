import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {ONBOARDING_ENTRY_MAP_BY_NAME} from '../../lib/util';

const OnBoardingStep = ({match}) => {

  const displayText = (step)  => {
    return ONBOARDING_ENTRY_MAP_BY_NAME[Object.keys(ONBOARDING_ENTRY_MAP_BY_NAME)[step]].text;
  };
  
  return (
    <div style={{padding: 24, textAlign: 'center'}}>
      <h3>
        Set Up Your Account
      </h3>
      <h5>
        {displayText(match.params.step)}
      </h5>
    </div>
  )
};

export default withRouter(OnBoardingStep);
