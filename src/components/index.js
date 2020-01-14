import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import { Layout } from "antd";

import Header from './template/header';
import HomePage from './homepage';
import QuestionSetsPage from './question-sets/question-sets';
import QuestionSetPage from './question-sets/question-set';
import LoginPage from './loginpage';
import SignUpPage from './signup-page';

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
          <Route exact path='/question-sets' component={QuestionSetsPage} />
          <Route path='/question-sets/:questionSetId' component={QuestionSetPage} />
        </Switch>
        </Layout.Content>
      </Layout>
    )
  }
}

export default Index;
