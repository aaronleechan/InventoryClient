import React,{useEffect,useState} from 'react';
import {Text_Input,Button} from '../common';
import {container} from './product_form_inline_style.js';


const ProductForm = (props) =>{
    const [product,setProduct] = useState([])

    const handleSubmit = (e) =>{
        e.preventDefault()
        const data = {
            'product_name': e.target.product_name.value,
            'amount':e.target.amount.value,
            'purchase':e.target.purchase.value,
            'sale':e.target.sale.value,
            'barCode':e.target.barCode.value
        }
        console.log(data)
        setProduct(data)
        console.log("********ProductForm*************")
    }

    return(
        <div style={container}>
            <form onSubmit={handleSubmit}>
                <h1 style={{color: 'white'}}>Product Name</h1>
                <Text_Input id="product_name" name="product_name" type="text" size={20} placeholder="Product Name" required/>
                <h1 style={{color: 'white'}}>Amount</h1>
                <Text_Input id="amount" name="amount" type="number" size={30} placeholder="Amount" required/>
                <h1 style={{color: 'white'}}>Purchase Price</h1>
                <Text_Input id="purchase" name="purchase" type="number" size={30} placeholder="Purchase price" required/>
                <h1 style={{color: 'white'}}>Sale Price</h1>
                <Text_Input id="sale" name="sale" type="number" size={30} placeholder="Sale Price" required/>
                <h1 style={{color: 'white'}}>Bar Code</h1>
                <Text_Input id="barCode" name="barCode" type="text" size={20} placeholder="Bar Code" required/>
                <Button type="submit" value="submit"/>
            </form>
        </div>
    )
}
export default ProductForm