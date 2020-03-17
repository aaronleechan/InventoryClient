import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link, Redirect} from "react-router-dom";
import Home from '../home'
import ProductForm from '../product_form'
import ProductList from '../product_list'
import {container} from './main-style'

const Main = (props) =>{
    return(
        <div>
            <Route path="/" component={Home}/>
            <Route path="/productlist" component={ProductList}/>
            <Route path="/productform" component={ProductForm}/>
        </div>
    )
}
export default Main