import React, {Component} from 'react';
import { StyledLink, CenteredContainer as Container} from './fields/renderFields';

class HomePage extends Component {
  render() {
    return (
      <Container>
        <section style={{height: '100vh', width: '100vw', display: 'flex', backgroundColor: 'yellow'}}>
          slider
        </section>
      </Container>
    );
  }
}

export default HomePage;
