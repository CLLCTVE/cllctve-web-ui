import React from 'react'
import { Typography, Layout, Col, Row, Card, Avatar} from 'antd'
import styled from 'styled-components'
import {StyledButton} from '../../fields/renderFields';

const {Title} = Typography
const {Content} = Layout

export const StyledContainer = styled.div`
margin: 20px auto;
width: 80%;
border: 1px solid white;
padding: 20px;
border-radius: 10px
`
export const StyledCard = styled(Card)`
  &.ant-card {
    min-width: 150px;
    background-image: linear-gradient(black, #ff6633);
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

export const MatchedJob = () => {
    return (
        <StyledContainer>
            <Layout>
                <Content>
                <Title level={4} style={{marginBottom: 0}}>MATCHED JOBS</Title>
                    <strong>Based on skill</strong>
                    <StyledCard style={{marginTop: 10}}>
                    <StyledAvatar/>
                    <strong>COMPANY NAME</strong>
                    <br/>
                    <small>Job Title</small>
                    <br/>
                    <small>Description preview: Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, distinctio?</small>
                    <StyledButton style={{background: '#555', display: 'block', margin: '0 auto', marginTop: 20}}>QUICK VIEW</StyledButton>
                    </StyledCard>
                </Content>
            </Layout>
        </StyledContainer>
    )
}