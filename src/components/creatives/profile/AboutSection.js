import React from 'react'
import styled from 'styled-components'
import {EditOutlined, PlusCircleOutlined} from '@ant-design/icons';
import { Typography } from 'antd';

const { Title } = Typography;


////////////////////////// ABOUT STYLE ///////////////////////////
export const AboutContainer = styled.div`
  width: 70%;
  margin: 20px auto;
  max-width: 900px;
  min-width: 580px;
`;

export const Resume = styled.div`
  height: 100px;
  float: left;
  margin-right: 10px;
  margin-bottom: 40px;
  width: 200px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: #fc673d;
`;

const TextOverlapContainer = styled.div`
position: relative;
text-align: center;
color: white;
`

export const AboutSection = () => (
  <div style={{padding: 30}}>
    <Title level={4}>
      ABOUT
      <EditOutlined style={{float: 'right'}} />
    </Title>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab a quod voluptates itaque
      corporis eius explicabo tempora deleniti eveniet animi ad deserunt, maxime amet
      repellat natus, et sint! Quia, unde.
    </p>
    <TextOverlapContainer>
    <Resume>Resume</Resume>
    <Resume>Portfolio</Resume>
    </TextOverlapContainer>
  </div>
);
