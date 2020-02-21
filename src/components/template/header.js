import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Menu } from "antd";
import {NavLink as Link} from 'react-router-dom';
import { handleLogoutRequest } from "../../modules/auth/redux";

class Header extends Component {
  handleLogout = () => {
    console.log('#handleLogout');
    this.props.handleLogoutRequest();
  };
  
  renderLinks() {
    if (this.props.authenticated) {
      return [
        <Menu.Item key={`${0}header`}>
          <Link to="/#">Profile</Link>
        </Menu.Item>,
        <Menu.Item key={`${1}header`}>
          <Link to="/#">Jobs</Link>
        </Menu.Item>,
        <Menu.Item key={`${2}header`}>
          <a onClick={this.handleLogout}>Log Out</a>
        </Menu.Item>,
      ];
    } else {
      return [
        // Unauthenticated navigation
        <Menu.Item key={`${0}header`}>
          <Link to="/login">Log In</Link>
        </Menu.Item>,
        <Menu.Item key={`${1}header`}>
          <Link to="/sign-up">Sign Up</Link>
        </Menu.Item>,
      ];
    }
  }
  
  render() {
    return (
      <Layout.Header style={{ background: '#fff', padding: 0 }}>
        <Menu mode="horizontal">
          {this.renderLinks()}
        </Menu>
      </Layout.Header>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    authenticated: state.auth.authenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogoutRequest: () => dispatch(handleLogoutRequest())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
