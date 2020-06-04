import React, {Component} from 'react';
import styled from 'styled-components';
import {Col, Row, Typography, Card, Divider, Menu, Layout, Button, Avatar} from 'antd';
import {connect} from 'react-redux';
import {EditOutlined, PlusCircleOutlined} from '@ant-design/icons';
import Footer from '../components/template/footer/index';

const StyledCard = styled(Card)`
  &.ant-card {
    color: black !important;
    min-width: 150px;
    background-image: linear-gradient(black, #e22784);
    border-radius: 20px;
  }
`;

const StyledButton = styled(Button)`
  margin: 5px auto;
  border-radius: 4px;
  padding: 20px;
`;

////////////////////////// BACKGROUND IMAGE ///////////////////////////
const Header = styled.div`
  height: 310px;
  width: 100%;
  background-color: #777;
  border-bottom: 2px solid #fc673d;
`;
////////////////////////// USER INFO SECTION ///////////////////////////
const ProfileImg = styled.div`
  position: relative;
  bottom: 50px;
  grid-area: img;
  width: 150px;
  height: 150px;
  border-radius: 20px;
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
  border: 1px solid white;
  background-color: black;
  border-radius: 3px;
  padding: 5px;
  text-align: center;
  float: right;
`;
const OrangeText = styled.div`
  font-family: Hanson Bold;
  font-size: 0.8em;
  margin: 10px 0;
  color: #fc673d !important;
`;
const AddSection = styled.button`
  background-image: linear-gradient(#e22784, #fc673d);
  font-size: 1.5em;
  border-radius: 50px;
  text-align: center;
  border: none;
  margin-right: 30px;
`;
const MoreButton = styled.button`
  background-color: #fff;
  font-size: 1.5em;
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
const SkillWrapper = styled.div`
  display: flex;
`;

const Skill = styled.div`
  color: #000 !important;
  font-family: Hanson Bold;
  background-color: #fff;
  padding: 5px 15px;
  border-radius: 50px;
  margin-right: 10px;
`;

const InterestContainer = styled.div`
  display: flex;
`;

const InterestPink = styled.div`
  background-color: #e22784;
  font-family: Hanson Bold;
  padding: 5px 15px;
  border-radius: 50px;
  margin-right: 10px;
`;

const InterestOrange = styled.div`
  background-color: #fc673d;
  font-family: Hanson Bold;
  padding: 5px 15px;
  border-radius: 50px;
  margin-right: 10px;
`;

////////////////////////// RECENT ACTIVITY SECTION ///////////////////////////

const ActivityContainer = styled.div`
  width: 70%;
  margin: 20px auto;
  max-width: 900px;
  min-width: 580px;
`;

const ActivityText = styled.strong`
  white-space: normal;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

////////////////////////// EXPERIENCE SECTION ///////////////////////////
const ExperienceContainer = styled.div`
  width: 70%;
  margin: 20px auto;
  max-width: 900px;
  min-width: 580px;
`;

const ExperienceText = styled.strong`
  white-space: normal;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ImageBox = styled.img`
  width: 180px;
  height: 100px;
  border: 1px solid #e22784;
  border-radius: 10px;
  margin-right: 10px;
`;
////////////////////////// EDUCATION SECTION ///////////////////////////
const EducationContainer = styled.div`
  width: 70%;
  margin: 20px auto;
  clear: both;
  background-color: #222;
  border-radius: 20px;
  padding: 20px;
  max-width: 900px;
  min-width: 580px;
`;
////////////////////////// LICENSES SECTION ///////////////////////////
const LicenseContainer = styled.div`
  width: 70%;
  margin: 20px auto;
  max-width: 900px;
  min-width: 580px;
