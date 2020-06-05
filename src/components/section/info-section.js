import React, {Component} from 'react'
import styled from 'styled-components'
import {Col, Row, Typography, Card, Divider, Menu, Layout, Button, Avatar, Modal} from 'antd';
import {EditOutlined, PlusCircleOutlined} from '@ant-design/icons';

const InfoSection = (props) => {

    return(
        <InfoContainer className="grid-container grid-container--fit">
            <ProfileImg />
            <div className="user-info" style={{gridArea: 'header'}}>
              <h1 style={{marginBottom: '0em'}}>
                {/* {user.firstName} {user.lastName} */}
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
    )
}

////////////////////////// USER INFO SECTION ///////////////////////////
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

export default InfoSection;