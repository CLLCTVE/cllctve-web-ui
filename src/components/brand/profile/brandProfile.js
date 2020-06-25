import React, {Component} from 'react'
import {Layout, Typography, Col, Row, Avatar} from 'antd'
import { MainImage } from './MainImage'
import {InfoSection} from './InfoSection'

const {Content, Sider} = Layout

class brandProfile extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Layout>
                <Content>
                <MainImage/>
                </Content>
                <Layout>
                    <Content>
                    <InfoSection/>
                    </Content>
                    {/* <Sider>

                    </Sider> */}
                </Layout>
            </Layout>
        )
    }
}

export default brandProfile;