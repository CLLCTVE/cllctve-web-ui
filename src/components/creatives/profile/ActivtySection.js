import React from 'react';
import styled from 'styled-components';
import {Col, Row, Typography, Card, Divider, Menu, Layout, Button, Avatar, Modal} from 'antd';

const {Title} = Typography

export const ActivitySection = ({activities}) => (
  <div style={{padding: 30}}>
      <Title level={2} style={{marginBottom: 0}}>RECENT ACTIVITIES</Title>
      <strong>Based on activity</strong>
      <OrangeText>SEE ALL</OrangeText>
    <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 16]}>

      {/* {activities.map((activity, index) => (
        <Col span={6} key={index}>
          {activity}
        </Col>
      ))} */}

      <Col span={5} className='ant-col ant-col-xs-24 ant-col-xl-6'>
        <StyledCard>
          <StyledAvatar/>
          <ActivityText>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab a quod voluptates Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Ab a quod voluptates
          </ActivityText>
          <small style={{display: 'block', textAlign: 'center', marginTop: '5px'}}>
            Your post has been reshared
          </small>
        </StyledCard>
      </Col>
      <Col span={5} className='ant-col ant-col-xs-24 ant-col-xl-6'>
        <StyledCard>
          <StyledAvatar/>
          <ActivityText>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab a quod voluptates Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Ab a quod voluptates
          </ActivityText>
          <small style={{display: 'block', textAlign: 'center', marginTop: '5px'}}>
            Your post has been reshared
          </small>
        </StyledCard>
      </Col>
      <Col span={5} className='ant-col ant-col-xs-24 ant-col-xl-6'>
        <StyledCard>
          <StyledAvatar/>
          <ActivityText>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab a quod voluptates Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Ab a quod voluptates
          </ActivityText>
          <small style={{display: 'block', textAlign: 'center', marginTop: '5px'}}>
            Your post has been reshared
          </small>
        </StyledCard>
      </Col>
      <Col span={5} className='ant-col ant-col-xs-24 ant-col-xl-6'>
        <StyledCard>
          <StyledAvatar/>
          <ActivityText>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab a quod voluptates Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Ab a quod voluptates
          </ActivityText>
          <small style={{display: 'block', textAlign: 'center', marginTop: '5px'}}>
            Your post has been reshared
          </small>
        </StyledCard>
      </Col>
      
    </Row>
  </div>
);


export const ActivityText = styled.strong`
  white-space: normal;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const StyledAvatar = styled(Avatar)`
      &.ant-avatar {
        margin: 10px auto;
        display: block;
        width: 100px ;
        height: 100px;
      }
`

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

export default ActivitySection;
