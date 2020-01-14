import React, { Component } from 'react';
import { Layout, Menu } from "antd";
import {NavLink as Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <Layout.Header>
        <Menu mode="horizontal">
          <Menu.Item key={0}>
            <Link to="/login">Login</Link>
          </Menu.Item>
          <Menu.Item key={1}>
            <Link to="/sign-up" >Sign Up</Link>
          </Menu.Item>
        </Menu>
      </Layout.Header>
    );
  }
}

export default Header;
