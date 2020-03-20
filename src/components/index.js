import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Header from './header'
import Footer from './footer'
import Main from './main'
import {container} from './style';
import firebase from 'firebase/app';
import 'firebase/auth';
import {AuthProvider} from './authentication/Auth'

const Application = (props) =>{
    return(
        <div style={container}>
            <AuthProvider>
                <Router>
                    <Header/>
                        <Main/>
                    <Footer/>
                </Router>
            </AuthProvider>
        </div>
    )
}

export default Application
