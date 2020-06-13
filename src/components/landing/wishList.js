import React from 'react'
import { Component } from 'react'
import styled from 'styled-components'
import {Layout, Typography, Input, Row, Col} from 'antd'
import {CheckCircleOutlined} from '@ant-design/icons'
import {StyledButton} from '../fields/renderFields';
import {CenteredContainer as Container} from '../fields/ContainerFields';

const {Title} = Typography;

const StyledInput = styled(Input)`
  border: none !important;
  border-bottom: 1px solid #555 !important;
  padding-top: 20px !important;
  color: white !important;
`;

class WishList extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            major: '',
            skills: []
        }

    this.joinList = this.joinList.bind(this)
    // this.handleFirstName = this.handleFirstName.bind(this)
    // this.handleLastName = this.handleLastName.bind(this)
    // this.handleEmail = this.handleEmail.bind(this)
    // this.handleMajor = this.handleMajor.bind(this)
    // this.handleSkills = this.handleSkills.bind(this)

        
    }

    componentDidMount() {

    }

    joinList(value) {
        console.log('Wishlist:', value)
        this.setState({
            firstName: this.state.firstName + value,
            lastName: this.state.lastName + value,
            email: this.state.email + value,
            major: this.state.major + value,
            skills: this.state.skills + value
        })
    }
    render(){
        return(
            <Container style={{background: 'black', padding: '20px'}}>
                <Row gutter={[{xs: 8, sm: 16, md: 24, lg: 32}, 16]} style={{width: '80%'}}>
            <Col span={8} style={{margin: '0 auto'}}>
              <CheckCircleOutlined style={{fontSize: '140px', padding: '30px'}} />
              <Title>STAY UPDATED</Title>
            </Col>
            <Col span={8} style={{margin: '0 auto'}}>
              <StyledInput placeholder="First Name" type="text" firstName={this.state.firstName}/>
              <StyledInput placeholder="Last Name" type="text" lastName={this.state.lastName}/>
              <StyledInput placeholder="Email" type="text" email={this.state.email}/>
              <StyledInput placeholder="Major" type="text" major={this.state.major}/>
              <StyledInput placeholder="List your skills (seperated by a comma)" type="text" skills={this.state.skills}/>
              <StyledButton style={{marginTop: '20px'}} onClick={this.joinList}>JOIN THE WISHLIST</StyledButton>
            </Col>
          </Row>
            </Container>
        )
    }
}

export default WishList