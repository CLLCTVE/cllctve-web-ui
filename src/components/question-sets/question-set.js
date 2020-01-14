import React, {Component} from 'react';
import {connect} from 'react-redux';

class QuestionSetPage extends Component {
  render() {
    return (
      <div>
        QuestionSet Details
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    questionSet: ''
  };
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionSetPage);
