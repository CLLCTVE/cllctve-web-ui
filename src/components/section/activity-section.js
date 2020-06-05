import React, {Component} from 'react'
import styled from 'styled-components'
import {Col, Row, Typography, Card, Divider, Menu, Layout, Button, Avatar, Modal} from 'antd';
import {EditOutlined, PlusCircleOutlined} from '@ant-design/icons';

class ActivitySection extends Component {
    render(){
        return(
            <ActivityContainer>
            <Row>
              <Col span={24}>
                <h2 style={{marginBottom: '0'}}>RECENT ACTIVITY</h2>
                <strong>Based on activity</strong>
                <OrangeText>SEE ALL</OrangeText>
              </Col>
            </Row>
            <Row justify="space-between">
              <Col span={4}>
                <div>
                  <StyledCard>
                    <Avatar
                      style={{margin: '0 auto', display: 'block', width: '100px', height: '100px'}}
                    />
                    <ActivityText>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab a quod voluptates
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab a quod voluptates
                    </ActivityText>
                    <small style={{display: 'block', textAlign: 'center', marginTop: '5px'}}>
                      Your post has been reshared
                    </small>
                  </StyledCard>
                </div>
              </Col>
              <Col span={4}>
                <div>
                  <StyledCard>
                    <Avatar
                      style={{margin: '0 auto', display: 'block', width: '100px', height: '100px'}}
                    />
                    <ActivityText>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab a quod voluptates
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab a quod voluptates
                    </ActivityText>
                    <small style={{display: 'block', textAlign: 'center', marginTop: '5px'}}>
                      Your post has been reshared
                    </small>
                  </StyledCard>
                </div>
              </Col>
              <Col span={4}>
                <div>
                  <StyledCard>
                    <Avatar
                      style={{margin: '0 auto', display: 'block', width: '100px', height: '100px'}}
                    />
                    <ActivityText>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab a quod voluptates
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab a quod voluptates
                    </ActivityText>
                    <small style={{display: 'block', textAlign: 'center', marginTop: '5px'}}>
                      Your post has been reshared
                    </small>
                  </StyledCard>
                </div>
              </Col>
              <Col span={4}>
                <div>
                  <StyledCard>
                    <Avatar
                      style={{margin: '0 auto', display: 'block', width: '100px', height: '100px'}}
                    />
                    <ActivityText>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab a quod voluptates
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab a quod voluptates
                    </ActivityText>
                    <small style={{display: 'block', textAlign: 'center', marginTop: '5px'}}>
                      Your post has been reshared
                    </small>
                  </StyledCard>
                </div>
              </Col>
            </Row>
            <Divider />
          </ActivityContainer>
        )
    }
}

////////////////////////// ACTIVITY STYLE ///////////////////////////

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

export default ActivitySection;