import React from 'react';
import {Layout, Typography, Col, Row, Card, Avatar} from 'antd';
import styled from 'styled-components';

const {Title} = Typography;
const {Content} = Layout;

export const MayKnow = () => {
  return (
    <div style={{margin: '0 auto', width: '75%'}}>
      <Layout>
        <Content>
          <Title level={2} style={{marginBottom: 0}}>
            CREATIVES YOU MAY KNOW
          </Title>
          <strong>From this company</strong>
          <OrangeText>SEE ALL</OrangeText>
          {/* FIRST ROW */}
          <Row justify="space-between" style={{marginTop: 20}}>
          <Col span={5}>
              <StyledCard>
                <StyledAvatar />
                <strong>
                  FIRST NAME LAST NAME
                </strong>
                <small style={{display: 'block', textAlign: 'center', marginTop: '5px'}}>
                  Headline from your profile
                </small>
              </StyledCard>
            </Col>
            <Col span={5}>
              <StyledCard>
                <StyledAvatar />
                <strong>
                  FIRST NAME LAST NAME
                </strong>
                <small style={{display: 'block', textAlign: 'center', marginTop: '5px'}}>
                  Headline from your profile
                </small>
              </StyledCard>
            </Col>
            <Col span={5}>
              <StyledCard>
                <StyledAvatar />
                <strong>
                  FIRST NAME LAST NAME
                </strong>
                <small style={{display: 'block', textAlign: 'center', marginTop: '5px'}}>
                  Headline from your profile
                </small>
              </StyledCard>
            </Col>
            <Col span={5}>
              <StyledCard>
                <StyledAvatar />
                <strong>
                  FIRST NAME LAST NAME
                </strong>
                <small style={{display: 'block', textAlign: 'center', marginTop: '5px'}}>
                  Headline from your profile
                </small>
              </StyledCard>
            </Col>
          </Row>
          {/* SECOND ROW */}
          <Row justify="space-between" style={{marginTop: 20}}>
          <Col span={5}>
              <StyledCard>
                <StyledAvatar />
                <strong>
                  FIRST NAME LAST NAME
                </strong>
                <small style={{display: 'block', textAlign: 'center', marginTop: '5px'}}>
                  Headline from your profile
                </small>
              </StyledCard>
            </Col>
            <Col span={5}>
              <StyledCard>
                <StyledAvatar />
                <strong>
                  FIRST NAME LAST NAME
                </strong>
                <small style={{display: 'block', textAlign: 'center', marginTop: '5px'}}>
                  Headline from your profile
                </small>
              </StyledCard>
            </Col>
            <Col span={5}>
              <StyledCard>
                <StyledAvatar />
                <strong>
                  FIRST NAME LAST NAME
                </strong>
                <small style={{display: 'block', textAlign: 'center', marginTop: '5px'}}>
                  Headline from your profile
                </small>
              </StyledCard>
            </Col>
            <Col span={5}>
              <StyledCard>
                <StyledAvatar />
                <strong>
                  FIRST NAME LAST NAME
                </strong>
                <small style={{display: 'block', textAlign: 'center', marginTop: '5px'}}>
                  Headline from your profile
                </small>
              </StyledCard>
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
};

export const OrangeText = styled.div`
  font-family: Hanson Bold;
  font-size: 0.8em;
  margin: 10px 0;
  color: #fc673d !important;
`;

export const StyledCard = styled(Card)`
  &.ant-card {
    color: black !important;
    min-width: 150px;
    background-image: linear-gradient(black, #777777);
    border-radius: 20px;
  }
`;

export const StyledAvatar = styled(Avatar)`
  &.ant-avatar {
    margin: 10px auto;
    display: block;
    width: 100px;
    height: 100px;
  }
`;

export const ActivityText = styled.strong`
  white-space: normal;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
