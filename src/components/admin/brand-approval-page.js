import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Col, Row, Typography, Card } from 'antd';
import styled from 'styled-components';
import { StyledLink, CenteredContainer as Container} from '../fields/renderFields';

const { Title } = Typography;

const StyledCard = styled(Card)`
  &.ant-card {
    color: black !important;
  }
`;

class AdminDashboardPage extends Component {
  
  
  render() {
    return (
      <Container>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="left">
          <Col span={24}>
            <Title level={2}>Admin Dashboard</Title>
          </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="left">
          <Col span={24}>
            <StyledCard title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </StyledCard>
          </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="left">
          <Col span={24}>
            <StyledCard title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </StyledCard>
          </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="left">
          <Col span={24}>
            <StyledCard title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </StyledCard>
          </Col>
        </Row>
        
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoading: state.auth.isLoading,
  };
};

export default connect(mapStateToProps, {})(AdminDashboardPage);
