import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

const OnBoardingStep = ({match}) => {

  return (
    <div>
      <h4>
        <div>OnBoardingPage {match.params.step}</div>
      </h4>
    </div>
  )
};

export default withRouter(OnBoardingStep);
