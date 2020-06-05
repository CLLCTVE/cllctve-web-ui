import React from 'react';
import {withRouter} from 'react-router-dom';
import { Typography, Steps, Row, Col } from 'antd';
import {ONBOARDING_ENTRY_MAP_BY_NAME} from '../../lib/util';
import {CenteredContainer as Container} from '../fields/ContainerFields';

const { Step } = Steps;
const { Title } = Typography;

const steps = [
  {
    title: 'Education',
  },
  {
    title: 'Skills',
  },
  {
    title: 'Experience',
  },
  {
    title: 'Licenses and Certs',
  },
  {
    title: 'Honors and Awards',
  },
];

const OnBoardingFlowStep = ({match}) => {
  
  const displayText = (step)  => {
    return ONBOARDING_ENTRY_MAP_BY_NAME[Object.keys(ONBOARDING_ENTRY_MAP_BY_NAME)[step]].text;
  };
  
  const displayTitle = (step)  => {
    return ONBOARDING_ENTRY_MAP_BY_NAME[Object.keys(ONBOARDING_ENTRY_MAP_BY_NAME)[step]].title;
  };
  
  return (
    <Container>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={24}>
          <Steps current={parseInt(match.params.step, 10)}>
            {steps.map(item => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
        </Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="center" style={{textAlign: 'center'}}>
        <Col span={24}>
          <Title level={2}>Set Up Your Account</Title>
  
          <Title level={4}>Add Your {displayTitle(match.params.step)}</Title>
        </Col>
      </Row>
    </Container>
  )
};

export default withRouter(OnBoardingFlowStep);
