import React, {Component} from 'react';
import {NavLink as Link} from 'react-router-dom';
import {Menu} from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class RightMenu extends Component {
  render() {
    return (
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="network">
          <Link to="/network">Network</Link>
        </Menu.Item>
        <Menu.Item key="jobs">
          <Link to="/jobs">Jobs</Link>
        </Menu.Item>
        <Menu.Item key="messaging">
          <Link to="/messaging">Messaging</Link>
        </Menu.Item>
        <Menu.Item key="notifications">
          <Link to="/notifications">Notifications</Link>
        </Menu.Item>
        <Menu.Item key="logout">
          <Link to="/">Logout</Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default RightMenu;
