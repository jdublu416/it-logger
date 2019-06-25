import { 
    GET_LOGS,
    SET_LOADING,
    LOGS_ERROR
} from './types'

// export const getLogs = () => {
//     return async (dispatch) => {
//         setLoading();
//         const res = await fetch('/logs');
//         const data = await res.json();

//         dispatch({
//             type: GET_LOGS,
//             payload: data
//         })
//     }
// }

// Same function as above but refactored for a cleaner more modern look
export const getLogs = () => async dispatch => {
    try {
        setLoading();
        const res = await fetch('/logs');
        const data = await res.json();

        dispatch({
            type: GET_LOGS,
            payload: data
        })
        
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.res.data
        })
    }
    
}

//Set Loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}