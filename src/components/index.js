import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {Layout, Button} from 'antd';

import Header from './template/header';
import NavBar from './template/navbar';
import HomePage from './homepage';
import LoginPage from './login/loginPage';
import SignUpPage from './signup/signuppage';
import ProfilePage from './profile-page';
import OnBoardingPage from './onboarding';
import OnBoardingFlowPage from './onboarding-flow';
import OnBoardingFlowStep from './onboarding-flow/onboarding-flow-step';
import OnBoardingStep from './onboarding/onboarding-step'
import NotFoundPage from './pages/notFoundPage';
import FieldArrayPage from './field-array/fieldArrayExample';

import RequireAuth from './require_auth';

class Index extends Component {
  render() {
    return (
      <Layout>
        <NavBar />
        <Layout.Content style={{padding: '60px', height: '100%', minHeight: '100vh'}}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/sign-up" component={SignUpPage} />
            <Route exact path="/profile" component={RequireAuth(ProfilePage)} />
            <Route exact path="/array-form" component={FieldArrayPage} />
            
            <Route path="/on-boarding-flow/:step" render={() => {
              return (
                <div>
                  <OnBoardingFlowStep />
                  <OnBoardingFlowPage />
                </div>
              )
            }} />
            
            <Route path="/on-boarding/:step" render={() => {
              return (
                <div style={{padding: 24, textAlign: 'center', width: '75%'}}>
                  <OnBoardingStep />
                  <OnBoardingPage />
                </div>
                )
            }} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </Layout.Content>
      </Layout>
    );
  }
}

export default Index;
