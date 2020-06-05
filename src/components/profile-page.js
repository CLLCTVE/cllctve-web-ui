import React, {Component} from 'react';
import styled from 'styled-components';
import {Col, Row, Typography, Card, Divider, Menu, Layout, Button, Avatar, Modal} from 'antd';
import {connect} from 'react-redux';
import {EditOutlined, PlusCircleOutlined} from '@ant-design/icons';
import Footer from '../components/template/footer/index';
import AboutSection from './section/about-section'
import {
  InfoContainer,
  Header,
  ProfileImg,
  EditButton,
  AddSection,
  MoreButton,
  SkillsContainer,
  SkillWrapper,
  Skill,
  InterestContainer,
  InterestOrange,
  InterestPink,
  HonorsContainer,
} from './profile-style';
import EducationSection from './section/education-section';
import ExperienceSection from './section/experience-section';
import ActivitySection from './section/activity-section';
import LicenseSecton from './section/license-section';

class ProfilePage extends Component {
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

    return (
      <div>
        <Layout style={{backgroundColor: 'black'}}>
          <Header />
          {/* User Info and Profile image */}
          <InfoContainer className="grid-container grid-container--fit">
            <ProfileImg />
            <div className="user-info" style={{gridArea: 'header'}}>
              <h1 style={{marginBottom: '0em'}}>
                {user.firstName} {user.lastName}
              </h1>
              <strong style={{marginBottom: '0em', fontSize: '18px', fontFamily: 'Open Sans Bold'}}>
                Title
              </strong>
              <p style={{fontFamily: 'Open Sans', fontSize: '18px'}}>Education</p>
            </div>
            <div className="buttons" style={{gridArea: 'button', position: 'relative'}}>
              <EditOutlined style={{float: 'left'}} />
              <EditButton>
                <h5 style={{marginBottom: '0', fontSize: '.6em'}}>EDIT CONTACT INFO</h5>
              </EditButton>
              <div style={{float: 'right', display: 'block'}}>
                <AddSection style={{position: 'absolute', right: '50px', bottom: '0'}}>
                  <h5 style={{marginBottom: '0em', fontSize: '.6em', padding: '3px'}}>
                    ADD SECTION
                  </h5>
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
            {/* -----------------------------ABOUT SECTION----------------------------- */}

          <AboutSection/>
            {/* -----------------------------SKILL SECTION----------------------------- */}
            
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
          {/* -----------------------------RECENT ACTIVITY SECTION----------------------------- */}

          <ActivitySection/>
          {/* -----------------------------EXPERIENCE SECTION----------------------------- */}

          <ExperienceSection/>
          {/* -----------------------------EDUCATION SECTION----------------------------- */}

          <EducationSection/>
          {/* -----------------------------LICENSE SECTION----------------------------- */}

          <LicenseSecton/>
          {/* -----------------------------HONORS SECTION----------------------------- */}
          <HonorsContainer>
            <h2 style={{marginBottom: '0'}}>
              NOTABLE HONORS{' '}
              <PlusCircleOutlined style={{float: 'right'}} onClick={this.showModal} />
            </h2>
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
                <div>
                  <EditOutlined style={{position: 'absolute'}} />
                </div>
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
                <div>
                  <EditOutlined style={{position: 'absolute'}} />
                </div>
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
          {/* -----------------------------FOOTER----------------------------- */}
          <Footer />
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: {
      id: '5ed7ffbdbc8f8400412f4a8e',
      firstName: 'reggie',
      lastName: 'alleyne',
      email: 'reggiealleyne891@gmail.edu',
      onboarded: false,
      profile: {
        skills: ['Video Editing', 'Photography'],
        licenseCerts: [
          {
            id: '5ed800f1bc8f8400412f4a91',
            title: 'Web Development',
            organization: 'UCLA extension',
            issuedMonthYear: '2020-01-03T20:58:32.920Z',
          },
        ],
        experiences: [],
        educations: [
          {
            id: '5ed800f1bc8f8400412f4a90',
            isEnrolled: false,
            school: 'UCLA',
            major: 'Design',
            startMonthYear: '2020-01-03T20:57:44.435Z',
          },
        ],
        honorsAwards: [],
      },
    },
  };
};

export default connect(mapStateToProps, {})(ProfilePage);
