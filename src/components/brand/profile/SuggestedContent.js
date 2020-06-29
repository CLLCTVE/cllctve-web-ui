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

const StyledContainer = styled.div`
display: flex;
flex-wrap: wrap;
margin: 20px auto;
width: 80%;
border: 1px solid white;
padding: 20px;
border-radius: 10px
`

export const SuggestedContent = () => {
    return(
        <StyledContainer>
            <Layout>
                <Content>
                    <Title level={4}>SUGGESTED CONTENT</Title>
                    <strong>Based on your activity</strong>
                    <StyledDiv/>
                    <h5 style={{marginTop: 10}}>ARE BRANDS HIJACKING PRIDE MONTH?</h5>
                    <p>Over the years, June has become associated with rainbow flags. pride parades, and ...</p>
                    <StyledDiv/>
                    <h5 style={{marginTop: 10}}>THE DOMINATION OF KPOP IN THE WEST</h5>
                    <p>K-Pop which stands for korean pop has been around since the early 90s and ...</p>
                    <StyledDiv/>
                    <h5 style={{marginTop: 10}}>THE 'MARVEL' WAY OF BRANDING</h5>
                    <p>Marvel Entertainment is arguable one of the most recognized brand names in the ...</p>
                </Content>
            </Layout>
        </StyledContainer>
    )
}