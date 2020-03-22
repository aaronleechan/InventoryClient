import React,{useState,useContext, useEffect} from 'react';
import {AuthContext} from '../authentication/Auth';
import {withRouter,Redirect} from 'react-router';
import {Store} from '../../store/store';
import {getProduct} from '../../store/actions';
import {getColumn} from './column';
import React_Table from '../common/React_Table/React_Table'

const ProductList = () =>{
    const {currentUser} = useContext(AuthContext)
    const productList = useContext(Store).state.data
    const {dispatch} = useContext(Store)
    const [columns,setColumns] = useState(getColumn())

    useEffect(()=>{dispatch(getProduct)},[])
    
    return(
        <div>
            <h1>Product List</h1>
            <React_Table data={productList} columns={columns}/>
        </div>
    )
}
export default withRouter(ProductList);