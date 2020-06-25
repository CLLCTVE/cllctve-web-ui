import React, {Component} from 'react'
import styled from 'styled-components'
import {Col, Row, Typography, Card, Divider, Menu, Layout, Button, Avatar, Modal} from 'antd';
import {EditOutlined, PlusCircleOutlined} from '@ant-design/icons';

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

export const OrangeText = styled.div`
  font-family: Hanson Bold;
  font-size: 0.8em;
  margin: 10px 0;
  color: #fc673d !important;
`;

class LicenseSecton extends Component {
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
    render(){
        return(
            <div style={{padding: 30}}>
            <h2 style={{marginBottom: '20px'}}>
              LICENSES / CERTIFICATIONS{' '}
              <EditOutlined style={{float: 'right'}} onClick={this.showModal} />
            </h2>
            {/* -----------------------------LICENSE MODAL----------------------------- */}

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
                <div>
                  <Avatar style={{width: '60px', height: '60px'}} />
                  <EditOutlined style={{position: 'absolute'}} />
                </div>
              </Col>
              <Col>
                <div style={{marginLeft: '30px'}}>
                  <h4 style={{margin: '0'}}>
                    {/* S.I. Newhouse School of Public Communications at Syracuse University */}
                  {this.props.organization}

                  </h4>
                  <strong>
                    {/* Bachelor of Science (BS), Television, Radio and Film */}
                    {this.props.title}
                  </strong>
                  <small style={{display: 'block'}}>
                    Syracuse, NY • Jan 2018 - Present • 2 Years 2 Months
                  </small>
                  <OrangeText>SEE CREDENTIAL</OrangeText>
                </div>
              </Col>
            </Row>
            <Divider />
            <Row>
              <Col>
                <div>
                  <Avatar style={{width: '60px', height: '60px'}} />
                  <EditOutlined style={{position: 'absolute'}} />
                </div>
              </Col>
              <Col>
                <div style={{marginLeft: '30px'}}>
                  <h4 style={{margin: '0'}}>
                    S.I. Newhouse School of Public Communications at Syracuse University
                  </h4>
                  <strong>Bachelor of Science (BS), Television, Radio and Film</strong>
                  <small style={{display: 'block'}}>
                    Syracuse, NY • Jan 2018 - Present • 2 Years 2 Months
                  </small>
                  <OrangeText>SEE CREDENTIAL</OrangeText>
                </div>
              </Col>
            </Row>
          </div>
        )
    }
}

export default LicenseSecton;