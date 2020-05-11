import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import MakeAsyncFunction from 'react-redux-promise-listener';
import {promiseListener} from '../../store';
import Wizard from './onboarding-flow-wizard';
import {EducationForm} from './EducationForm';
import {ExperienceForm} from './ExperienceForm';
import {SkillsForm} from './SkillsForm';
import {HonorsAwardsForm} from './HonorsAwardsForm';
import {LicensesCertsForm} from './LicensesCertsForm';
import {CenteredContainer as Container} from '../fields/renderFields';
import {ONBOARDING_REQUEST, ONBOARDING_SUCCESS, ONBOARDING_FAILURE} from '../../modules/signup/redux/onboarding';

class OnBoardingFlowPage extends Component {
 
  render() {
    const {isLoading} = this.props;
    
    return (
      <MakeAsyncFunction
        listener={promiseListener}
        start={ONBOARDING_REQUEST}
        resolve={ONBOARDING_SUCCESS}
        reject={ONBOARDING_FAILURE}
      >
        {onSubmit => (
          <Container>
            <div style={{padding: 24, textAlign: 'center', width: '60vw'}}>
              <Wizard
                isLoading={isLoading}
                initialValues={{
                  education: {
                    isEnrolled: true
                  },
                  experience: {
                    currentEmployer: false
                  },
                  licensesCert: {
                    canExpire: false
                  }
                }}
                onSubmit={onSubmit}
              >
                <Wizard.Page>
                  <EducationForm />
                </Wizard.Page>
                {/*<Wizard.Page>*/}
                {/*  <SkillsForm />*/}
                {/*</Wizard.Page>*/}
                {/*<Wizard.Page>*/}
                {/*  <ExperienceForm />*/}
                {/*</Wizard.Page>*/}
                {/*<Wizard.Page>*/}
                {/*  <LicensesCertsForm />*/}
                {/*</Wizard.Page>*/}
                {/*<Wizard.Page>*/}
                {/*  <HonorsAwardsForm />*/}
                {/*</Wizard.Page>*/}
              </Wizard>
              )}
            </div>
          </Container>
        )}
      </MakeAsyncFunction>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoading: state.onBoarding.isLoading,
  };
};

export default withRouter(connect(mapStateToProps, {})(OnBoardingFlowPage));
