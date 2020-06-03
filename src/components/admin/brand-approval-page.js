import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Col, Row, Typography, Card, Divider, Menu, Layout, Button, Avatar} from 'antd';

import {CheckCircleOutlined} from '@ant-design/icons';
import styled from 'styled-components';
import {StyledLink, CenteredContainer as Container} from '../fields/renderFields';

const {Title} = Typography;
const {Header, Content, Footer, Sider} = Layout;

const StyledCard = styled(Card)`
  &.ant-card {
    color: black !important;
    width: 230px;
    height: 250px;
    background-image: linear-gradient(black, gray);
  }
`;
const StyledContainer = styled(Container)`
  display: block;
  margin: 20px auto;
  width: 80%;
  max-width: 900px;
  min-width: 580px;
`

const StyledButton = styled(Button)`
margin: 5px auto;
border-radius: 4px;
  padding: 20px;
`

class AdminDashboardPage extends Component {
  render() {
    return (
      <StyledContainer>
        <Title style={{marginTop: '40px'}}>ADMIN DASHBOARD</Title>
        <h5>DASHBOARD UPDATE:</h5>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio sed est repellat dolore
          illum, facere error reprehenderit fuga corporis, enim quam quas veniam quae cum. Obcaecati
          cum maxime ullam magnam dignissimos tempore, doloribus quisquam. Laudantium cum alias nam
          ut iste officia voluptas harum, est rem neque id unde, repellendus reiciendis.
        </p>
        <Divider />
        <h5>BRAND REQUESTS</h5>
        <RequestTab>REQUESTS</RequestTab>
        <BrandTab>BRAND STATUS</BrandTab>
        <Row justify="space-between" style={{clear: 'both'}}>
          <Col span={4}>
            <div>
            <StyledCard>
            <Avatar style={{margin: '0 auto', display: 'block', width: '100px', height: '100px'}}/>
            </StyledCard>
            <div style={{margin: '10px auto', width: '230px'}}>
            <StyledButton style={{backgroundColor: '#fc673d', border: 'none', borderTopRightRadius: '0', borderBottomRightRadius: '0'}}>APPROVE</StyledButton>
            <StyledButton style={{backgroundColor: '#000', border: '1px solid white', borderTopLeftRadius: '0', borderBottomLeft: '0'}}>DECLINE</StyledButton>
            </div>
            </div>
          </Col>
          <Col span={4}>
          <div>
            <StyledCard>
            <Avatar style={{margin: '0 auto', display: 'block', width: '100px', height: '100px'}}/>
            </StyledCard>
            <div style={{margin: '10px auto', width: '230px'}}>
            <StyledButton style={{backgroundColor: '#fc673d', border: 'none', borderTopRightRadius: '0', borderBottomRightRadius: '0'}}>APPROVE</StyledButton>
            <StyledButton style={{backgroundColor: '#000', border: '1px solid white', borderTopLeftRadius: '0', borderBottomLeft: '0'}}>DECLINE</StyledButton>
            </div>
            </div>
          </Col>
          <Col span={4}>
          <div>
            <StyledCard>
            <Avatar style={{margin: '0 auto', display: 'block', width: '100px', height: '100px'}}/>
            </StyledCard>
            <div style={{margin: '10px auto', width: '230px'}}>
            <StyledButton style={{backgroundColor: '#fc673d', border: 'none', borderTopRightRadius: '0', borderBottomRightRadius: '0'}}>APPROVE</StyledButton>
            <StyledButton style={{backgroundColor: '#000', border: '1px solid white', borderTopLeftRadius: '0', borderBottomLeft: '0'}}>DECLINE</StyledButton>
            </div>
            </div>
          </Col>
          <Col span={4}>
          <div>
            <StyledCard>
            <Avatar style={{margin: '0 auto', display: 'block', width: '100px', height: '100px'}}/>
            </StyledCard>
            <div style={{margin: '10px auto', width: '230px'}}>
            <StyledButton style={{backgroundColor: '#fc673d', border: 'none', borderTopRightRadius: '0', borderBottomRightRadius: '0'}}>APPROVE</StyledButton>
            <StyledButton style={{backgroundColor: '#000', border: '1px solid white', borderTopLeftRadius: '0', borderBottomLeft: '0'}}>DECLINE</StyledButton>
            </div>
            </div>
          </Col>
        </Row>
        <h5 style={{marginTop: '40px'}}>
          VERIFICATION REQUESTS <CheckCircleOutlined />
        </h5>
        <RequestTab>REQUESTS</RequestTab>
        <BrandTab>BRAND STATUS</BrandTab>
        <Row justify="space-between" style={{clear: 'both'}}>
          <Col span={4}>
          <div>
            <StyledCard>
            <Avatar style={{margin: '0 auto', display: 'block', width: '100px', height: '100px'}}/>
            </StyledCard>
            <div style={{margin: '10px auto', width: '230px'}}>
            <StyledButton style={{backgroundColor: '#fc673d', border: 'none', borderTopRightRadius: '0', borderBottomRightRadius: '0'}}>APPROVE</StyledButton>
            <StyledButton style={{backgroundColor: '#000', border: '1px solid white', borderTopLeftRadius: '0', borderBottomLeft: '0'}}>DECLINE</StyledButton>
            </div>
            </div>
          </Col>
          <Col span={4}>
          <div>
            <StyledCard>
            <Avatar style={{margin: '0 auto', display: 'block', width: '100px', height: '100px'}}/>
            </StyledCard>
            <div style={{margin: '10px auto', width: '230px'}}>
            <StyledButton style={{backgroundColor: '#fc673d', border: 'none', borderTopRightRadius: '0', borderBottomRightRadius: '0'}}>APPROVE</StyledButton>
            <StyledButton style={{backgroundColor: '#000', border: '1px solid white', borderTopLeftRadius: '0', borderBottomLeft: '0'}}>DECLINE</StyledButton>
            </div>
            </div>
          </Col>
          <Col span={4}>
          <div>
            <StyledCard>
            <Avatar style={{margin: '0 auto', display: 'block', width: '100px', height: '100px'}}/>
            </StyledCard>
            <div style={{margin: '10px auto', width: '230px'}}>
            <StyledButton style={{backgroundColor: '#fc673d', border: 'none', borderTopRightRadius: '0', borderBottomRightRadius: '0'}}>APPROVE</StyledButton>
            <StyledButton style={{backgroundColor: '#000', border: '1px solid white', borderTopLeftRadius: '0', borderBottomLeft: '0'}}>DECLINE</StyledButton>
            </div>
            </div>
          </Col>
          <Col span={4}>
          <div>
            <StyledCard>
            <Avatar style={{margin: '0 auto', display: 'block', width: '100px', height: '100px'}}/>
            </StyledCard>
            <div style={{margin: '10px auto', width: '230px'}}>
            <StyledButton style={{backgroundColor: '#fc673d', border: 'none', borderTopRightRadius: '0', borderBottomRightRadius: '0'}}>APPROVE</StyledButton>
            <StyledButton style={{backgroundColor: '#000', border: '1px solid white', borderTopLeftRadius: '0', borderBottomLeft: '0'}}>DECLINE</StyledButton>
            </div>
            </div>
          </Col>
        </Row>
      </StyledContainer>
    );
  }
}

const RequestTab = styled.div`
  float: left;
  font-family: Hanson Bold;
  background-color: #333;
  padding: 15px;
  border-top: 4px solid #e22784;
  width: 150px;
  font-size: 0.7em;
  text-align: center;
  margin: 0;
`;
const BrandTab = styled.div`
  float: left;
  font-family: Hanson Bold;
  padding: 15px;
  border-top: 4px solid #333;
  width: 150px;
  font-size: 0.7em;
  text-align: center;
  margin-bottom: 40px;
`;

const mapStateToProps = (state, ownProps) => {
  return {
    isLoading: state.auth.isLoading,
  };
};

export default connect(mapStateToProps, {})(AdminDashboardPage);
