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
import Background from '../../images/paint.jpg';

class ProfilePage extends Component {
  
  render() {
    const {user} = this.props;
    // const skills = ['Video Editing', 'Photography'];
    // const interests = ['Good Uncle', 'Technology', 'Food', 'Fashion'];
  
    return (
      <div>
        <Layout style={{backgroundColor: 'black'}}>
          <Header style={{backgroundImage: `url(${Background})`}} />
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
    user: state.auth.user,
  }
};

export default connect(mapStateToProps, {})(ProfilePage);
