import React, {Component} from 'react';
import {Col, Row, Typography, Card, Divider, Menu, Layout, Button, Avatar, Input} from 'antd';
import {StyledLink, StyledButton} from './fields/renderFields';
import styled from 'styled-components';
import {CenteredContainer as Container} from './fields/ContainerFields';
import {Field as FField} from 'react-final-form';
import {CheckCircleOutlined} from '@ant-design/icons';
import Background from './images/background-img.png';
import ReactPlayer from 'react-player';
import VideoSection from './landing/VideoSection';

const {Header, Content, Footer, Sider} = Layout;
const {Search} = Input;
const {Title} = Typography;

const MainContainer = styled.div`
  display: grid;
  width: 100vh;
  margin: 0 auto;
  grid-template-rows: 4fr 1fr 0.5fr;
  grid-template-columns: 0.5fr auto 0.5fr;
  grid-template-areas:
    header header header
    header header header
    blank1 news blank1
    blank2 video blank2
    blank3 email blank3;
  grid-gap: 2rem;
`;

const StyledDiv = styled.div`
  width: 300px;
  height: 250px;
  border-radius: 10px;
  background: white;
  margin: 15px;
  margin-bottom: 30px;
  display: block;
`;

const StyledBanner = styled.div`
  background-image: linear-gradient(#e22784, #fc673d);
  padding: 40px;
`;

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
const StyledInput = styled(Input)`
  border: none !important;
  border-bottom: 1px solid #555 !important;
  padding-top: 20px !important;
`;

class HomePage extends Component {
  render() {
    return (
      <Layout>
        <Header
          style={{backgroundImage: `url(${Background})`, backgroundSize: 'cover', height: '750px'}}
        >
          <ButtonContainer>
            <Search
              style={{width: '50%'}}
              placeholder="Email"
              enterButton="Enter"
              size="large"
              onSearch={value => console.log(value)}
            />
          </ButtonContainer>
        </Header>

        {/* <Title style={{display: 'flex', justifyContent: 'center', paddingTop: '20px'}}>
            LATEST NEWS STORIES
          </Title>
          <Container>
            <Row>
              <Col>
                <StyledDiv />
                <StyledDiv />
              </Col>
            </Row>
            <Row>
              <Col>
                <StyledDiv />
                <StyledDiv />
              </Col>
            </Row>
          </Container> */}

            <VideoSection/>
        {/* <Content>
          <StyledBanner>
            <Title style={{textAlign: 'center'}}>A PLATFORM FOR COLLEGE CREATIVES TO CONNECT</Title>
            <Row
              gutter={[16, 16]}
              style={{display: 'flex', justifyContent: 'center', paddingTop: '20px'}}
            >
              <Col span={12}>
                <div>
                  <ReactPlayer url="https://youtu.be/YVB3PrS5HDg" />
                </div>
              </Col>
              <Col span={12}>
                <Title level={4}>
                  Our vision is to empower the next generation of creatives. We bridge the gap
                  between creatives and brands by providing a platform for college students to
                  develop their portfolio, showcase their skills, and increase their visibility,
                  while providing brands exclusive access to local Gen-Z consumers and Gen-Z content
                  creators.
                </Title>
              </Col>
            </Row>
          </StyledBanner>
        </Content> */}

        <Container style={{backgroundColor: 'black'}}>
          <Row gutter={[{xs: 8, sm: 16, md: 24, lg: 32}, 16]}>
            <Col span={8} style={{margin: '0 auto'}}>
              <CheckCircleOutlined style={{fontSize: '140px', padding: '30px'}} />
              <Title>STAY UPDATED</Title>
            </Col>
            <Col span={8} style={{margin: '0 auto'}}>
              <StyledInput placeholder="First Name" type="text" />
              <StyledInput placeholder="Last Name" type="text" />
              <StyledInput placeholder="Email" type="text" />
              <StyledInput placeholder="Major" type="text" />
              <StyledInput placeholder="List your skills (seperated by a comma)" type="text" />
              <StyledButton style={{marginTop: '20px'}}>JOIN THE WISHLIST</StyledButton>
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}

export default HomePage;
