import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link, Redirect} from "react-router-dom";
import Home from '../home'
import ProductForm from '../product_form'
import ProductList from '../product_list'
import LogIn from '../authentication/Login-page'
import SignUp from '../authentication/Signup-page'
import {container} from './main-style'

const Main = (props) =>{
    return(
        <div>
            <Route exact path="/" render={()=>(<Redirect to="/login"/>)}/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={LogIn}/>
            <Route exact path="/signup" component={SignUp}/>
            <Route exact path="/productlist" component={ProductList}/>
            <Route exact path="/productform" component={ProductForm}/>
        </div>
    )
}
export default Main