import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class RightMenu extends Component {
  render() {
    return (
      <Menu mode="horizontal">
        <Menu.Item key="mail">
          <a href="">Home</a>
        </Menu.Item>
        <Menu.Item key="network">
          <a href="">Network</a>
        </Menu.Item>
        <Menu.Item key="jobs">
          <a href="">Jobs</a>
        </Menu.Item>
        <Menu.Item key="messaging">
          <a href="">Messaging</a>
        </Menu.Item>
        <Menu.Item key="alipay">
          <a href="">Contact Us</a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default RightMenu;
