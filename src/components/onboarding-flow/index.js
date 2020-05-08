import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Wizard from './onboarding-flow-wizard';
import {EducationForm} from './EducationForm';
import {ExperienceForm} from './ExperienceForm';
import {SkillsForm} from './SkillsForm';
import {HonorsAwardsForm} from './HonorsAwardsForm';
import {LicensesCertsForm} from './LicensesCertsForm';
import {CenteredContainer as Container} from '../fields/renderFields';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

class OnBoardingFlowPage extends Component {
 
  render() {
    const {isLoading} = this.props;
    
    return (
      <Container>
        <div style={{padding: 24, textAlign: 'center', width: '60vw'}}>
              <Wizard
                isLoading={isLoading}
                initialValues={{
                  education: {
                    isEnrolled: false
                  },
                  experience: {
                    currentEmployer: false
                  },
                  licensesCert: {
                    canExpire: false
                  }
                }}
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
                  <LicensesCertsForm />
                </Wizard.Page>
                <Wizard.Page>
                  <HonorsAwardsForm />
                </Wizard.Page>
              </Wizard>
            )}
        </div>
      </Container>
    )
  }
}

export default withRouter(OnBoardingFlowPage);
