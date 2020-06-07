import React, {Component} from 'react';
import {Col, Row, Typography, Card, Divider, Menu, Layout, Button, Avatar, Input} from 'antd';
import {StyledLink} from './fields/renderFields';
import styled from 'styled-components'
import {CenteredContainer as Container} from './fields/ContainerFields';

const {Header, Content, Footer, Sider} = Layout;
const {Search} = Input;
const {Title} = Typography;

const StyledEmail = styled.div``


const StyledDiv = styled.div`
  width: 300px;
  height: 250px;
  border-radius: 10px;
  background: white;
  margin: 15px;
  margin-bottom: 30px;
  display: block;
`

const StyledBanner = styled.div`
background-image: linear-gradient(#e22784, #fc673d);
padding: 40px;

`

class HomePage extends Component {
  render() {
    return (
      <Layout>
        <Header style={{width: '100vw', height: '100vh', display: 'flex'}}>
          {/* <ButtonContainer> */}
        <Search
        style={{ paddingTop: '600px', width: '50%', margin: '0 auto'}}
      placeholder="Email"
      enterButton="Enter"
      size="large"
      onSearch={value => console.log(value)}
    />
          {/* </ButtonContainer> */}
        </Header>
        <Content>
          <Title style={{display: 'flex', justifyContent: 'center', paddingTop: '20px'}}>LATEST NEWS STORIES</Title>
          <Container>
          <Row>
            <Col>
            <StyledDiv/>
            <StyledDiv/>
            </Col>
          </Row>
          <Row>
            <Col>
            <StyledDiv/>
            <StyledDiv/>
            </Col>
          </Row>
          </Container>
            <StyledBanner>
              <Title style={{width: '50%', margin: '0 auto'}}>A PLATFORM FOR COLLEGE CREATIVES TO CONNECT</Title>
              <Container>
              <Row gutter={[16,16]} style={{display: 'flex', justifyContent: 'center', paddingTop: '20px'}}>
                <Col span={6}>
               <StyledDiv/>
                </Col>
                <Col span={10}>
                <h5 style={{display: 'inline'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis maxime nobis quo delectus, quaerat repellendus doloribus beatae alias quibusdam placeat? Provident incidunt voluptates tenetur nulla vero? Mollitia maiores consequuntur sint tenetur, nisi beatae ab, ea voluptas ullam blanditiis, autem saepe.</h5>
                </Col>
              </Row>
              </Container>
            </StyledBanner>
        </Content>
      </Layout>
    );
  }
}

export default HomePage;
