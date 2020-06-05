import React, {Component} from 'react'
import styled from 'styled-components'
import {Col, Row, Typography, Card, Divider, Menu, Layout, Button, Avatar, Modal} from 'antd';
import {EditOutlined, PlusCircleOutlined} from '@ant-design/icons';

class SkillsSection extends Component {
    
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
    const {user} = this.props;

        const {profile} = user;
        return(
            <SkillsContainer>
            <h2>
              SKILLS <PlusCircleOutlined style={{float: 'right'}} onClick={this.showModal} />
            </h2>
            {/* -----------------------------SKILLS MODAL----------------------------- */}

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
            <SkillWrapper>
              <Skill>{profile.skills[0]}</Skill>
              <Skill>{profile.skills[1]}</Skill>
              {/* <Skill>{profile.skills[2]}</Skill> */}
            </SkillWrapper>
            <Divider />
            {/* -----------------------------INTERESTS SECTION----------------------------- */}

            <h2>INTERESTS</h2>
            <InterestContainer>
              <InterestPink>GOOD UNCLE</InterestPink>
              <InterestPink>TECHNOLOGY</InterestPink>
              <InterestOrange>FOOD</InterestOrange>
              <InterestOrange>FASHION</InterestOrange>
            </InterestContainer>
          </SkillsContainer>
        )
    }
}

////////////////////////// SKILLS SECTION ///////////////////////////
export const SkillsContainer = styled.div`
  width: 70%;
  margin: 20px auto;
  clear: both;
  background-color: #222;
  border-radius: 20px;
  padding: 20px;
  max-width: 900px;
  min-width: 580px;
`;
export const SkillWrapper = styled.div`
  display: flex;
`;

export const Skill = styled.div`
  color: #000 !important;
  font-family: Hanson Bold;
  background-color: #fff;
  padding: 5px 15px;
  border-radius: 50px;
  margin-right: 10px;
`;

export const InterestContainer = styled.div`
  display: flex;
  max-width: 900px;
  min-width: 580px;
`;

export const InterestPink = styled.div`
  background-color: #e22784;
  font-family: Hanson Bold;
  padding: 5px 15px;
  border-radius: 50px;
  margin-right: 10px;
`;

export const InterestOrange = styled.div`
  background-color: #fc673d;
  font-family: Hanson Bold;
  padding: 5px 15px;
  border-radius: 50px;
  margin-right: 10px;
`;

export default SkillsSection;