`;

class ProfilePage extends Component {
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
          <AboutContainer>
            <h2>
              ABOUT
              <EditOutlined style={{float: 'right'}} />
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab a quod voluptates itaque
              corporis eius explicabo tempora deleniti eveniet animi ad deserunt, maxime amet
              repellat natus, et sint! Quia, unde.
            </p>
            <Resume />
            <Resume />
          </AboutContainer>
          <SkillsContainer>
            <h2>
              SKILLS <PlusCircleOutlined style={{float: 'right'}} />
            </h2>
            <SkillWrapper>
              <Skill>ADOBE SUITE</Skill>
              <Skill>PHOTOGRAPHY</Skill>
              <Skill>COMMUNICATION</Skill>
            </SkillWrapper>
            <hr style={{margin: '20px'}} />
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

          <ActivityContainer>
            <Row>
              <Col span={24}>
                <h2 style={{marginBottom: '0'}}>RECENT ACTIVITY</h2>
                <strong>Based on activity</strong>
                <OrangeText>SEE ALL</OrangeText>
              </Col>
            </Row>
            <Row justify="space-between">
              <Col span={4}>
                <div>
                  <StyledCard>
                    <Avatar
                      style={{margin: '0 auto', display: 'block', width: '100px', height: '100px'}}
                    />
                    <ActivityText>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab a quod voluptates
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab a quod voluptates
                    </ActivityText>
                    <small style={{display: 'block', textAlign: 'center', marginTop: '5px'}}>
                      Your post has been reshared
                    </small>
                  </StyledCard>
                </div>
              </Col>
              <Col span={4}>
                <div>
                  <StyledCard>
                    <Avatar
                      style={{margin: '0 auto', display: 'block', width: '100px', height: '100px'}}
                    />
                    <ActivityText>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab a quod voluptates
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab a quod voluptates
                    </ActivityText>
                    <small style={{display: 'block', textAlign: 'center', marginTop: '5px'}}>
                      Your post has been reshared
                    </small>
                  </StyledCard>
                </div>
              </Col>
              <Col span={4}>
                <div>
                  <StyledCard>
                    <Avatar
                      style={{margin: '0 auto', display: 'block', width: '100px', height: '100px'}}
                    />
                    <ActivityText>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab a quod voluptates
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab a quod voluptates
                    </ActivityText>
                    <small style={{display: 'block', textAlign: 'center', marginTop: '5px'}}>
                      Your post has been reshared
                    </small>
                  </StyledCard>
                </div>
              </Col>
              <Col span={4}>
                <div>
                  <StyledCard>
                    <Avatar
                      style={{margin: '0 auto', display: 'block', width: '100px', height: '100px'}}
                    />
                    <ActivityText>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab a quod voluptates
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab a quod voluptates
                    </ActivityText>
                    <small style={{display: 'block', textAlign: 'center', marginTop: '5px'}}>
                      Your post has been reshared
                    </small>
                  </StyledCard>
                </div>
              </Col>
            </Row>
            <hr style={{margin: '40px auto'}} />
          </ActivityContainer>
          {/* -----------------------------EXPERIENCE SECTION----------------------------- */}

          <ExperienceContainer>
            <h2 style={{marginBottom: '20px'}}>
              EXPERIENCE / PROJECTS <PlusCircleOutlined style={{float: 'right'}} />
            </h2>
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
          {/* -----------------------------EDUCATION SECTION----------------------------- */}

          <EducationContainer>
            <h2 style={{marginBottom: '20px'}}>
              EDUCATION <PlusCircleOutlined style={{float: 'right'}} />
            </h2>
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
                    Syracuse University - Martin J. Whitman School of Management
                  </h4>
                  <strong>
                    Master of Science - MS, Study Entrepreneurship & Emerging Entreprises
                  </strong>
                  <small style={{display: 'block'}}>
                    Syracuse, NY • Jan 2018 - Present • 2 Years 2 Months
                  </small>
                </div>
              </Col>
              <div style={{marginTop: '10px'}}></div>
            </Row>
            <hr style={{margin: '20px auto', width: '80%'}} />
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
          </EducationContainer>
          {/* -----------------------------LICENSE SECTION----------------------------- */}

          <LicenseContainer>
            <h2 style={{marginBottom: '20px'}}>
              LICENSES / CERTIFICATIONS <PlusCircleOutlined style={{float: 'right'}} />
            </h2>
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

          </LicenseContainer>
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
