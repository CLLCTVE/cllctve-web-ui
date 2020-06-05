import React, {Component} from 'react'
import styled from 'styled-components'
import {Col, Row, Typography, Card, Divider, Menu, Layout, Button, Avatar, Modal} from 'antd';
import {EditOutlined, PlusCircleOutlined} from '@ant-design/icons';




const AboutSection = () => {
return(
    <AboutContainer>
            <h2>
              ABOUT
              <EditOutlined style={{float: 'right'}} />
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab a quod voluptates itaque
              corporis eius explicabo tempora deleniti eveniet animi ad deserunt, maxime amet
              repellat natus, et sint! Quia, unde.
            </p>
            <Resume />
            <Resume />
          </AboutContainer>
)
}

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
  width: 150px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: #fc673d;
`;

export default AboutSection;