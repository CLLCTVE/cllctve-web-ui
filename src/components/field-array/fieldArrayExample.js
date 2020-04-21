import React, {Component} from 'react';
import {FieldArrayForm} from './arrayForm';
import {EducationsList} from './educationsList'
import {FormListForm} from './form-list';
import styled from 'styled-components';

const Container = styled.div`
  display: inline-block;
  max-width: 300px;
`;
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
        <FormListForm educationsList={educationsList}/>
        
      </Container>
    );
  }
}

export default FieldArrayPage;
