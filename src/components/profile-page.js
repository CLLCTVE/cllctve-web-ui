import React, {Component} from 'react';
import styled from 'styled-components';
import {Col, Row, Typography, Card, Divider, Menu, Layout, Button, Avatar} from 'antd';
import {connect} from 'react-redux';
import {EditOutlined} from '@ant-design/icons';

const StyledCard = styled(Card)`
  &.ant-card {
    color: black !important;
    width: 230px;
    height: 250px;
    background-image: linear-gradient(black, gray);
  }
`;

const StyledButton = styled(Button)`
margin: 5px auto;
border-radius: 4px;
  padding: 20px;
`

class ProfilePage extends Component {
  render() {
    const {user} = this.props;

    return (
      <div>
        <Header />
        {/* User Info and Profile image */}
        <InfoContainer>
          <ProfileImg />
          <div className="user-info" style={{gridArea: 'header'}}>
            <h1 style={{marginBottom: '0em'}}>
              {user.firstName} {user.lastName} <EditOutlined />
            </h1>
            <strong style={{marginBottom: '0em', fontSize: '18px', fontFamily: 'Open Sans Bold'}}>
              Title
            </strong>
            <p style={{fontFamily: 'Open Sans', fontSize: '18px'}}>Education</p>
          </div>
          <div className="buttons" style={{gridArea: 'button', position: 'relative'}}>
            <EditButton>
              <h5 style={{marginBottom: '0', fontSize: '.6em'}}>EDIT CONTACT INFO</h5>
            </EditButton>
            <div style={{float: 'right', display: 'block'}}>
              <AddSection style={{position: 'absolute', right: '50px', bottom: '0'}}>
                <h5 style={{marginBottom: '0em', fontSize: '.6em', padding: '3px'}}>ADD SECTION</h5>
              </AddSection>
              <MoreButton style={{position: 'absolute', right: '0', bottom: '0'}}>
                <p
                  style={{
                    marginBottom: '0em',
                    fontSize: '.6em',
                    padding: '3px',
                    fontFamily: 'Hanson Bold',
                    color: 'black',
                  }}
                >
                  MORE
                </p>
              </MoreButton>
            </div>
          </div>
        </InfoContainer>
        <AboutContainer>
          <h2>
            ABOUT
            <EditOutlined style={{float: 'right'}} />
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab a quod voluptates itaque
            corporis eius explicabo tempora deleniti eveniet animi ad deserunt, maxime amet repellat
            natus, et sint! Quia, unde.
          </p>
          <Resume />
          <Resume />
        </AboutContainer>
        <SkillsContainer>
          <h2>SKILLS</h2>
          <Skill>
            <div
              style={{
                color: '#000',
                backgroundColor: '#fff',
                padding: '5px 15px',
                borderRadius: '50px',
                marginRight: '10px',
              }}
            >
              ADOBE SUITE
            </div>
            <div
              style={{
                color: '#000',
                backgroundColor: '#fff',
                padding: '5px 15px',
                borderRadius: '50px',
                marginRight: '10px',
              }}
            >
              PHOTOGRAPHY
            </div>
            <div
              style={{
                color: '#000',
                backgroundColor: '#fff',
                padding: '5px 15px',
                borderRadius: '50px',
                marginRight: '10px',
              }}
            >
              COMMUNICATION
            </div>
          </Skill>
          <hr style={{margin: '20px'}} />
          <h2>INTERESTS</h2>
          <Interest>
            <h5
              style={{
                backgroundColor: '#e22784',
                padding: '5px 15px',
                borderRadius: '50px',
                marginRight: '10px',
              }}
            >
              GOOD UNCLE
            </h5>
            <h5
              style={{
                backgroundColor: '#e22784',
                padding: '5px 15px',
                borderRadius: '50px',
                marginRight: '10px',
              }}
            >
              TECHNOLOGY
            </h5>
            <h5
              style={{
                backgroundColor: '#fc673d',
                padding: '5px 15px',
                borderRadius: '50px',
                marginRight: '10px',
              }}
            >
              FOOD
            </h5>
            <h5
              style={{
                backgroundColor: '#fc673d',
                padding: '5px 15px',
                borderRadius: '50px',
                marginRight: '10px',
              }}
            >
              FASHION
            </h5>
          </Interest>
        </SkillsContainer>
        {/* ----------------- RECENT ACTIVITY SECTION ----------------- */}
        <ActivityContainer>
          <Row>
            <Col span={24}>
              <h2 style={{marginBottom: '0'}}>RECENT ACTIVITY</h2>
              <strong>Based on activity</strong>
              <p
                style={{
                  fontFamily: 'Hanson Bold',
                  fontSize: '.8em',
                  marginTop: '10px',
                  color: '#fc673d',
                }}
              >
                SEE ALL
              </p>
            </Col>
          </Row>
          <Row justify="space-between">
          <Col span={4}>
          <div>
            <StyledCard>
            <Avatar style={{margin: '0 auto', display: 'block', width: '100px', height: '100px'}}/>
            </StyledCard>
            <div style={{margin: '10px auto', width: '230px'}}>
            {/* <StyledButton style={{backgroundColor: '#fc673d', border: 'none', borderTopRightRadius: '0', borderBottomRightRadius: '0'}}>APPROVE</StyledButton> */}
            {/* <StyledButton style={{backgroundColor: '#000', border: '1px solid white', borderTopLeftRadius: '0', borderBottomLeft: '0'}}>DECLINE</StyledButton> */}
            </div>
            </div>
          </Col>
          <Col span={4}>
          <div>
            <StyledCard>
            <Avatar style={{margin: '0 auto', display: 'block', width: '100px', height: '100px'}}/>
            </StyledCard>
            <div style={{margin: '10px auto', width: '230px'}}>
            {/* <StyledButton style={{backgroundColor: '#fc673d', border: 'none', borderTopRightRadius: '0', borderBottomRightRadius: '0'}}>APPROVE</StyledButton> */}
            {/* <StyledButton style={{backgroundColor: '#000', border: '1px solid white', borderTopLeftRadius: '0', borderBottomLeft: '0'}}>DECLINE</StyledButton> */}
            </div>
            </div>
          </Col>
          <Col span={4}>
          <div>
            <StyledCard>
            <Avatar style={{margin: '0 auto', display: 'block', width: '100px', height: '100px'}}/>
            </StyledCard>
            <div style={{margin: '10px auto', width: '230px'}}>
            {/* <StyledButton style={{backgroundColor: '#fc673d', border: 'none', borderTopRightRadius: '0', borderBottomRightRadius: '0'}}>APPROVE</StyledButton> */}
            {/* <StyledButton style={{backgroundColor: '#000', border: '1px solid white', borderTopLeftRadius: '0', borderBottomLeft: '0'}}>DECLINE</StyledButton> */}
            </div>
            </div>
          </Col>
          <Col span={4}>
          <div>
            <StyledCard>
            <Avatar style={{margin: '0 auto', display: 'block', width: '100px', height: '100px'}}/>
            </StyledCard>
            <div style={{margin: '10px auto', width: '230px'}}>
            {/* <StyledButton style={{backgroundColor: '#fc673d', border: 'none', borderTopRightRadius: '0', borderBottomRightRadius: '0'}}>APPROVE</StyledButton> */}
            {/* <StyledButton style={{backgroundColor: '#000', border: '1px solid white', borderTopLeftRadius: '0', borderBottomLeft: '0'}}>DECLINE</StyledButton> */}
            </div>
            </div>
          </Col>
          </Row>
          <hr style={{width: '70%', margin: '40px auto'}} />
        </ActivityContainer>
      </div>
    );
  }
}
////////////////////////// BACKGROUND IMAGE ///////////////////////////
const Header = styled.div`
  height: 275px;
  width: 100%;
  background-color: #777;
  border-bottom: 2px solid #fc673d;
`;
////////////////////////// USER INFO SECTION ///////////////////////////
const ProfileImg = styled.div`
  position: relative;
  bottom: 50px;
  grid-area: img;
  width: 200px;
  height: 200px;
  border-radius: 10px;
  background-color: white;
`;
const InfoContainer = styled.div`
  display: grid;
  grid-template-areas: 'img header button';
  grid-gap: 10px;
  padding: 10px;
  margin: 20px auto;
  width: 70%;
  max-width: 900px;
  min-width: 580px;
`;
const EditButton = styled.button`
  display: block;
  width: 130px;
  border: 1px solid white;
  background-color: black;
  border-radius: 3px;
  padding: 5px;
  text-align: center;
  float: right;
`;
const AddSection = styled.button`
  background-image: linear-gradient(#e22784, #fc673d);
  font-size: 1em;
  width: 100px;
  border-radius: 50px;
  text-align: center;
  border: none;
  margin-right: 10px;
`;
const MoreButton = styled.button`
  background-color: #fff;
  border-radius: 50px;
  text-align: center;
  border: none;
`;

const White = styled.div`
  background-color: #fff;
  color: #000;
  padding: 5px 15px;
  border-radius: 50px;
  display: block;
  margin-right: 10px;
`;

////////////////////////// ABOUT SECTION ///////////////////////////
const AboutContainer = styled.div`
  width: 70%;
  margin: 20px auto;
  max-width: 900px;
  min-width: 580px;
`;

const Resume = styled.div`
  height: 100px;
  float: left;
  margin-right: 10px;
  width: 150px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: #fc673d;
  margin-bottom: 40px;
`;
////////////////////////// SKILLS SECTION ///////////////////////////
const SkillsContainer = styled.div`
  width: 70%;
  margin: 20px auto;
  clear: both;
  background-color: #222;
  border-radius: 20px;
  padding: 20px;
  max-width: 900px;
  min-width: 580px;
`;
const Skill = styled.div`
  display: flex;
  font-family: Hanson Bold;
`;
const Interest = styled.div`
  display: flex;
`;

////////////////////////// RECENT ACTIVITY SECTION ///////////////////////////

const ActivityContainer = styled.div`
  width: 70%;
  margin: 20px auto;
  max-width: 900px;
  min-width: 580px;
`;
const mapStateToProps = (state, ownProps) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps, {})(ProfilePage);
