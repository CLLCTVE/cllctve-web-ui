import React, {Component} from 'react';
import {Col, Row, Typography, Card, Divider, Menu, Layout, Button, Avatar, Input} from 'antd';
import {StyledLink} from './fields/renderFields';
import styled from 'styled-components'
import {CenteredContainer as Container} from './fields/ContainerFields';

const {Header, Content, Footer, Sider} = Layout;
const {Search} = Input;
const {Title} = Typography;

class HomePage extends Component {
  render() {
    return (
      <Layout>
        <Header style={{width: '100vw', height: '100vh', display: 'flex'}}>
          {/* <ButtonContainer> */}
        <Search
        style={{ marginTop: '600px'}}
      placeholder="Email"
      enterButton="Enter"
      size="large"
      onSearch={value => console.log(value)}
    />
          {/* </ButtonContainer> */}
        </Header>
        <Content>
          <Title level={2}>LATEST NEWS STORIES</Title>
          <Row>
            <Col>
            <Avatar/>
            <Avatar/>
            </Col>
          </Row>
          <Row>
            <Col>
            <Avatar/>
            <Avatar/>
            </Col>
          </Row>
        </Content>
      </Layout>
    );
  }
}

export default HomePage;
