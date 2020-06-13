import React, {Component} from 'react';
import {Col, Row, Typography, Card, Layout, Button} from 'antd';
import styled from 'styled-components';
import {CenteredContainer as Container} from '../fields/ContainerFields';

const {Header, Content, Footer, Sider} = Layout;
const {Title} = Typography;

const StyledDiv = styled.div`
  width: 300px;
  height: 250px;
  border-radius: 10px;
  background: white;
  margin: 20px auto;
`;

const StyledContainer = styled.div`
margin: 0 auto
width: 70%
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: auto;
    grid-template-areas: 'left right'
                          'one two';

    @media only and screen (min-width: 800px) {
        .container {
            grid-template-areas: 'left'
            'right'
            'one'
            'two'
        }
    }
`;

class LatestNews extends Component {
  constructor(props) {
    super(props);
    this.state = {news: ''};
  }

  render() {
    return (
      <div style={{background: 'black'}}>
        <Title style={{display: 'flex', justifyContent: 'center', paddingTop: '20px'}}>
          LATEST NEWS STORIES
        </Title>
        <StyledContainer className="container">
          <StyledDiv style={{gridArea: 'left'}} />
          <StyledDiv style={{gridArea: 'right'}} />
          <StyledDiv style={{gridArea: 'one'}} />
          <StyledDiv style={{gridArea: 'two'}} />
        </StyledContainer>
      </div>
    );
  }
}

export default LatestNews;
