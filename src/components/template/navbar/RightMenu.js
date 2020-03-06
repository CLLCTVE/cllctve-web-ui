import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class RightMenu extends Component {
  
  render() {
    return (
      <Menu mode="horizontal">
        <Menu.Item key="0">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="1">
          <Link to="/network">Network</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/jobs">Jobs</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/messaging">Messaging</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/contact">Contact Us</Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default RightMenu;
