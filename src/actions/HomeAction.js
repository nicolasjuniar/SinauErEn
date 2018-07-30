import axios from 'axios'
import type from './types'
import Global from "../styles/Global";

export const getListKateringByRating = () => {
    return dispatch=>{
        axios.get(Global.BASE_URL+'katering/list/rating')
            .then((response) => {
                if (response) {
                    dispatch({
                        type: type.ON_SUCCESS_GET_LIST_KATERING_BY_RATING,
                        payload: response.data.listkatering
                    })
                }
            })
            .catch(error => {
                dispatch({
                    type: type.ON_FAILURE_GET_LIST_KATERING_BY_RATING,
                    payload: error.toString()
                })
            })
    }
};