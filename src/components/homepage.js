import React, {Component} from 'react';
import {Col, Row, Typography, Card, Divider, Menu, Layout, Button, Avatar, Input} from 'antd';
import { StyledLink, CenteredContainer as Container} from './fields/renderFields';
import styled from 'styled-components'
const {Header, Content, Footer, Sider} = Layout;
const {Search} = Input;


const ButtonContainer = styled.div`
  .ant-btn-primary {
    background-color: #fc673d;
  }
`;

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
