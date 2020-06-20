import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import MakeAsyncFunction from 'react-redux-promise-listener';
import {promiseListener} from '../../store';
import Wizard from './DiscoveryWizard';
import {FormOne} from './FormOne';
import {FormTwo} from './FormTwo';
import {FormThree} from './FormThree';
import {CenteredContainer as Container} from '../fields/ContainerFields';
import {ONBOARDING_REQUEST, ONBOARDING_SUCCESS, ONBOARDING_FAILURE} from '../../modules/signup/redux/onboarding';

class BrandFlowPage extends Component {
 
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
                  pageOne: {
                    isComplete: false
                  },
                  pageTwo: {
                    isComplete: false
                  },
                  PageThree: {
                    isComplete: false
                  }
                }}
                onSubmit={onSubmit}
              >
                <Wizard.Page>
                  <FormOne />
                </Wizard.Page>
                <Wizard.Page>
                  <FormTwo />
                </Wizard.Page>
                <Wizard.Page>
                  <FormThree />
                </Wizard.Page>
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

export default withRouter(connect(mapStateToProps, {})(BrandFlowPage));