import React, {Component} from 'react';
import {Layout} from 'antd';
import ProfilePic from '../../creatives/home/ProfilePic';

const {Content, Sider} = Layout;

class BrandHome extends Component {
    render(){
        return(
            <Layout>
          <Sider style={{background: 'black'}}>
            <ProfilePic />
          </Sider>
          <Layout>
            <Content>
              
            </Content>
          </Layout>

          <Sider style={{background: 'black'}}></Sider>
        </Layout>
        )
    }
}

export default BrandHome;