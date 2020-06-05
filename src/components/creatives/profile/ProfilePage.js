import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Layout } from 'antd';
import {AboutSection} from './AboutSection';
import {Header} from './ProfileHeaderSection';
import { InterestOrange, SkillSection } from './SkillSection'

class ProfilePage extends Component {
  render() {
    const {user} = this.props;
    const skills = ['Video Editing', 'Photography'];
    const interests = ['Good Uncle', 'Technology', 'Food', 'Fashion'];
  
    return (
      <div>
        <Layout style={{backgroundColor: 'black'}}>
          <Header />
          <AboutSection />
          <SkillSection skills={skills} interests={interests}/>
          
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: {
      id: '5ed7ffbdbc8f8400412f4a8e',
      firstName: 'Brandon',
      lastName: 'Bailey',
      email: 'bbailey@gmail.edu',
      onboarded: false,
      profile: {
        skills: ['Video Editing', 'Photography'],
        licenseCerts: [
          {
            id: '5ed800f1bc8f8400412f4a91',
            title: 'Web Development',
            organization: 'UCLA extension',
            issuedMonthYear: '2020-01-03T20:58:32.920Z',
          },
        ],
        experiences: [],
        educations: [
          {
            id: '5ed800f1bc8f8400412f4a90',
            isEnrolled: false,
            school: 'UCLA',
            major: 'Design',
            startMonthYear: '2020-01-03T20:57:44.435Z',
          },
        ],
        honorsAwards: [],
      },
    },
  }
};

export default connect(mapStateToProps, {})(ProfilePage);
