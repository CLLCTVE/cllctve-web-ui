import React, {Component} from 'react';
import {isMobile, isBrowser, MobileView, BrowserView} from 'react-device-detect';
import {Typography, Layout, Input} from 'antd';
import styled from 'styled-components';
import Background from './images/background-img.png';
import VideoSection from './landing/VideoSection';
import LatestNews from './landing/latestNews';
import WishList from './landing/wishList';

const {Header, Content} = Layout;
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

class LandingPage extends Component {
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

export default LandingPage;
