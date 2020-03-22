import * as actions from './actions';
import axios from 'axios'

export const reducer = async (state, action) => {
    switch (action.type) {
      case actions.GET_PRODUCT:
        return {...state, ...await completeData()}
      default:
        return state
    }
}

export const completeData = async () =>{
  let products
  try{
    products = await axios.get(`${actions.API}product`);
  }catch(e){
    console.log(e)
  }
  return products
}