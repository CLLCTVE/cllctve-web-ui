import React, {Component} from 'react';
import styled from 'styled-components';
import {Typography, Card, Avatar} from 'antd';
import Background from '../../images/paint.jpg'
import { StyledButton } from '../../fields/renderFields';

const {Title} = Typography;
const {Meta} = Card;

class ProfilePic extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{padding: 30}}>

        <StyledCard
          hoverable
          cover={
              <img alt="example" src={Background} height={130}/>
            }
        >
            <div style={{position:'relative', marginTop: -80}}>
            <StyledAvatar src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>
            </div>
            <strong>YOUR NAME</strong>
          <p style={{margin: 0}}>Creative Name</p>
          <small>Tagline</small>
          <ManagePosts>Manage Posts</ManagePosts>
        </StyledCard>
      </div>
    );
  }
}

const ManagePosts = styled(StyledButton)`
    background: #333 !important;
    font-size: 10px !important;
    text-align: center;
    width: 100%;
    margin-top: 10px;
`

const StyledAvatar = styled(Avatar)`
  &.ant-avatar {
    height: 100px;
    width: 100px;
    margin: 10px auto;
    box-shadow: 0 8px 6px -6px black;
  }
`;

const StyledCard = styled(Card)`
  &.ant-card {
      position: fixed;
      text-align: center;
      width: 170px;
      background-image: linear-gradient(to right, #e22784, #fc673d);
      border: none;
  }
  .ant-card-body {
      padding: 0;
  }
`

export default ProfilePic;
