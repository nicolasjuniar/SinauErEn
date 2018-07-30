import type from "../actions/types";

let initialState={
    listKatering:[],
    error:null
};

export default (state=initialState,action)=>{
    switch (action.type){
        case type.ON_SUCCESS_GET_LIST_KATERING_BY_RATING:{
            return {...state,listKatering:action.payload}
        }
        case type.ON_FAILURE_GET_LIST_KATERING_BY_RATING:{
            return {...state,error:action.payload}
        }
        default:
            return state
    }
}