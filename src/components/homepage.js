import React, {Component} from 'react';
import {isMobile, isBrowser, MobileView, BrowserView} from 'react-device-detect';
import {Col, Row, Typography, Card, Divider, Menu, Layout, Button, Avatar, Input} from 'antd';
import {StyledLink, StyledButton} from './fields/renderFields';
import styled from 'styled-components';
import {CenteredContainer as Container} from './fields/ContainerFields';
import {Field as FField} from 'react-final-form';
import {CheckCircleOutlined} from '@ant-design/icons';
import Background from './images/background-img.png';
import ReactPlayer from 'react-player';
import VideoSection from './landing/VideoSection';
import axios from 'axios';
import LatestNews from './landing/latestNews';
import WishList from './landing/wishList';

const {Header, Content, Footer, Sider} = Layout;
const {Search} = Input;
const {Title} = Typography;

const ButtonContainer = styled.div`
  .ant-input-search-enter-button + .ant-input-group-addon .ant-input-search-button,
  .ant-input-search-enter-button input + .ant-input-group-addon .ant-input-search-button {
    background: #ff6633;
  }
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 600px;

  .ant-input-group {
    background: white;
    border-radius: 5px;
  }
`;
const EducationContainer = styled.div`
width: 70%;
margin: 20px auto;
clear: both;
background-color: #222;
border-radius: 20px;
padding: 20px;
max-width: 900px;
min-width: 580px;
`;

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      width: window.matchMedia,
    };
    this.userEmails = this.userEmails.bind(this);
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({width: window.matchMedia});
  };

  userEmails(e) {
    console.log('userEmail:', e);
    this.setState({
      email: this.state.email + e,
    });
  }

  render() {

      return (
        <div>
          <BrowserView>
            <Layout>

              <Header
                style={{
                  backgroundImage: `url(${Background})`,
                  backgroundSize: 'cover',
                  width: '100%',
                  height: '750px',
                }}
              >
                <ButtonContainer>
                  <Search
                    style={{width: '500px'}}
                    placeholder="Email"
                    enterButton="Enter"
                    size="large"
                    type="email"
                    htmlType="submit"
                    onSearch={(value => console.log(value), this.userEmails)}
                  />
                </ButtonContainer>
              </Header>
            <Layout>
              <Content>
                {/* <LatestNews/> */}
                <VideoSection />
                <WishList />
              </Content>
            </Layout>
            </Layout>
          </BrowserView>
  
          {/* <MobileView>
            <Header>OKAY</Header>
          </MobileView> */}

        </div>
      );

  }
}

export default HomePage;
