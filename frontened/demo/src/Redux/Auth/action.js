import * as types from "./actionType"
import axios from "axios";


 export  const userSignUp =(payload) =>(dispatch)=>{
  dispatch({type:types.SIGNUP_REQUEST})
   return axios.post("https://relieved-earmuffs-colt.cyclic.app/user/register",payload)
   .then((r)=>dispatch({type:types.SIGNUP_SUCCESS}))
   .catch((e)=>{
     dispatch({type:types.SIGNUP_FAILURE})
   })
 }
 
 export  const userLogin =(payload) =>(dispatch)=>{
   dispatch({type:types.LOGIN_REQUEST})
    return axios.post("https://relieved-earmuffs-colt.cyclic.app/user/login",payload)
    .then((r)=>{dispatch({type:types.LOGIN_SUCCESS,payload:r.data})
      console.log(r.data)
  })
    .catch((e)=>{
      dispatch({type:types.LOGIN_FAILURE})
    })
  }