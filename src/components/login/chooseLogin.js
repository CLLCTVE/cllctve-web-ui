import React, { Component } from 'react'
import styled from 'styled-components'
import { Layout, Typography } from 'antd'
import { StyledButton, StyledLink } from '../fields/renderFields';
import {NavLink as Link} from 'react-router-dom';

const {Title} = Typography;

class ChooseLoginPage extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render(){
        return(
            <Layout style={{background: 'black'}}> 
                <div style={{display: 'block', margin: '20% auto', textAlign: 'center'}}>
                <Title style={{marginBottom: '20px'}}>
                WHO ARE YOU?
                </Title>
                <StyledButton size='large' shape='round' style={{margin: '20px'}}>
                    <Link to='/creative/login'>
                    CREATIVE
                    </Link>
                    </StyledButton>
                <StyledButton size='large' shape='round' style={{margin: '20px'}}>
                    <Link to='/brand/login'>
                    BRAND
                    </Link>
                    </StyledButton>
                
                </div>
            </Layout>
        )
    }
  }

  export default ChooseLoginPage;