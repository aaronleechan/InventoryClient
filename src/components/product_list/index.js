import React,{useContext} from 'react';
import {AuthContext} from '../authentication/Auth';
import {withRouter,Redirect} from 'react-router';

const ProductList = () =>{
    const {currentUser} = useContext(AuthContext)

    return(
        <div>
            <h1>Product List</h1>
        </div>
    )
}
export default withRouter(ProductList);