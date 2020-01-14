import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Layout} from "antd";
import {QuestionSetList} from './question-set-list';

class QuestionSetsPage extends Component {
  
  render() {
    const {questionSets} = this.props;
    
    return (
      <Layout>
        <QuestionSetList qs={questionSets}/>
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
