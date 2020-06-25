import React from 'react';
import styled from 'styled-components';
import {Typography, Divider} from 'antd';
import {EditOutlined} from '@ant-design/icons';
import {Component} from 'react';
import Picture from '../../images/background-img.png'

const {Title} = Typography;

export const ProfileImg = styled.div`
  position: relative;
  bottom: 50px;
  grid-area: img;
  width: 150px;
  height: 150px;
  border-radius: 20px;
  background-color: white;
`;
export const InfoContainer = styled.div`
  display: grid;
  grid-template-areas: 'img header button';
  grid-gap: 10px;
  padding: 10px;
  margin: 20px auto;
  width: 70%;
  max-width: 900px;
  min-width: 580px;
`;
export const EditButton = styled.button`
  display: block;
  border: 1px solid white;
  background-color: black;
  border-radius: 3px;
  padding: 5px;
  text-align: center;
  float: right;
`;
export const OrangeText = styled.div`
  font-family: Hanson Bold;
  font-size: 0.8em;
  margin: 10px 0;
  color: #fc673d !important;
`;
export const AddSection = styled.button`
  background-image: linear-gradient(to right, #e22784, #fc673d);
  font-size: 1.5em;
  border-radius: 50px;
  text-align: center;
  border: none;
  margin-right: 30px;
`;
export const MoreButton = styled.button`
  background-color: #fff;
  font-size: 1.5em;
  border-radius: 50px;
  text-align: center;
  border: none;
`;

class InfoSection extends Component {
  render() {
    return (
      <InfoContainer>
        <ProfileImg style={{backgroundImage: `url(${Picture})`, backgroundSize: 'cover'}}>{this.props.profilePic}</ProfileImg>
        <div>
          <Title level={2}>
            {this.props.firstName} {this.props.lastName}
          </Title>

          <strong style={{marginBottom: '0em', fontSize: '18px', fontFamily: 'Open Sans Bold'}}>
            {/* Frontend Developer */}
            {this.props.title}
          </strong>
          <p style={{fontFamily: 'Open Sans', fontSize: '18px'}}>{this.props.school}</p>
        </div>
        <div className="buttons" style={{gridArea: 'button', position: 'relative'}}>
          <EditOutlined style={{float: 'left'}} />
          <EditButton>
            <h5 style={{marginBottom: '0'}}>EDIT CONTACT INFO</h5>
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
    );
  }
}

export default InfoSection;
