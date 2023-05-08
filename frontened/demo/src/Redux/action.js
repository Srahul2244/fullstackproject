import * as types from "./actionType"
import axios from "axios";
import {LOGIN_FAILURE} from "./Auth/actionType"

export const getproductRequest =()=>{
   return{
  type:types.GET_PRODUCT_REQUEST,
   }
}

export const getproductSuccess =(payload)=>{
    return{
        type:types.GET_PRODUCT_SUCCESS,
        payload,
    }
 }
 export const countSuccess =(payload)=>{
   return{
       type:"GET_COUNT_SUCCESS",
       payload,
   }
}

 export const getproductError =()=>{
    return{
        type:types.GET_PRODUCT_ERROR,
    }
 }
 
 export const getProduct=(payload)=>(dispatch)=>{
    dispatch(getproductRequest())
  if(payload.query){
   return axios.get(`https://relieved-earmuffs-colt.cyclic.app/product/${payload.path}${payload.query}`,{headers:{authorization:payload.token}})
   .then((r)=>{
      dispatch(getproductSuccess(r.data))
      console.log(r.data)
   })
   .catch((e)=>{
      dispatch(getproductError())
      dispatch({type:LOGIN_FAILURE})
   })
  }else{
   return axios.get(`https://relieved-earmuffs-colt.cyclic.app/product/${payload.path}`,{headers:{authorization:payload.token}})
   .then((r)=>{
      dispatch(getproductSuccess(r.data))
      console.log(r.data)
   })
   .catch((e)=>{
      dispatch(getproductError())
      dispatch({type:LOGIN_FAILURE})
   })
  }
 }
 
export  const getCount =(payload)=>(dispatch)=>{
   return axios.get("https://relieved-earmuffs-colt.cyclic.app/cart", { headers: { authorization: payload} })
   .then((res)=>{
      console.log(res.data)
     dispatch(countSuccess(res.data.data.length))
   }).catch((e)=>{
     console.log(e)
   })

 }
 