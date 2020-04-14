import React, {Component} from 'react';
import {FieldArrayForm} from './arrayForm';
import styled from 'styled-components';

const Container = styled.div`
  display: inline-block;
  max-width: 300px;
`;

class FieldArrayPage extends Component {
  render() {
    return (
      <Container>
        <FieldArrayForm />
      </Container>
    );
  }
}

export default FieldArrayPage;
