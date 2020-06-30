import React, { Component } from 'react'
import {Layout, Typography, Col, Row} from 'antd'
import styled from 'styled-components'

const {Content, Sider} = Layout;
const {Title} = Typography;

class NewsPage extends Component {
    render(){
        return(
            <Layout>
                <Content>
                    <Title level={2}>CLLCTVE NEWS</Title>
                    <h5>INSERT DATE</h5>
                </Content>
            </Layout>
        )
    }
}

export default NewsPage;