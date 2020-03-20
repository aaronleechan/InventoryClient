import React,{useContext} from 'react';
import {container,navbarIcon,titleStyle,authLabel} from './header-style';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {companyName} from '../../config/constraints';
import { Link } from 'react-router-dom';
import {AuthContext} from '../authentication/Auth';
import firebase from '../../config/firebase';

const Header = (props) =>{
    const {currentUser} = useContext(AuthContext)
    return(
        <header style={container}>
            <nav>
                <div>
                    <a style={navbarIcon}><FontAwesomeIcon icon={faHome} size="4x" /></a>
                    <a style={titleStyle}>{companyName}</a>
                    {
                        currentUser ? 
                        <span><a><Link onClick={()=>firebase.auth().signOut()} style={authLabel} to="/login">LOG OUT</Link></a></span>
                        :
                        <span>
                            <a><Link style={authLabel} to="/login">LOG IN</Link></a>
                            <a><Link style={authLabel} to="/signup">SIGN UP</Link></a>
                        </span>
                    }

                </div>
            </nav>
        </header>
    )
}
export default Header