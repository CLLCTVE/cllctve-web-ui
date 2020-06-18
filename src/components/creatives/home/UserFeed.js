import React, {Component} from 'react';
import styled from 'styled-components';
import {Typography, Layout, Row, Col, Avatar, Space} from 'antd';
import {MoreOutlined} from '@ant-design/icons';

const {Title} = Typography;

class UserFeed extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div style={{padding: 20}}>
      <StyledContainer>
        <div style={{padding: 20}}>
          <Row>
            <Col span={2}>
              <Avatar style={{width: 70, height: 70}} />
            </Col>
            <Col span={20}>
              <h5>First Name</h5>
              <strong>Product Developer at CLLCTVE • Syracuse University '20</strong>
              <br />
              <small>5d • Public</small>
            </Col>
            <Col span={2}>
              <MoreOutlined style={{float: 'right', fontSize: '20px'}} />
            </Col>
          </Row>
          <p style={{marginTop: 10}}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi ut quas non delectus
            vitae aliquam laborum, ratione, id saepe porro reprehenderit sunt illo magni sequi eius
            rerum sint animi molestias ducimus a placeat neque dolorem expedita aperiam! Distinctio,
            cumque quos molestias, ut voluptates veniam sit asperiores, voluptatem nobis odio
            accusantium quas eveniet incidunt est totam molestiae rem deserunt a voluptatibus!
          </p>
        </div>
        <div>
          <img src="https://www.apa.org/images/therapy-group-title-image_tcm7-162394.jpg" alt="" width={'100%'}/>
        <p style={{padding: 10, float:'right', marginBottom: 0}}>120 likes • 18 comments • 8 shares</p>
        </div>
        <div style={{clear: 'both', padding: 20}}>
            <hr/>
        <OrangeText>Most Relevant</OrangeText>

        </div>
      </StyledContainer>

        </div>
    );
  }
}

export const StyledContainer = styled.div`
  background: black;
  border: 1px solid #333;
  border-radius: 8px;

`;

export const OrangeText = styled.div`
  font-family: Hanson Bold;
  font-size: 0.8em;
  margin: 10px 0;
  color: #fc673d !important;
`;

export default UserFeed;
