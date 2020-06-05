import React from 'react';
import styled from 'styled-components';
import { Typography } from 'antd';

const { Title } = Typography;

////////////////////////// SKILLS SECTION ///////////////////////////
export const SkillsContainer = styled.div`
  width: 70%;
  margin: 20px auto;
  clear: both;
  background-color: #222;
  border-radius: 20px;
  padding: 20px;
  max-width: 900px;
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


export const SkillSection = ({skills}) => (
  <SkillsContainer>
    <Title level={4}>SKILLS</Title>
    <SkillWrapper>
      {skills.map((skill, index) => (
        <Skill key={index}>
          {skill}
        </Skill>
      ))}
    </SkillWrapper>
  </SkillsContainer>
);
