import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import { Field as FField, Form as FForm } from 'react-final-form';
import Wizard from './onboarding-flow-wizard';
import {EducationForm} from './EducationForm';
import {ExperienceForm} from './ExperienceForm';
import {SkillsForm} from './SkillsForm';
import {HonorsAwardsForm} from './HonorsAwardsForm';
import {CenteredContainer as Container} from '../fields/renderFields';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

class OnBoardingFlowPage extends Component {
 
  render() {
    const {match} = this.props;
    
    return (
      <Container>
        <div style={{padding: 24, textAlign: 'center', width: '60vw'}}>
          <Wizard
            initialValues={{
              education: {
                isEnrolled: false
              },
              experience: {
                currentlyWorking: false
              }
            }}
            onSubmit={onSubmit}
          >
            <Wizard.Page>
              <EducationForm />
            </Wizard.Page>
            <Wizard.Page>
              <div>
                <SkillsForm />
              </div>
            </Wizard.Page>
            <Wizard.Page>
              <div>
                <ExperienceForm />
              </div>
            </Wizard.Page>
            <Wizard.Page>
              <div>
                <HonorsAwardsForm />
              </div>
            </Wizard.Page>
          </Wizard>
        </div>
      </Container>
    )
  }
}

export default withRouter(OnBoardingFlowPage);
