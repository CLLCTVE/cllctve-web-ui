import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Layout } from 'antd';
import {AboutSection} from './AboutSection';
import {Header} from './ProfileHeaderSection';
import { InterestOrange, SkillSection } from './SkillSection'
import ActivitySection from '../../section/activity-section';
import ExperienceSection from './ExperienceSection';
import EducationSection from './EducationSection';
import LicenseSecton from './LicenseSection';
import HonorSection from './HonorSection';
import InfoSection from './InfoSection';

class ProfilePage extends Component {
  

  render() {
    const {user} = this.props;
    // const skills = ['Video Editing', 'Photography'];
    const interests = ['Good Uncle', 'Technology', 'Food', 'Fashion'];
  
    return (
      <div>
        <Layout style={{backgroundColor: 'black'}}>
          <Header />
          <InfoSection firstName={user.firstName} lastName={user.lastName} title={user.profile.licenseCerts[0].title} school={user.profile.educations[0].school} />
          <AboutSection />
          <SkillSection skills={user.profile.skills} interests={user.profile.interests}/>
          <ActivitySection/>
          <ExperienceSection experience={user.profile.experience}/>
          <EducationSection school={user.profile.educations[0].school} major={user.profile.educations[0].major} />
          <LicenseSecton organization={user.profile.licenseCerts[0].organization} title={user.profile.licenseCerts[0].title}/>
          <HonorSection/>
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
        interests: ['Good Uncle', 'Technology', 'Food', 'Fashion'],
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
