import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink as Link} from 'react-router-dom';
import {Menu, Button} from 'antd';
import {LOGOUT_REQUEST, onHandleLogoutRequest} from '../../../modules/auth/redux';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class RightMenu extends Component {
  render() {
    const {logout} = this.props;
    return (
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link to="/" style={{fontFamily:'Hanson Bold'}}>Home</Link>
        </Menu.Item>
        <Menu.Item key="network">
          <Link to="/network" style={{fontFamily:'Hanson Bold'}}>Network</Link>
        </Menu.Item>
        <Menu.Item key="jobs">
          <Link to="/jobs" style={{fontFamily:'Hanson Bold'}}>Jobs</Link>
        </Menu.Item>
        <Menu.Item key="messaging">
          <Link to="/messaging" style={{fontFamily:'Hanson Bold'}}>Messaging</Link>
        </Menu.Item>
        <Menu.Item key="notifications">
          <Link to="/notifications" style={{fontFamily:'Hanson Bold'}}>Notifications</Link>
        </Menu.Item>
        <Menu.Item key="logout">
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
