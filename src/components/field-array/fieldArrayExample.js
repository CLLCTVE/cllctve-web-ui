import React, {Component} from 'react';
import {FieldArrayForm} from './arrayForm';
import {EducationsList} from './educationsList'
import {FormListForm} from './form-list';
import {CenteredContainer as Container} from '../fields/renderFields';


const educationsList = [
  {
    schoolName: 'FAMU',
    degreeType: 'Bachelors of Science',
    major: 'Computer Engineering',
    startMonthYear: '08/2005',
    gradMonthYear: '12/2010',
    isCurrentlyEnrolled: false
  },
  {
    schoolName: 'USC',
    degreeType: 'Masters of Science',
    major: 'Mechanical Engineering',
    startMonthYear: '08/2021',
    gradMonthYear: '12/2023',
    isCurrentlyEnrolled: false
  }
];

class FieldArrayPage extends Component {
  render() {
    return (
      <Container>
        <div style={{padding: 24, textAlign: 'center', width: '75%'}}>
          <FormListForm educationsList={educationsList}/>
        </div>
      </Container>
    );
  }
}

export default FieldArrayPage;
