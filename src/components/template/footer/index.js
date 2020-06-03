import React, {Component} from 'react'
import {connect} from 'react-redux'

class Footer extends Component {
    render() {
        return(
            <>
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
      authenticated: state.auth.authenticated,
    };
  };

  
  export default connect(mapStateToProps, {})(Footer);

