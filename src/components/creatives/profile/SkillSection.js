import React from 'react';
import styled from 'styled-components';
import { Typography, Divider } from 'antd';
import { EditOutlined } from '@ant-design/icons';

const { Title } = Typography;

////////////////////////// SKILLS SECTION ///////////////////////////
export const SkillsContainer = styled.div`
  clear: both;
  background-color: #222;
  border-radius: 20px;
  padding: 20px;
  min-width: 580px;
`;
export const SkillWrapper = styled.div`
  display: flex;
`;

export const Skill = styled.div`
  color: #000 !important;
  font-family: Hanson Bold;
  background-color: #fff;
  padding: 5px 15px;
  border-radius: 50px;
  margin-right: 10px;
`;

export const InterestContainer = styled.div`
  display: flex;
  max-width: 900px;
  min-width: 580px;
`;

export const InterestPink = styled.div`
  background-color: #e22784;
  font-family: Hanson Bold;
  padding: 5px 15px;
  border-radius: 50px;
  margin-right: 10px;
`;

export const InterestOrange = styled.div`
  background-color: #fc673d;
  font-family: Hanson Bold;
  padding: 5px 15px;
  border-radius: 50px;
  margin-right: 10px;
`;


export const SkillSection = ({skills=[], interests=[]}) => (
  <SkillsContainer>
    <Title level={4}>
      SKILLS
      <EditOutlined style={{float: 'right'}} />
    </Title>
    <SkillWrapper>
      {skills.map((skill, index) => (
        <InterestPink key={index}>
          {skill}
        </InterestPink>
      ))}
    </SkillWrapper>
    <Divider />
    <Title level={4}>
      INTERESTS
      <EditOutlined style={{float: 'right'}} />
    </Title>
    <InterestContainer>
      {interests.map((interest, index) => (
        <InterestOrange key={index}>
          {interest}
        </InterestOrange>
      ))}
    </InterestContainer>
  </SkillsContainer>
);
