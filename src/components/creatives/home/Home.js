import React, {Component} from 'react';
import styled from 'styled-components';
import {Col, Row, Typography, Card, Divider, Menu, Layout, Button, Avatar, Modal} from 'antd';
import {EditOutlined, PlusCircleOutlined} from '@ant-design/icons';
import WhatsNew from './WhatsNew'
import ActivitySection from '../profile/ActivtySection'
import ProfilePic from './ProfilePic'
import SuggestedContent from './SuggestedContent';
import UserFeed from './UserFeed';

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
          <Sider style={{background: 'black'}}>
              <ProfilePic/>
          </Sider>
          <Layout>
            
            <Content>
            <WhatsNew/>
            <ActivitySection/>
            <hr style={{width: '80%'}}/>
            <SuggestedContent/>
            <UserFeed/>
            </Content>
          </Layout>
      
            <Sider style={{background: 'black'}}>Sider</Sider>

        </Layout>
      </div>
    );
  }
}

export default Home;
