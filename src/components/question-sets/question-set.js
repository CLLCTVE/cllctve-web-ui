import React, {Component} from 'react';
import {connect} from 'react-redux';
import {findById} from '../../modules/app/redux/question-sets';
import { Layout} from "antd";

class QuestionSetPage extends Component {
  
  render() {
    const {questionSet} = this.props;
    
    return (
      <Layout>
        <h3>{questionSet.title} Details</h3>
      </Layout>
    );
  }
}

function mapStateToProps(state, ownProps) {
  let questionSetId = ownProps.match.params.questionSetId;
  
  return {
    questionSet: findById(state.app.questionSets.data, questionSetId)
  };
};

export default connect(mapStateToProps, {})(QuestionSetPage);
