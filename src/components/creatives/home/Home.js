import React, {Component} from 'react';
import {Layout} from 'antd';
import WhatsNew from './WhatsNew';
import ActivitySection from '../profile/ActivtySection';
import ProfilePic from './ProfilePic';
import SuggestedContent from './SuggestedContent';
import UserFeed from './UserFeed';

const {Sider, Content} = Layout;

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Layout>
          <Sider style={{background: 'black'}}>
            <ProfilePic />
          </Sider>
          <Layout>
            <Content>
              <WhatsNew />
              <ActivitySection />
              <hr style={{width: '80%'}} />
              <UserFeed />
              <SuggestedContent />
            </Content>
          </Layout>

          <Sider style={{background: 'black'}}></Sider>
        </Layout>
      </div>
    );
  }
}

export default Home;
