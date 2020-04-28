import React, {Component} from 'react';

class NotFoundPage extends Component {
  render() {
    return (
      <div style={{padding: 24, textAlign: 'center'}}>
        <h1>404 - Page Not Found</h1>
        <p>I'm sorry, the page you were looking for cannot be found!</p>
      </div>
    );
  }
}

export default NotFoundPage;
