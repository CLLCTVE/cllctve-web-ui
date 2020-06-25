import React, {Component} from 'react';
import styled from 'styled-components';
import {Typography, Layout, Row, Col, Avatar, Input} from 'antd';
import {MoreOutlined, LikeFilled, MessageFilled, ShareAltOutlined, CameraFilled} from '@ant-design/icons';

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
                <h5 style={{marginBottom: 0}}>First Name</h5>
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
              vitae aliquam laborum, ratione, id saepe porro reprehenderit sunt illo magni sequi
              eius rerum sint animi molestias ducimus a placeat neque dolorem expedita aperiam!
              Distinctio, cumque quos molestias, ut voluptates veniam sit asperiores, voluptatem
              nobis odio accusantium quas eveniet incidunt est totam molestiae rem deserunt a
              voluptatibus!
            </p>
          </div>
          <div>
            <img
              src="https://www.apa.org/images/therapy-group-title-image_tcm7-162394.jpg"
              alt=""
              width={'100%'}
            />
            <p style={{padding: "10px 20px", float: 'right', marginBottom: 0}}>
              120 likes • 18 comments • 8 shares
            </p>
          </div>
          <div style={{clear: 'both', padding: '10px 20px'}}>
            <hr />
            <div style={{float: 'right'}}>
              <LikeFilled style={{padding: '0 10px', fontSize: '20px'}} />
              <MessageFilled style={{padding: '0 10px', fontSize: '20px'}} />
              <ShareAltOutlined style={{paddingLeft: 10, fontSize: '20px'}} />
            </div>
            <OrangeText>Most Relevant</OrangeText>
          </div>
          <div style={{padding: 20}}>
            <Row>
              <Col span={2}>
                <Avatar style={{width: 70, height: 70}} />
              </Col>
              <Col span={22}>
                <h5 style={{marginBottom: 0}}>Jordan Rose</h5>
                <small>Head of Digital Marketing at CLLCTVE • Syracuse University '21</small>
                <p style={{marginTop: 10}}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptatum
                  consequuntur eos, aliquid commodi debitis praesentium doloribus quidem nostrum
                  vitae deleniti voluptatibus sequi harum illo impedit ratione adipisci fugiat
                  dolore molestiae iste facere autem? Facere pariatur natus praesentium ratione
                  atque quod, odio quasi ad molestiae, aperiam similique suscipit, sequi eos.
                </p>
                <div style={{float: 'right'}}>
              <LikeFilled style={{padding: '0 10px', fontSize: '20px'}} />
              <small>12 likes</small>
              <MessageFilled style={{padding: '0 10px', fontSize: '20px'}} />
              <small>1 comment</small>
                </div>
              </Col>
            </Row>
          <OrangeText>LOAD MORE COMMENTS</OrangeText>
          <Row gutter={16}>
              <Col span={22}>
            <MessageInput></MessageInput>

              </Col>
              <Col span={2}>
            <Avatar style={{width: 50, height: 50}} />

              </Col>
          </Row>

            {/* <CameraFilled /> */}
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

export const MessageInput = styled(Input)`
    &.ant-input {
        background: #333 !important;
        border: none;
        border-radius: 50px;
        padding: 10px;
        color: white;
    }
`

export default UserFeed;
