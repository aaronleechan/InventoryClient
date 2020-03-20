import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link, Redirect} from "react-router-dom";
import Home from '../home'
import ProductForm from '../product_form'
import ProductList from '../product_list'
import LogIn from '../authentication/Login-page'
import SignUp from '../authentication/Signup-page'
import {container} from './main-style'
import PrivateRoute from '../provate_route/PrivateRoute'

const Main = (props) =>{
    return(
        <div>
            <Switch>
                <PrivateRoute exact path="/" component={Home}/>
                <PrivateRoute exact path="/productlist" component={ProductList}/>
                <PrivateRoute exact path="/productform" component={ProductForm}/>
                <Route exact path="/login" component={LogIn}/>
                <Route exact path="/signup" component={SignUp}/>
            </Switch>
        </div>
    )
}
export default Main