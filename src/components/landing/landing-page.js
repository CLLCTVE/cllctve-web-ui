import React, {Component} from 'react';
import {Col, Row, Typography, Card, Divider, Menu, Layout, Button, Avatar, Input} from 'antd';
import styled from 'styled-components'

const {Header, Content, Footer, Sider} = Layout;
const {Search} = Input;

class HomePage extends Component {
  render() {
    return(
      <Layout>
        <Search
      placeholder="Email"
      enterButton="Search"
      size="large"
      onSearch={value => console.log(value)}
    />
        <Header>
        </Header>
        <Content>
          
        </Content>
      </Layout>
    )
  }
}

export default HomePage;
