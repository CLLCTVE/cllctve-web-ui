import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink as Link} from 'react-router-dom';
import {Menu, Button} from 'antd';
import {LOGOUT_REQUEST, onHandleLogoutRequest} from '../../../modules/auth/redux';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class RightMenu extends Component {
  render() {
    const {logout, isMobile} = this.props;
    return (
      <Menu mode="horizontal">
        <Menu.Item key={`home${isMobile ? '-m' : ''}`}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key={`network${isMobile ? '-m' : ''}`}>
          <Link to="/network">Network</Link>
        </Menu.Item>
        <Menu.Item key={`jobs${isMobile ? '-m' : ''}`}>
          <Link to="/jobs">Jobs</Link>
        </Menu.Item>
        <Menu.Item key={`messaging${isMobile ? '-m' : ''}`}>
          <Link to="/messaging">Messaging</Link>
        </Menu.Item>
        <Menu.Item key={`notifications${isMobile ? '-m' : ''}`}>
          <Link to="/notifications">Notifications</Link>
        </Menu.Item>
        <Menu.Item key={`logout${isMobile ? '-m' : ''}`}>
          <Button type="link" onClick={logout}>Logout</Button>
        </Menu.Item>
      </Menu>
    );
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => {dispatch({type: LOGOUT_REQUEST})}
  };
};

export default connect(null, mapDispatchToProps)(RightMenu);
