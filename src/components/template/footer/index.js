import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NavLink as Link, withRouter} from 'react-router-dom';
import styled from 'styled-components'

import logo from '../../../logo.png';

const FooterContainer = styled.div`
    height: 200px;
    background-image: linear-gradient(to right, #444, #222);
`

class Footer extends Component {
    render() {
        return(
            <>
            <FooterContainer>
            <nav>
            <div className="logo">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
            </div>
            </nav>

            </FooterContainer>
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
      authenticated: state.auth.authenticated,
    };
  };

  
export default withRouter(connect(mapStateToProps)(Footer));

