import React, {Component} from 'react'
import styled from 'styled-components'
import {Col, Row, Typography, Card, Divider, Menu, Layout, Button, Avatar, Modal} from 'antd';
import {EditOutlined, PlusCircleOutlined, CheckCircleOutlined} from '@ant-design/icons';

const {Title} = Typography;

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

export const StyledModal = styled(Modal)`
  .ant-modal-content, .ant-modal-header{
    background: rgba(200, 200, 200, 0.5);
    border-radius: 8px;
  }
  .ant-btn {
    color: black !important;
  }
  .ant-btn-primary {
    color: white !important;
  }

`

class EducationSection extends Component {
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
          <h2 style={{marginBottom: 20}}>
            EDUCATION <EditOutlined style={{float: 'right'}} onClick={this.showModal} />
          </h2>
          {/* -----------------------------EDUCATION MODAL----------------------------- */}
  
          <StyledModal
            // title="Basic Modal"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <Title level={2}></Title>
          </StyledModal>
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
                  {this.props.school}
                </h4>
                <strong>
                {this.props.major}

                </strong>
                <small style={{display: 'block'}}>
                  Syracuse, NY • Jan 2018 - Present • 2 Years 2 Months
                </small>
              </div>
            </Col>
            <div style={{marginTop: '10px'}}></div>
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
                  {/* Syracuse, NY • Jan 2018 - Present • 2 Years 2 Months */}
                </small>
              </div>
            </Col>
            <div style={{marginTop: '10px'}}></div>
          </Row>
        </div>
      )

  }
    }
    export default EducationSection;