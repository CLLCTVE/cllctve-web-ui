import React, {Component} from 'react';
import styled from 'styled-components';
import {Typography, Row, Col} from 'antd';

const {Title} = Typography;

class SuggestedContent extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div style={{padding: 30}}>
        <Title level={2} style={{marginBottom: 0}}>
          SUGGESTED CONTENT
        </Title>
        <strong>Based on activity</strong>
        <OrangeText>SEE ALL</OrangeText>
        <Row justify="space-around">
          <Col span={5}>
            <StyledDiv>ONE</StyledDiv> <h5 style={{marginTop: 10}}>TITLE</h5>
            <p>MORE DETAILS</p>
          </Col>
          <Col span={5}>
            <StyledDiv>TWO</StyledDiv> <h5 style={{marginTop: 10}}>TITLE</h5>
            <p>MORE DETAILS</p>
          </Col>
          <Col span={5}>
            <StyledDiv>THREE</StyledDiv> <h5 style={{marginTop: 10}}>TITLE</h5>
            <p>MORE DETAILS</p>
          </Col>
        </Row>
      </div>
    );
  }
}

// --------------------- USE THIS TO FIGURE OUT THE RESPONSIVE ISSUES WITH ROWS ---------------------

// .row {
//   display: flex;
//   flex-wrap: wrap;
//   margin-right: -15px;
//   margin-left: -15px;
// }

// @media (min-width: 992px)
// .col-lg-4 {
//     flex: 0 0 33.333333%;
//     max-width: 33.333333%;
// }

const StyledRow = styled(Row)`
display: flex;
flex-wrap: wrap;
// margin-right: -15px;
// margin-left: -15px;
// @media (min-width: 992px) {
//   flex: 0 0 33.333333%;
//   max-width: 0 0 33.333333%;
// }
`

const StyledDiv = styled.div`
  background: #777;
  border-radius: 10px;
  width: 250px;
  height: 250px;
`;

const OrangeText = styled.div`
  font-family: Hanson Bold;
  font-size: 0.8em;
  margin: 10px 0;
  color: #fc673d !important;
`;

// const ResponsiveRow = styled(Row)`
//   @media only and screen(min-width: 600px) {
//     &.ant-row {
//       display: block;
//     }
//   }
// `;

export default SuggestedContent;
