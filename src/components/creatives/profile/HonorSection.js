import React, {Component} from 'react'
import styled from 'styled-components'
import {Col, Row, Typography, Card, Divider, Menu, Layout, Button, Avatar, Modal} from 'antd';
import {EditOutlined, PlusCircleOutlined} from '@ant-design/icons';

const {Title} = Typography;

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

class HonorSection extends Component{
    state = {visible: false};

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
      return(
<HonorsContainer>
            <Title level={4}>
              NOTABLE HONORS
            </Title>
              <EditOutlined style={{float: 'right'}} onClick={this.showModal} />
            {/* -----------------------------HONORS MODAL----------------------------- */}

            <Modal
              title="Basic Modal"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
            <Row>
              <Col>
                  <EditOutlined />
                </Col>
              <Col>
                <div style={{marginLeft: '30px'}}>
                  <strong>Honors & Awards</strong>
                  <small style={{display: 'block'}}>
                    Organization Marshal • Peak-2-Peak • T-Howard Scholar • SB in SV • Leadership
                    Capital
                  </small>
                </div>
              </Col>
            </Row>
            <Divider />
            <Row>
              <Col>
                  <EditOutlined />
                </Col>
              <Col>
                <div style={{marginLeft: '30px'}}>
                  <strong>Organizations</strong>
                  <small style={{display: 'block'}}>
                    Alpha Kappa Psi Fraternity, Inc. || Empowering Minds • Citrus Racing • WellsLink
                    Peer
                  </small>
                </div>
              </Col>
            </Row>
          </HonorsContainer>
      )
  }
}

export default HonorSection;







