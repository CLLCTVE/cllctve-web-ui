import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {Layout} from 'antd';

import Header from './template/header';
import NavBar from './template/navbar';
import HomePage from './homepage';
import LoginPage from './login/loginpage';
import SignUpPage from './signup/signuppage';
import ProfilePage from './profile-page';
import NotFoundPage from './pages/notFoundPage';

import RequireAuth from './require_auth';

class Index extends Component {
  render() {
    return (
      <Layout>
        <NavBar />
        <Layout.Content style={{padding: '60px', height: '100%', minHeight: '100vh'}}>
          <div style={{padding: 24, textAlign: 'center'}}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/sign-up" component={SignUpPage} />
              <Route exact path="/profile" component={RequireAuth(ProfilePage)} />
              <Route path="*" component={NotFoundPage} />
            </Switch>
          </div>
        </Layout.Content>
      </Layout>
    );
  }
}

export default Index;
