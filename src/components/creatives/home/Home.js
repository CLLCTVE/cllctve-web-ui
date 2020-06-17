import React, {Component} from 'react';
import styled from 'styled-components';
import {Col, Row, Typography, Card, Divider, Menu, Layout, Button, Avatar, Modal} from 'antd';
import {EditOutlined, PlusCircleOutlined} from '@ant-design/icons';
import WhatsNew from './WhatsNew'
import ActivitySection from '../profile/ActivtySection'

const {Sider, Header, Content} = Layout;
const {Title} = Typography;

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Layout>
          <Sider>Sider</Sider>
          <Layout>
            
            <Content>
            <WhatsNew/>
            <ActivitySection/>
            <Divider/>
            
            </Content>
          </Layout>
      
            <Sider>Sider</Sider>

        </Layout>
      </div>
    );
  }
}

export default Home;
