import React from 'react'
import styled from 'styled-components'
import {Col, Row, Typography, Card, Divider, Menu, Layout, Button, Avatar, Modal} from 'antd';


export const ActivityContainer = styled.div`
  width: 70%;
  margin: 20px auto;
  max-width: 900px;
  min-width: 580px;
`;

export const ActivityText = styled.strong`
  white-space: normal;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

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
    background-image: linear-gradient(black, #e22784);
    border-radius: 20px;
  }
`;

export const ActivitySection = ({activities}) => (
  <ActivityContainer>
   <Row>
              <Col span={24}>
                <Title level={2}>RECENT ACTIVITY</Title>
                <strong>Based on activity</strong>
                <OrangeText>SEE ALL</OrangeText>
              </Col>
            </Row>
  </ActivityContainer>
);
