import React, { Component} from 'react'
import {Layout, Col, Row, Typography, Avatar} from 'antd'
import { StyledButton } from '../../fields/renderFields'

const { Content, Sider} = Layout;
const {Title} = Typography;

export const InfoSection = () => {
    return(
        <div style={{width: '70%', margin: '0 auto'}}>
        <Layout>
            <Content>
                <Row>
                    <Col span={4}><Avatar style={{width: '100px', height: '100px', marginTop: -50}}/></Col>
                    <Col span={14}><Title level={4}></Title></Col>
                    <Col span={6}></Col>
                </Row>
            </Content>
        </Layout>

        </div>
    )
}

