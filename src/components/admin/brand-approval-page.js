import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Col, Row, Typography, Card, Divider, Checkbox, Layout, Button, Avatar} from 'antd';
import {CheckCircleOutlined, CheckOutlined, CloseOutlined} from '@ant-design/icons';
import styled from 'styled-components';
import {CenteredContainer as Container} from '../fields/ContainerFields';

const {Title} = Typography;
const {Header, Content, Footer, Sider} = Layout;

const StyledCard = styled(Card)`
  &.ant-card {
    color: black !important;
    width: 230px;
    height: 350px;
    background-image: linear-gradient(black, gray);
  }
`;
const StyledContainer = styled(Container)`
  display: block;
  margin: 20px auto;
  width: 80%;
  max-width: 900px;
  min-width: 580px;
`

export const StyledButton = styled(Button)`
  &.ant-btn {
    
    position: absolute;
    bottom: 10px;
    border: none;
    color: #ffffff;
    opacity: 1;
    background: transparent linear-gradient(101deg, #e41e84 0%, #ff6633 100%) 0% 0% no-repeat
      padding-box;

    &:hover {
      color: #ffffff;
      opacity: 0.8;
      background: transparent linear-gradient(101deg, #ff6633 0%, #e41e84 100%) 0% 0% no-repeat
        padding-box;
    }

    &:focus > span,
    &:active > span {
      color: #e41e84 !important;
    }
    
    &:active {
       span {
        color: #e41e84 !important;
       }
    }
    
  }
`;

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

class AdminDashboardPage extends Component {

  componentDidMount() {
    // make api call to get admin dashboard data 
  }

