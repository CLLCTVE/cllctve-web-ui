import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import styled from 'styled-components'
import {Typography, Steps, Row, Col, Layout} from 'antd';
import {BRAND_ENTRY_MAP_BY_NAME} from '../../../lib/util';
import {CenteredContainer as Container} from '../../fields/ContainerFields';

const {Title} = Typography;
const {Step} = Steps;
const steps = [
    {
      title: 'Consumer Analysis One',
    },
    {
      title: 'Consumer Analysis Two',
    },
    {
      title: 'Consumer Analysis Three',
    }
  ];

  const StyledSteps = styled(Steps)`
  &.ant-steps {
    padding: 40px;
    color: white;

    .ant-steps-item-process .ant-steps-item-icon {
      background: #e22784;
      border-color: #e22784;
    }

    .ant-steps-item-finish .ant-steps-item-icon {
      background-image: linear-gradient(#e22784, #fc673d);
      border-color: #e22784;
    }

    .ant-steps-item-finish > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title::after {
      background: transparent linear-gradient(101deg, #e41e84 0%, #ff6633 100%) 0% 0% no-repeat
      padding-box;
    }
  }
  .ant-steps-item-wait
    > .ant-steps-item-container
    > .ant-steps-item-content
    > .ant-steps-item-title {
    color: white;
  }
  .ant-steps-item-wait .ant-steps-item-icon {
    background-color: #000;
    border-color: #e22784;
  }
  .ant-steps-item-wait .ant-steps-item-icon > .ant-steps-icon {
    color: white;
  }
`;

const DiscoverySteps = ({match}) => {
    const next = () => {
      const current = this.state.current + 1;
      this.setState({current});
    };
  
    const prev = () => {
      const current = this.state.current - 1;
      this.setState({current});
    };
  
    const displayText = step => {
      return BRAND_ENTRY_MAP_BY_NAME[Object.keys(BRAND_ENTRY_MAP_BY_NAME)[step]].text;
    };
  
    const displayTitle = step => {
      return BRAND_ENTRY_MAP_BY_NAME[Object.keys(BRAND_ENTRY_MAP_BY_NAME)[step]].title;
    };
  
    return (
      <div>
              <StyledSteps current={parseInt(match.params.step, 10)}>
                {steps.map(item => (
                  <Step key={item.title} />
                ))}
              </StyledSteps>
        <Container>
          <Row
            gutter={{xs: 8, sm: 16, md: 24, lg: 32}}
            justify="center"
            style={{textAlign: 'center'}}
          >
            <Col span={24}>
              <Title level={2}>Set Up Your Account</Title>
  
              <strong>Add Your {displayTitle(match.params.step)}</strong>
            </Col>
          </Row>
        </Container>
      </div>
    );
  };
  
  export default withRouter(DiscoverySteps);