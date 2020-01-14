import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Layout, Menu } from "antd";
import {Link} from 'react-router-dom';
import {QuestionSetList} from './question-set-list';

const {Footer} = Layout;

class QuestionSetsPage extends Component {
  
  render() {
    const {questionSets} = this.props;
    
    return (
      <Layout>
        <QuestionSetList qs={questionSets}/>
        <Footer>
          <Menu mode="horizontal" theme="light">
            <Menu.Item key={0}>
              <Link to="/">All</Link>
            </Menu.Item>
            <Menu.Item key={1}>
              <Link to="/" >Active</Link>
            </Menu.Item>
            <Menu.Item key={2}>
              <Link to="/" >Completed</Link>
            </Menu.Item>
          </Menu>
        </Footer>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    questionSets: state.app.questionSets.data
  };
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionSetsPage);
