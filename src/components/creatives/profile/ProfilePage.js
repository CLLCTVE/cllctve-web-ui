import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Layout} from 'antd';
import {AboutSection} from './AboutSection';
import {InterestOrange, SkillSection} from './SkillSection';
import ActivitySection from './ActivtySection';
import ExperienceSection from './ExperienceSection';
import EducationSection from './EducationSection';
import LicenseSecton from './LicenseSection';
import HonorSection from './HonorSection';
import InfoSection from './InfoSection';
import Background from '../../images/paint.jpg';

const {Content, Header} = Layout;

class ProfilePage extends Component {
  render() {
    const {user} = this.props;
    // const skills = ['Video Editing', 'Photography'];
    // const interests = ['Good Uncle', 'Technology', 'Food', 'Fashion'];

    return (
      <Layout style={{backgroundColor: 'black', width: 'fit-content'}}>
        <Content
          style={{
            height: '350px',
            backgroundImage: `url(${Background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
          }}
        ></Content>
        <Layout style={{backgroundColor: 'black', width: '80%', margin: '0 auto'}}>
          <Content>
            <InfoSection
              firstName={user.firstName}
              lastName={user.lastName}
              title={user.profile.licensesCerts[0].title}
              school={user.profile.educations[0].school}
            />
            <AboutSection />
            <SkillSection skills={user.profile.skills} interests={user.profile.interests} />
            <ActivitySection />
            <ExperienceSection experience={user.profile.experience} />
            <EducationSection
              school={user.profile.educations[0].school}
              major={user.profile.educations[0].major}
            />
            <LicenseSecton
              organization={user.profile.licensesCerts[0].organization}
              title={user.profile.licensesCerts[0].title}
            />
            <HonorSection />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps, {})(ProfilePage);
