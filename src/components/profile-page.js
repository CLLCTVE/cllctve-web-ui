import React, {Component} from 'react';
import { connect } from 'react-redux';

class ProfilePage extends Component {
  
  render() {
    const { user } = this.props;
    
    return (
    <div>
      <h2>Hello {user.firstName}</h2>
      Profile Page
    </div>);
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps, {})(ProfilePage);
