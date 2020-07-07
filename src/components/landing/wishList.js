import React from 'react'
import { Component } from 'react'
import styled from 'styled-components'
import {Layout, Typography, Input, Row, Col} from 'antd'
import {CheckCircleOutlined} from '@ant-design/icons'
import {StyledButton} from '../fields/renderFields';
import {CenteredContainer as Container} from '../fields/ContainerFields';
import { AsyncWishListForm } from './WishListForm'

const {Title} = Typography;

class WishList extends Component {
    constructor(props){
        super(props)
        // this.state = {
        //     firstName: '',
        //     lastName: '',
        //     email: '',
        //     major: '',
        //     skills: []
        // }
        
    }

    componentDidMount() {
      console.log('WishList#componentDidMount');
    }

    render(){
        return(
            <Container style={{background: 'black', padding: '20px'}}>
                <Row gutter={[{xs: 8, sm: 16, md: 24, lg: 32}, 16]} style={{width: '80%'}}>
            <Col span={8} className='ant-col ant-col-xs-24 ant-col-xl-6' style={{margin: '0 auto'}}>
              <CheckCircleOutlined style={{fontSize: '140px', padding: '30px', margin: '0 auto', display: 'block'}} />
              <Title style={{textAlign: 'center'}}>STAY UPDATED</Title>
            </Col>
            <Col span={10} className='ant-col ant-col-xs-24 ant-col-xl-10' style={{margin: '0 auto'}}>
              <AsyncWishListForm />
            </Col>
          </Row>
            </Container>
        )
    }
}

export default WishList