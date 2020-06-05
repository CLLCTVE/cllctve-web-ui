import React, {Component} from 'react';
import styled from 'styled-components';
import {Col, Row, Typography, Card, Divider, Menu, Layout, Button, Avatar, Modal} from 'antd';


export const StyledCard = styled(Card)`
  &.ant-card {
    color: black !important;
    min-width: 150px;
    background-image: linear-gradient(black, #e22784);
    border-radius: 20px;
  }
`;

export const StyledButton = styled(Button)`
  margin: 5px auto;
  border-radius: 4px;
  padding: 20px;
`;

////////////////////////// BACKGROUND IMAGE ///////////////////////////
export const Header = styled.div`
  height: 310px;
  width: 100%;
  min-width: 667px;
  background-color: #777;
  border-bottom: 2px solid #fc673d;
`;
////////////////////////// USER INFO SECTION ///////////////////////////
export const ProfileImg = styled.div`
  position: relative;
  bottom: 50px;
  grid-area: img;
  width: 150px;
  height: 150px;
  border-radius: 20px;
  background-color: white;
`;
export const InfoContainer = styled.div`
  display: grid;
  grid-template-areas: 'img header button';
  grid-gap: 10px;
  padding: 10px;
  margin: 20px auto;
  width: 70%;
  max-width: 900px;
  min-width: 580px;
`;
export const EditButton = styled.button`
  display: block;
  border: 1px solid white;
  background-color: black;
  border-radius: 3px;
  padding: 5px;
  text-align: center;
  float: right;
`;
export const OrangeText = styled.div`
  font-family: Hanson Bold;
  font-size: 0.8em;
  margin: 10px 0;
  color: #fc673d !important;
`;
export const AddSection = styled.button`
  background-image: linear-gradient(to right, #e22784, #fc673d);
  font-size: 1.5em;
  border-radius: 50px;
  text-align: center;
  border: none;
  margin-right: 30px;
`;
export const MoreButton = styled.button`
  background-color: #fff;
  font-size: 1.5em;
  border-radius: 50px;
  text-align: center;
  border: none;
`;

export const White = styled.div`
  background-color: #fff;
  color: #000;
  padding: 5px 15px;
  border-radius: 50px;
  display: block;
  margin-right: 10px;
`;

////////////////////////// ABOUT SECTION ///////////////////////////
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
  width: 150px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: #fc673d;
`;
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

////////////////////////// RECENT ACTIVITY SECTION ///////////////////////////

export const ActivityContainer = styled.div`
  width: 70%;
  margin: 20px auto;
  max-width: 900px;
  min-width: 580px;
`;

export const ActivityText = styled.strong`
  white-space: normal;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

////////////////////////// EXPERIENCE SECTION ///////////////////////////
export const ExperienceContainer = styled.div`
  width: 70%;
  margin: 20px auto;
  max-width: 900px;
  min-width: 580px;
`;

export const ExperienceText = styled.strong`
  white-space: normal;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const ImageBox = styled.img`
  width: 180px;
  height: 100px;
  border: 1px solid #e22784;
  border-radius: 10px;
  margin-right: 10px;
`;
////////////////////////// EDUCATION SECTION ///////////////////////////
export const EducationContainer = styled.div`
  width: 70%;
  margin: 20px auto;
  clear: both;
  background-color: #222;
  border-radius: 20px;
  padding: 20px;
  max-width: 900px;
  min-width: 580px;
`;
////////////////////////// LICENSES SECTION ///////////////////////////
export const LicenseContainer = styled.div`
  width: 70%;
  margin: 20px auto;
  max-width: 900px;
  min-width: 580px;
`;

export const HonorsContainer = styled.div`
width: 70%;
margin: 20px auto;
clear: both;
background-image: linear-gradient(#e22784, #fc673d);
border-radius: 20px;
padding: 20px;
max-width: 900px;
min-width: 580px;
margin-bottom: 40px;
`;