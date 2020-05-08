import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import MakeAsyncFunction from 'react-redux-promise-listener';
import {promiseListener} from '../../store';
import Wizard from './onboarding-flow-wizard';
import {EducationForm} from './EducationForm';
import {ExperienceForm} from './ExperienceForm';
import {SkillsForm} from './SkillsForm';
import {HonorsAwardsForm} from './HonorsAwardsForm';
import {LicensesCertsForm} from './LicensesCertsForm';
import {CenteredContainer as Container} from '../fields/renderFields';
import { ONBOARDING_FAILURE, ONBOARDING_REQUEST, ONBOARDING_SUCCESS } from '../../modules/signup/redux';

class OnBoardingFlowPage extends Component {
 
  render() {
    const {match} = this.props;
    
    return (
      <Container>
        <div style={{padding: 24, textAlign: 'center', width: '60vw'}}>
          <MakeAsyncFunction
            listener={promiseListener}
            start={ONBOARDING_REQUEST}
            resolve={ONBOARDING_SUCCESS}
            reject={ONBOARDING_FAILURE}
          >
            {onSubmit => (
              <Wizard
                initialValues={{
                  education: {
                    isEnrolled: false
                  },
                  experience: {
                    currentEmployer: false
                  }
                }}
                onSubmit={onSubmit}
              >
                <Wizard.Page>
                  <EducationForm />
                </Wizard.Page>
                <Wizard.Page>
                  <SkillsForm />
                </Wizard.Page>
                <Wizard.Page>
                  <ExperienceForm />
                </Wizard.Page>
                <Wizard.Page>
                  <HonorsAwardsForm />
                </Wizard.Page>
                <Wizard.Page>
                  <LicensesCertsForm />
                </Wizard.Page>
              </Wizard>
            )}
          </MakeAsyncFunction>
        </div>
      </Container>
    )
  }
}

export default withRouter(OnBoardingFlowPage);
