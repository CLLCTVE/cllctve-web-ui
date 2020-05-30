import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Col, Row, Typography, Card, Divider, Menu, Layout} from 'antd';

import {CheckCircleOutlined} from '@ant-design/icons';
import styled from 'styled-components';
import {StyledLink, CenteredContainer as Container} from '../fields/renderFields';

const {Title} = Typography;
const {Header, Content, Footer, Sider} = Layout;

const StyledCard = styled(Card)`
  &.ant-card {
    color: black !important;
    width: 15vw;
    height: 50vh;
  }
`;

class AdminDashboardPage extends Component {
  render() {
    return (
      <Container style={{display: 'block', margin: '20px auto', width: '80%'}}>
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
            <StyledCard />
          </Col>
          <Col span={4}>
            <StyledCard />
          </Col>
          <Col span={4}>
            <StyledCard />
          </Col>
          <Col span={4}>
            <StyledCard />
          </Col>
        </Row>
        <h5 style={{marginTop: '40px'}}>
          VERIFICATION REQUESTS <CheckCircleOutlined />
        </h5>
        <RequestTab>REQUESTS</RequestTab>
        <BrandTab>BRAND STATUS</BrandTab>
        <Row justify="space-between" style={{clear: 'both'}}>
          <Col span={4}>
            <StyledCard />
          </Col>
          <Col span={4}>
            <StyledCard />
          </Col>
          <Col span={4}>
            <StyledCard />
          </Col>
          <Col span={4}>
            <StyledCard />
          </Col>
        </Row>
      </Container>
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
