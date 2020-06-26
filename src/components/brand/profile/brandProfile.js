import React, {Component} from 'react'
import {Layout, Typography, Col, Row, Avatar} from 'antd'
import { MainImage } from './MainImage'
import {InfoSection} from './InfoSection'
import { Overview } from './Overview'
import { QuickInfo } from './QuickInfo'
import ActivitySection from '../../creatives/profile/ActivtySection'
import { CompanyCulture } from './CompanyCulture'

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
                    <Overview/>
                    <QuickInfo/>
                    <div style={{margin: '0 auto',width: '75%'}}>
                    <ActivitySection/>
                    </div>
                    <CompanyCulture/>
                    </Content>
                    {/* <Sider>

                    </Sider> */}
                </Layout>
            </Layout>
        )
    }
}

export default brandProfile;