import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import { Layout } from "antd";

import Header from './template/header';
import HomePage from './homepage';
import LoginPage from './login/loginpage';
import SignUpPage from './signup/signup-page';
import ProfilePage from './profile-page';

class Index extends Component {
  render() {
    return (
      <Layout>
        <Header/>
        <Layout.Content style={{padding: '60px', height: '100%', minHeight: '100vh'}}>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/sign-up' component={SignUpPage} />
          <Route exact path='/profile' component={ProfilePage} />
        </Switch>
        </Layout.Content>
      </Layout>
    )
  }
}

export default Index;
