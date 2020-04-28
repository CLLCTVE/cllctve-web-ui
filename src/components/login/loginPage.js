import React, {Component} from 'react';
import {connect} from 'react-redux';
import {AsyncLoginForm} from './loginForm';
import { StyledLink, CenteredContainer as Container} from '../fields/renderFields';

class LoginPage extends Component {
  render() {
    const {isLoading} = this.props;
    return (
      <Container>
        <div style={{padding: 24, textAlign: 'center'}}>
          <AsyncLoginForm isLoading={isLoading} />
          <div>
            <StyledLink to="#">Forgot your password? Click Here</StyledLink>
            <br />
            <StyledLink to="/sign-up">Not a member? Click here to create your account!</StyledLink>
          </div>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoading: state.auth.isLoading,
  };
};

export default connect(mapStateToProps, {})(LoginPage);
