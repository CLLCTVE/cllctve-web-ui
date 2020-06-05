import React, {Component} from 'react'
import styled from 'styled-components'
import {Col, Row, Typography, Card, Divider, Menu, Layout, Button, Avatar, Modal} from 'antd';
import {EditOutlined, PlusCircleOutlined} from '@ant-design/icons';

class ExperienceSection extends Component {

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
            <ExperienceContainer>
            <h2 style={{marginBottom: '20px'}}>
              EXPERIENCE / PROJECTS{' '}
              <PlusCircleOutlined style={{float: 'right'}} onClick={this.showModal} />
            </h2>
            {/* -----------------------------EXPERIENCE MODAL----------------------------- */}

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
                  <h4 style={{margin: '0'}}>Founder & CEO</h4>
                  <strong>CLLCTVE</strong>
                  <small style={{display: 'block'}}>
                    Syracuse, NY • Jan 2018 - Present • 2 Years 2 Months
                  </small>
                </div>
              </Col>
              <div style={{marginTop: '10px'}}>
                <ExperienceText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vero eos aliquid
                  aspernatur veniam, quam dignissimos reiciendis cum voluptatibus consequuntur
                  adipisci totam ex possimus architecto at beatae delectus exercitationem laboriosam
                  ipsa dolor praesentium. Eligendi officia nemo exercitationem libero ipsum. Nihil.
                  <OrangeText style={{float: 'right'}}>SEE MORE</OrangeText>
                </ExperienceText>
                <ImageBox />
                <ImageBox />
                <ImageBox />
              </div>
            </Row>
            <hr style={{margin: '20px auto'}} />
            <Row>
              <Col>
                <div>
                  <Avatar style={{width: '60px', height: '60px'}} />
                  <EditOutlined style={{position: 'absolute'}} />
                </div>
              </Col>
              <Col>
                <div style={{marginLeft: '30px'}}>
                  <h4 style={{margin: '0'}}>Innovation Mentor</h4>
                  <strong>Blackstone Launchpad powered by Techstars</strong>
                  <small style={{display: 'block'}}>
                    Syracuse, NY • Aug 2019 - Present • 7 Months
                  </small>
                </div>
              </Col>
              <div style={{marginTop: '10px'}}>
                <ExperienceText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vero eos aliquid
                  aspernatur veniam, quam dignissimos reiciendis cum voluptatibus consequuntur
                  adipisci totam ex possimus architecto at beatae delectus exercitationem laboriosam
                  ipsa dolor praesentium. Eligendi officia nemo exercitationem libero ipsum. Nihil.
                  <OrangeText style={{float: 'right'}}>SEE MORE</OrangeText>
                </ExperienceText>
                {/* <ImageBox/>
                <ImageBox/>
                <ImageBox/> */}
              </div>
            </Row>
          </ExperienceContainer>
        )
    }
}

////////////////////////// EXPERIENCE STYLE ///////////////////////////
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

export const OrangeText = styled.div`
  font-family: Hanson Bold;
  font-size: 0.8em;
  margin: 10px 0;
  color: #fc673d !important;
`;

export default ExperienceSection;