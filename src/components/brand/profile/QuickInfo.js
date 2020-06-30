import React from 'react';
import {Layout, Typography, Row, Col, Divider} from 'antd';
import {EditOutlined} from '@ant-design/icons';

const {Content} = Layout;
const {Title} = Typography;

export const QuickInfo = () => {
  return (
    <div style={{width: '75%', margin: '60px auto'}}>
      <Layout>
        <Content>
          <Title level={2} style={{marginBottom: 40}}>
            QUICK INFO <EditOutlined style={{float: 'right'}} />
          </Title>
          <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 16]}>
              <Col span={6} className='ant-col ant-col-xs-24 ant-col-xl-6'>
              <Title level={4}>WEBSITE</Title>
              </Col>
              <Col span={18} className='ant-col ant-col-xs-24 ant-col-xl-18'>
              <p>http://website.com</p>
              </Col>
            </Row>
            <Row>
                <Col span={6} className='ant-col ant-col-xs-24 ant-col-xl-6'>
            <Title level={4}>COMPANY SIZE</Title>
                </Col>
                <Col span={18} className='ant-col ant-col-xs-24 ant-col-xl-18'>
              <p>Social Media</p>
                </Col>
            </Row>
            <Row>
                <Col span={8} className='ant-col ant-col-xs-24 ant-col-xl-6'>
            <Title level={4}>INDUSTRY</Title>
                </Col>
                <Col span={18} className='ant-col ant-col-xs-24 ant-col-xl-18'>
            <p>10,001 + employees</p>
                </Col>
            </Row>
            
            <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 16]}>
                <Col span={6} className='ant-col ant-col-xs-24 ant-col-xl-6'>
            <Title level={4}>TYPE</Title>
                </Col>
                <Col span={18} className='ant-col ant-col-xs-24 ant-col-xl-18'>
            <p>Private</p>
                </Col>
            </Row>
            <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 16]}>
                <Col span={6} className='ant-col ant-col-xs-24 ant-col-xl-6'>
            <Title level={4}>SPECIALTIES</Title>
                </Col>
                <Col span={18} className='ant-col ant-col-xs-24 ant-col-xl-18'>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eius numquam dolore
                ipsa distinctio quasi repellendus voluptatem adipisci eum saepe.
              </p>
                </Col>
            </Row>
            <Divider style={{width: '70%'}}/>
        </Content>
      </Layout>
    </div>
  );
};
