import React, {Component} from 'react';
import {Col, Row, Typography, Card, Divider, Menu, Layout, Button, Avatar, Input} from 'antd';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

const {Header, Content, Footer, Sider} = Layout;
const {Title} = Typography;
const {Search} = Input;

const MainContainer = styled.div`
  display: grid;
  width: 60vw;
  margin: 0 auto;
  text-transform: uppercase;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr auto;
  grid-template-areas: auto content auto;
  grid-gap: 2rem;
`;

const StyledBanner = styled.div`
  background-image: linear-gradient(#e22784, #fc673d);
  padding: 40px;

  @media only screen and (max-width: 800px) {
    .container {
      grid-template-columns: 1fr;
      grid-template-rows: 0.4fr 0.4fr 1.2fr;
      grid-template-areas:
        'auto'
        'content1'
        'content2'
        'auto';
    }
  }
`;

class VideoSection extends Component {
  render() {
    return (
   
        <StyledBanner>
          <Title level={2} style={{textAlign: 'center', marginBottom: '40px'}}>
            A PLATFORM FOR COLLEGE CREATIVES TO CONNECT
          </Title>
          <Row justify="space-around" gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 16]}>
            <Col span={5} className='ant-col ant-col-xs-24 ant-col-xl-6'>
            <ReactPlayer
              url="https://youtu.be/YVB3PrS5HDg"
              height={250}
              width={450}
              style={{margin: '0 auto'}}
            />
            </Col>
            <Col span={5} className='ant-col ant-col-xs-24 ant-col-xl-6'>
            <p style={{lineHeight: '2'}}>
              Our vision is to empower the next generation of creatives. We bridge the gap between
              creatives and brands by providing a platform for college students to develop their
              portfolio, showcase their skills, and increase their visibility, while providing
              brands exclusive access to local Gen-Z consumers and Gen-Z content creators.
            </p>

            </Col>
          </Row>

                    <MainContainer className="container">
          </MainContainer>
        </StyledBanner>
    );
  }
}
export default VideoSection;
