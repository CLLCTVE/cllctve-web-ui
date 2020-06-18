import React, { Component } from 'react'
import styled from 'styled-components'
import {Layout, Typography, Space} from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import {StyledButton} from '../../fields/renderFields'

const {Header, Sider, Content} = Layout
const {Title} = Typography

class WhatsNew extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div style={{padding: 30}}>
                <Title level={2} style={{paddingTop: 30, paddingBottom: 10}}>WHAT'S NEW?</Title>
                <StyledTextArea size="large" placeholder="SHARE YOUR THOUGHTS WITH @MENTIONS. #CREATIVES" rows={4}/>
                <StyledButton style={{marginTop: 20, float: 'right'}}>SUBMIT</StyledButton>
            </div>
        )
    }
}

const StyledTextArea = styled(TextArea)`
    &.ant-input {
        background-color: #333 !important;
        border: none;
        color: white;
    }

`

export default WhatsNew;