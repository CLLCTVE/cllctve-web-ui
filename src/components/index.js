import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {Layout} from 'antd';

import NavBar from './template/navbar';
import HomePage from './homepage';
import LoginPage from './login/loginPage';
import SignUpPage from './signup/signupPage';
import OnBoardingFlowPage from './onboarding-flow';
import OnBoardingFlowStep from './onboarding-flow/onboarding-flow-step';
import NotFoundPage from './pages/notFoundPage';
import AdminDashboardPage from './admin/brand-approval-page';
import ProfilePage from './creatives/profile/ProfilePage';
import Footer from './template/footer/index'
import RequireAuth from './auth/require_auth';
import PrivateRoute from './auth/PrivateRoute';
import ChooseSignup from './signup/chooseSignup';
import signupBrand from './signup/signupBrand';

class Index extends Component {
  render() {
    return (
      <Layout>
        <NavBar />
        <Layout.Content style={{height: '100%', minHeight: '100vh'}}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/sign-up" component={ChooseSignup} />
            <Route exact path="/creative/signup" component={SignUpPage} />
            <Route exact path="/brand/signup" component={signupBrand} />
            <Route exact path="/creative/profile" component={ProfilePage} />
            <PrivateRoute exact path="/admin/dashboard" role={['Admin']} component={AdminDashboardPage} />
            
            <Route path="/on-boarding-flow/:step" render={() => {
              return (
                <div>
                  <OnBoardingFlowStep />
                  <OnBoardingFlowPage />
                </div>
              )
            }} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </Layout.Content>
        <Footer/>
      </Layout>
    );
  }
}

export default Index;
