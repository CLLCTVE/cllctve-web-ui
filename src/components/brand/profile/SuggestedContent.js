import React from 'react'
import {Layout, Typography, Col, Row, Avatar} from 'antd'
import styled from 'styled-components'

const {Title} = Typography
const {Content} = Layout

const StyledDiv = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 10px;
  background: white;
`;

export const SuggestedContent = () => {
    return(
        <div style={{margin: '20px auto', width: '80%', border: '1px white solid', padding: 20, borderRadius: 10}}>
            <Layout>
                <Content>
                    <Title level={4}>SUGGESTED CONTENT</Title>
                    <strong>Based on your activity</strong>
                    <StyledDiv/>
                </Content>
            </Layout>
        </div>
    )
}