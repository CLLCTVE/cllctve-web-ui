import React, {Component} from 'react';
import styled from 'styled-components';
import {Layout, Row, Col, Typography} from 'antd';
import Background from '../../images/paint.jpg';

const {Header, Content} = Layout;

export const MainImage = () => {
  return (
    <Layout>
      <Header
        style={{
          width: '100%',
          height: '45vh',
          backgroundImage: `url(${Background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderBottom: '2px solid orange',
        }}
      ></Header>
    </Layout>
  );
};
