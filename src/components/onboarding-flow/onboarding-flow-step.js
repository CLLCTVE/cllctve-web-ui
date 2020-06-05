import React from 'react';
import {withRouter} from 'react-router-dom';
import {Typography, Steps, Row, Col, Layout} from 'antd';
import styled from 'styled-components';
import {ONBOARDING_ENTRY_MAP_BY_NAME} from '../../lib/util';
import {CenteredContainer as Container} from '../fields/ContainerFields';

const {Step} = Steps;
const {Title} = Typography;
const {Header, Content, Footer, Sider} = Layout;

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
    title: 'Licenses / Certs',
  },
  {
    title: 'Honors / Awards',
  },
];

const StyledSteps = styled(Steps)`
  &.ant-steps {
    padding: 40px;
    color: white;
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

const OnBoardingFlowStep = ({match}) => {
  const next = () => {
    const current = this.state.current + 1;
    this.setState({current});
  };

  const prev = () => {
    const current = this.state.current - 1;
    this.setState({current});
  };

  const displayText = step => {
    return ONBOARDING_ENTRY_MAP_BY_NAME[Object.keys(ONBOARDING_ENTRY_MAP_BY_NAME)[step]].text;
  };

  const displayTitle = step => {
    return ONBOARDING_ENTRY_MAP_BY_NAME[Object.keys(ONBOARDING_ENTRY_MAP_BY_NAME)[step]].title;
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

export default withRouter(OnBoardingFlowStep);
