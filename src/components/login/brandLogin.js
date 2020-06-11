import React, {Component} from 'react';
import {connect} from 'react-redux';
import {AsyncLoginForm} from './loginForm';
import {StyledLink} from '../fields/renderFields';
import {CenteredContainer as Container} from '../fields/ContainerFields';
import {Typography} from 'antd';

const {Title} = Typography;

class BrandLoginPage extends Component {
  render() {
    const {isLoading} = this.props;
    return (
      <Container>
        <div style={{padding: 24, textAlign: 'center'}}>
          <div style={{paddingTop: 12, paddingBottom: 12}}>
            <Title level={2}>BRAND LOGIN</Title>
            <Title level={4}>Login to your Brand Account </Title>
          </div>
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

export default connect(mapStateToProps, {})(BrandLoginPage);
