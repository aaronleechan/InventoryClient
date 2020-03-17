import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Header from './header'
import Footer from './footer'
import Main from './main'
import {container} from './style';

const Application = (props) =>{
    return(
        <div style={container}>
            <Header/>
                <Router>
                    <Main/>
                </Router>
            <Footer/>
        </div>
    )
}

export default Application
