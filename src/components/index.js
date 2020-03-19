import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Header from './header'
import Footer from './footer'
import Main from './main'
import {container} from './style';
import firebase from 'firebase/app';
import 'firebase/auth';

const Application = (props) =>{
    return(
        <div style={container}>
            <Router>
                <Header/>
                    <Main/>
                <Footer/>
            </Router>
        </div>
    )
}

export default Application
