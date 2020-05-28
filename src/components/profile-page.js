import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

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
              {user.firstName} {user.lastName}
            </h1>
            <strong style={{marginBottom: '0em', fontSize: '18px', fontFamily: 'Open Sans Bold'}}>Title</strong>
            <p style={{fontFamily: 'Open Sans', fontSize: '18px'}}>Education</p>
          </div>
          <div className="buttons" style={{gridArea: 'button'}}>
            <EditButton>
              <h5 style={{marginBottom: '0', fontSize: '.6em'}}>EDIT CONTACT INFO</h5>
            </EditButton>
            <div style={{ float: 'right', display: 'block'}}>
            <AddSection>
              <h5 style={{marginBottom: '0em', fontSize: '.6em', padding: '3px'}}>ADD SECTION</h5>
            </AddSection>
            <MoreButton>
              <p style={{marginBottom: '0em', fontSize: '.6em', padding: '3px', fontFamily: 'Hanson Bold', color: 'black'}}>MORE</p>
            </MoreButton>
            </div>
          </div>
        </InfoContainer>
        <AboutContainer>
          <h2>
            ABOUT
            <div
              style={{
                backgroundColor: 'white',
                borderRadius: '50%',
                width: '25px',
                height: '25px',
                float: 'right',
                display: 'inline-block',
              }}
            ></div>
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
        </SkillsContainer>
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
  grid-area: img;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: white;
`;
const InfoContainer = styled.div`
  display: grid;
  grid-template-areas: 'img header header header button button';
  grid-gap: 10px;
  padding: 10px;
  margin: 20px auto;
  width: 70%;
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
  background-color: #e22784;
  font-size: 1em;
  width: 100px;
  border-radius: 50px;
  text-align: center;
  margin-top: 50px;
  border: none;
  margin-right: 10px;
`;
const MoreButton = styled.button`
  background-color: #fff;
  border-radius: 50px;
  text-align: center;
  border: none;
`;
////////////////////////// ABOUT SECTION ///////////////////////////

const AboutContainer = styled.div`
  width: 70%;
  margin: 20px auto;
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
  height: 300px;
  margin: 20px auto;
  clear: both;
  background-color: #222;
  border-radius: 20px;
  padding: 20px;
`

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps, {})(ProfilePage);