  render() {
    return (
      <StyledContainer>
        <Title style={{marginTop: '40px'}}>ADMIN DASHBOARD</Title>
        <h5>DASHBOARD UPDATE:</h5>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio sed est repellat dolore
          illum, facere error reprehenderit fuga corporis, enim quam quas veniam quae cum. Obcaecati
          cum maxime ullam magnam dignissimos tempore, doloribus quisquam. Laudantium cum alias nam
          ut iste officia voluptas harum, est rem neque id unde, repellendus reiciendis.
        </p>
        <Divider />
        <h5>BRAND REQUESTS</h5>
        <RequestTab>REQUESTS</RequestTab>
        <BrandTab>BRAND STATUS</BrandTab>
        <Row justify="space-between" style={{clear: 'both'}}>
          <Col span={4}>
            <div>
            <StyledCard>
            <Avatar style={{margin: '0 auto', display: 'block', width: '100px', height: '100px'}}/>
            <Container>
            <div style={{display: 'block',margin: '0 auto', textAlign: 'center'}}>
            <Title level={4} style={{paddingTop: '10px'}}>Jane Doe</Title>
            <div style={{background: '#777', padding: '5px', borderRadius: '5px', marginBottom: '5px'}}>
              <h5>Nike</h5>
            </div>
            </div>
            <StyledButton
            style={{marginBottom: '40px'}}
                    size="medium"
                    shape="round"
                    htmlType="submit"
                    // disabled={submitting}
                  >
                    Approve
                  </StyledButton>
            <StyledButton
            style={{display: 'inline'}}
                    size="medium"
                    shape="round"
                    htmlType="submit"
                    // disabled={submitting}
                  >
                    Decline
                  </StyledButton>
            </Container>
            </StyledCard>
            <div style={{margin: '10px auto', width: '230px'}}>
            </div>
            </div>
          </Col>
          <Col span={4}>
            <div>
            <StyledCard>
            <Avatar style={{margin: '0 auto', display: 'block', width: '100px', height: '100px'}}/>
            <Container>
            <div style={{display: 'block',margin: '0 auto', textAlign: 'center'}}>
            <Title level={4} style={{paddingTop: '10px'}}>Jane Doe</Title>
            <div style={{background: '#777', padding: '5px', borderRadius: '5px', marginBottom: '5px'}}>
              <h5>Nike</h5>
            </div>
            </div>
            <StyledButton
            style={{marginBottom: '40px'}}
                    size="medium"
                    shape="round"
                    htmlType="submit"
                    // disabled={submitting}
                  >
                    Approve
                  </StyledButton>
            <StyledButton
            style={{display: 'inline'}}
                    size="medium"
                    shape="round"
                    htmlType="submit"
                    // disabled={submitting}
                  >
                    Decline
                  </StyledButton>
            </Container>
            </StyledCard>
            <div style={{margin: '10px auto', width: '230px'}}>
            </div>
            </div>
          </Col>
          <Col span={4}>
            <div>
            <StyledCard>
            <Avatar style={{margin: '0 auto', display: 'block', width: '100px', height: '100px'}}/>
            <Container>
            <div style={{display: 'block',margin: '0 auto', textAlign: 'center'}}>
            <Title level={4} style={{paddingTop: '10px'}}>Jane Doe</Title>
            <div style={{background: '#777', padding: '5px', borderRadius: '5px', marginBottom: '5px'}}>
              <h5>Nike</h5>
            </div>
            </div>
            <StyledButton
            style={{marginBottom: '40px'}}
                    size="medium"
                    shape="round"
                    htmlType="submit"
                    // disabled={submitting}
                  >
                    Approve
                  </StyledButton>
            <StyledButton
            style={{display: 'inline'}}
                    size="medium"
                    shape="round"
                    htmlType="submit"
                    // disabled={submitting}
                  >
                    Decline
                  </StyledButton>
            </Container>
            </StyledCard>
            <div style={{margin: '10px auto', width: '230px'}}>
            </div>
            </div>
          </Col>
          <Col span={4}>
            <div>
            <StyledCard>
            <Avatar style={{margin: '0 auto', display: 'block', width: '100px', height: '100px'}}/>
            <Container>
            <div style={{display: 'block',margin: '0 auto', textAlign: 'center'}}>
            <Title level={4} style={{paddingTop: '10px'}}>Jane Doe</Title>
            <div style={{background: '#777', padding: '5px', borderRadius: '5px', marginBottom: '5px'}}>
              <h5>Nike</h5>
            </div>
            </div>
            <StyledButton
            style={{marginBottom: '40px'}}
                    size="medium"
                    shape="round"
                    htmlType="submit"
                    // disabled={submitting}
                  >
                    Approve
                  </StyledButton>
            <StyledButton
            style={{display: 'inline'}}
                    size="medium"
                    shape="round"
                    htmlType="submit"
                    // disabled={submitting}
                  >
                    Decline
                  </StyledButton>
            </Container>
            </StyledCard>
            <div style={{margin: '10px auto', width: '230px'}}>
            </div>
            </div>
          </Col>
        </Row>

{/* ------------------------------VERIFICATION REQUESTS------------------------------ */}

        <h5 style={{marginTop: '40px'}}>
          VERIFICATION REQUESTS <CheckCircleOutlined />
        </h5>
        <RequestTab>REQUESTS</RequestTab>
        <BrandTab>BRAND STATUS</BrandTab>
        <Row justify="space-between" style={{clear: 'both'}}>
          <Col span={4}>
            <div>
            <StyledCard>
            <Avatar style={{margin: '0 auto', display: 'block', width: '100px', height: '100px'}}/>
            <Container>
            <div style={{display: 'block',margin: '0 auto', textAlign: 'center'}}>
            <Title level={4} style={{paddingTop: '10px'}}>NAME</Title>
            <div style={{background: '#777', padding: '5px', borderRadius: '5px', marginBottom: '5px'}}>
              <h5>Web Development</h5>
            <Checkbox><CheckOutlined/></Checkbox>
            <Checkbox><CloseOutlined/></Checkbox>
            </div>
            <div style={{background: '#777', padding: '5px', borderRadius: '5px'}}>
              <h5>Video Editing</h5>
            <Checkbox><CheckOutlined/></Checkbox>
            <Checkbox><CloseOutlined/></Checkbox>
            </div>
            </div>
            <StyledButton
                    size="large"
                    shape="round"
                    htmlType="submit"
                    // disabled={submitting}
                  >
                    Submit
                  </StyledButton>
            </Container>
            </StyledCard>
            <div style={{margin: '10px auto', width: '230px'}}>
            </div>
            </div>
          </Col>
          <Col span={4}>
          <div>
            <StyledCard>
            <Avatar style={{margin: '0 auto', display: 'block', width: '100px', height: '100px'}}/>
            <Container>
            <div style={{display: 'block',margin: '0 auto', textAlign: 'center'}}>
            <Title level={4} style={{paddingTop: '10px'}}>NAME</Title>
            <div style={{background: '#777', padding: '5px', borderRadius: '5px', marginBottom: '5px'}}>
              <h5>Web Development</h5>
            <Checkbox><CheckOutlined/></Checkbox>
            <Checkbox><CloseOutlined/></Checkbox>
            </div>
            <div style={{background: '#777', padding: '5px', borderRadius: '5px'}}>
              <h5>Video Editing</h5>
            <Checkbox><CheckOutlined/></Checkbox>
            <Checkbox><CloseOutlined/></Checkbox>
            </div>
            </div>
            <StyledButton
                    size="large"
                    shape="round"
                    htmlType="submit"
                    // disabled={submitting}
                  >
                    Submit
                  </StyledButton>
            </Container>
            </StyledCard>
            <div style={{margin: '10px auto', width: '230px'}}>
            </div>
            </div>
            </Col>
          <Col span={4}>
          <div>
            <StyledCard>
            <Avatar style={{margin: '0 auto', display: 'block', width: '100px', height: '100px'}}/>
            <Container>
            <div style={{display: 'block',margin: '0 auto', textAlign: 'center'}}>
            <Title level={4} style={{paddingTop: '10px'}}>NAME</Title>
            <div style={{background: '#777', padding: '5px', borderRadius: '5px', marginBottom: '5px'}}>
              <h5>Web Development</h5>
            <Checkbox><CheckOutlined/></Checkbox>
            <Checkbox><CloseOutlined/></Checkbox>
            </div>
            <div style={{background: '#777', padding: '5px', borderRadius: '5px'}}>
              <h5>Video Editing</h5>
            <Checkbox><CheckOutlined/></Checkbox>
            <Checkbox><CloseOutlined/></Checkbox>
            </div>
            </div>
            <StyledButton
                    size="large"
                    shape="round"
                    htmlType="submit"
                    // disabled={submitting}
                  >
                    Submit
                  </StyledButton>
            </Container>
            </StyledCard>
            <div style={{margin: '10px auto', width: '230px'}}>
            </div>
            </div>
             </Col>
             <Col span={4}>
             <div>
            <StyledCard>
            <Avatar style={{margin: '0 auto', display: 'block', width: '100px', height: '100px'}}/>
            <Container>
            <div style={{display: 'block',margin: '0 auto', textAlign: 'center'}}>
            <Title level={4} style={{paddingTop: '10px'}}>NAME</Title>
            <div style={{background: '#777', padding: '5px', borderRadius: '5px', marginBottom: '5px'}}>
              <h5>Web Development</h5>
            <Checkbox><CheckOutlined/></Checkbox>
            <Checkbox><CloseOutlined/></Checkbox>
            </div>
            <div style={{background: '#777', padding: '5px', borderRadius: '5px'}}>
              <h5>Video Editing</h5>
            <Checkbox><CheckOutlined/></Checkbox>
            <Checkbox><CloseOutlined/></Checkbox>
            </div>
            </div>
            <StyledButton
                    size="large"
                    shape="round"
                    htmlType="submit"
                    // disabled={submitting}
                  >
                    Submit
                  </StyledButton>
            </Container>
            </StyledCard>
            <div style={{margin: '10px auto', width: '230px'}}>
            </div>
            </div>
            </Col>
        </Row>
      </StyledContainer>
    );
  }
}

const RequestTab = styled.div`
  float: left;
  font-family: Hanson Bold;
  background-color: #333;
  padding: 15px;
  border-top: 4px solid #e22784;
  width: 150px;
  font-size: 0.7em;
  text-align: center;
  margin: 0;
`;
const BrandTab = styled.div`
  float: left;
  font-family: Hanson Bold;
  padding: 15px;
  border-top: 4px solid #333;
  width: 150px;
  font-size: 0.7em;
  text-align: center;
  margin-bottom: 40px;
`;

const mapStateToProps = (state, ownProps) => {
  return {
    isLoading: state.auth.isLoading,
  };
};

export default connect(mapStateToProps, {})(AdminDashboardPage);
