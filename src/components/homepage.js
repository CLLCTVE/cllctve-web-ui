import React, {Component} from 'react';
import {Col, Row, Typography, Card, Divider, Menu, Layout, Button, Avatar, Input} from 'antd';
import {StyledLink} from './fields/renderFields';
import styled from 'styled-components'
const {Header, Content, Footer, Sider} = Layout;
const {Search} = Input;
import {CenteredContainer as Container} from './fields/ContainerFields';

class HomePage extends Component {

  
  render() {
    return (
      <Layout>
        <Header style={{width: '100vw', height: '100vh', display: 'flex'}}>
          {/* <ButtonContainer> */}
        <Search
        style={{ margin: '300px auto'}}
      placeholder="Email"
      enterButton="Enter"
      size="large"
      onSearch={value => console.log(value)}
    />
          {/* </ButtonContainer> */}
        </Header>
        <Content>
          
        </Content>
      </Layout>
    );
  }
}

export default HomePage;
