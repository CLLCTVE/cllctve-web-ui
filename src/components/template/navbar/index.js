import React, { Component } from 'react';
import { connect } from 'react-redux';
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';
import { NavLink as Link, withRouter } from 'react-router-dom';
import { Avatar, Drawer, Button, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';

import logo from '../../../logo.png';

class NavBar extends Component {
	state = {
    current: 'mail',
    visible: false
  };
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };
	
	renderLinks() {
		if (this.props.location.pathname === '/login' || this.props.location.pathname === '/sign-up') {
			return [
				<>
					<div className='logo' style={{float: 'none', margin: 'auto'}}>
						<Link to='/'><img src={logo} alt='Logo'/></Link>
					</div>
				</>
			]
		} else if (this.props.location.pathname === '/' && !this.props.authenticated) {
			return [
				<>
					<div className='logo'>
						<Link to='/'><img src={logo} alt='Logo'/></Link>
					</div>
					<div className='menuCon'>
						<div className='rightMenu'>
							<Menu mode="horizontal">
								<Menu.Item key="0">
									<Link to="/login">Login</Link>
								</Menu.Item>
								<Menu.Item key="1">
									<Link to="/sign-up">Sign Up</Link>
								</Menu.Item>
							</Menu>
						</div>
						<Button className='barsMenu' type='primary' onClick={this.showDrawer}>
							<span className='barsBtn'></span>
						</Button>
						<Drawer
							title='Basic Drawer'
							placement='right'
							closable={false}
							onClose={this.onClose}
							visible={this.state.visible}
						>
							<Menu mode="horizontal">
								<Menu.Item key="2">
									<Link to="/login">Login</Link>
								</Menu.Item>
								<Menu.Item key="3">
									<Link to="/sign-up">Sign Up</Link>
								</Menu.Item>
							</Menu>
						</Drawer>
					
					</div>
				</>
			]
		} else {
			return [
					<>
						<div className='logo'>
							<Link to='/'><img src={logo} alt='Logo'/></Link>
						</div>
						<div className='menuCon'>
							<div className='rightMenu'>
								<RightMenu />
								{/*<Avatar size={58} icon={<UserOutlined  />} />*/}
							</div>
							<Button className='barsMenu' type='primary' onClick={this.showDrawer}>
								<span className='barsBtn'></span>
							</Button>
							<Drawer
								title='Basic Drawer'
								placement='right'
								closable={false}
								onClose={this.onClose}
								visible={this.state.visible}
							>
								<RightMenu />
							</Drawer>
						
						</div>
					</>
			]
		}
	}

  render() {
    return (
			<nav className='menuBar'>
				{this.renderLinks()}
			</nav>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
	return {
		authenticated: state.auth.authenticated,
	};
};

export default connect(mapStateToProps)(withRouter(NavBar));
