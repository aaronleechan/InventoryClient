import React from 'react';
import {container,navbarIcon,titleStyle,authLabel} from './header-style';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {companyName} from '../constraints';
import { Link } from 'react-router-dom';

const Header = (props) =>{
    return(
        <header style={container}>
            <nav>
                <div>
                    <a style={navbarIcon}><FontAwesomeIcon icon={faHome} size="4x" /></a>
                    <a style={titleStyle}>{companyName}</a>
                    <a><Link style={authLabel} to="/login">LOG IN</Link></a>
                    <a><Link style={authLabel} to="/signup">SIGN UP</Link></a>
                </div>
            </nav>
        </header>
    )
}
export default Header