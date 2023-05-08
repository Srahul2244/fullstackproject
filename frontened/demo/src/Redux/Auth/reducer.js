
import * as types from "./actionType";

const initialState ={
    user:(localStorage.getItem("user"))||{},
    isError:false,
    isLoading:false,
    token:localStorage.getItem("token")||""
}

const reducer =(state=initialState,action)=>{

    switch(action.type){

        case types.LOGIN_REQUEST:
        localStorage.setItem("token","")
        localStorage.setItem("user",{})
        return{
            ...state,
            isLoading:true,
        }
        case types.LOGIN_SUCCESS:
        localStorage.setItem("token",action.payload.token)
        localStorage.setItem("user",JSON.stringify(action.payload.user))
        return{

            ...state,
            user:action.payload.user,
            token:action.payload.token,
            isLoading:false,
            isError:false,

        }

        case types.LOGIN_FAILURE:
        localStorage.setItem("token","")
        localStorage.setItem("user",{})
        return{
            ...state,
            user:{},
            isLoading:false,
            isError:true,
            token:""
        }
        case types.LOGOUT_SUCCESS:
        localStorage.setItem("token","")
        localStorage.setItem("user",{})
        return{
            ...state,
            user:{},
            isLoading:false,
            isError:true,
            token:""
        }
        
        default:
        return state;
    }
}

export {reducer}