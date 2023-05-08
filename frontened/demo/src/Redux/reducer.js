
import * as types from "./actionType";

const initialState ={
    product:[],
    isError:false,
    isLoading:false,
    token:[],
    count:0
}

const reducer =(state=initialState,action)=>{

    switch(action.type){

        case types.GET_PRODUCT_REQUEST:
        return{
            ...state,
            isLoading:true,
        }
        case types.GET_PRODUCT_SUCCESS:
        return{
            ...state,
           product:action.payload,
            isLoading:false,
            isError:false,

        }
        case "GET_COUNT_SUCCESS":
        return{
            ...state,
             count:action.payload
        }
        case types.GET_PRODUCT_ERROR:
        return{
            ...state,
            product:[],
            isLoading:false,
            isError:true,
        }
        
        default:
        return state;
    }


}

export {reducer}