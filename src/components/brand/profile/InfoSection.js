import React, {Component} from 'react';
import {Layout, Col, Row, Typography, Avatar, Button} from 'antd';
import {StyledButton} from '../../fields/renderFields';
import {EditOutlined} from '@ant-design/icons';

const {Content, Sider} = Layout;
const {Title} = Typography;

export const InfoSection = () => {
  return (
    <div style={{width: '75%', margin: '20px auto'}}>
      <Layout>
        <Content>
          <Row>
            <Col span={6}>
              <Avatar style={{width: '150px', height: '150px'}} />
            </Col>
            <Col span={10} style={{marginTop: 20}}>
              <Title level={4}>
                BRAND NAME <EditOutlined />
              </Title>
              <h5>Field</h5>
              <p>Location • XX,XXX Followers</p>
            </Col>
            <Col span={8} style={{marginTop: 20}}>
              <Button style={{background: 'black', border: '1px solid white', float: "right"}}>
                GO TO DASHBOARD
              </Button>
              <div style={{marginTop: 40, float: "right"}}>
                <StyledButton style={{borderRadius: 50, marginRight: 10}}>LINK WEBSITE</StyledButton>
                <StyledButton style={{borderRadius: 50, background: 'white'}}>
                  <div style={{color: 'black'}}>MORE</div>
                </StyledButton>
              </div>
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
};
