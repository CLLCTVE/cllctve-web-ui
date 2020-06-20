import React from 'react';
import styled from 'styled-components';
import {Typography, Layout} from 'antd';
import {StyledButton} from '../../fields/renderFields';
import {NavLink as Link} from 'react-router-dom';

const {Title} = Typography;

const StartDiscovery = () => {
  return (
    <div>
      <Layout style={{background: 'black'}}>
        <div style={{display: 'block', margin: '20% auto', textAlign: 'center'}}>
          <Title style={{marginBottom: '20px'}}>BRAND DISCOVERY FORM</Title>
          <p>
            Welcome to the Brand Discovery Form, where you will fill out information about your
            consumer, content, and competitor.
          </p>
          <StyledButton size="large" shape="round" style={{margin: '20px'}}>
            <Link to="/brand/discovery">CONTINUE</Link>
          </StyledButton>
          <br />
          <Link to="/brand/home">SKIP</Link>
        </div>
      </Layout>
    </div>
  );
};

export default StartDiscovery;
