import { 
    GET_LOGS,
    SET_LOADING,
    LOGS_ERROR,
    ADD_LOG,
    DELETE_LOG
} from './types'

// Same function as above but refactored for a cleaner more modern look
//Get logs from server
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

//Add Log
export const addLog = (log) => async dispatch => {
    try {
        setLoading();

        const res = await fetch('/logs', { //with a post a second parameter object is passed with method, body, and any headers needed
            method: "POST",
            body: JSON.stringify(log),
            headers: {
                'Content-Type' : 'application/json'
            }
        });

        const data = await res.json();

        dispatch({
            type: ADD_LOG,
            payload: data
        })
        
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.res.data
        })
    }
}
//Delete log from server
export const deleteLog = (id) => async dispatch => {
    try {
        setLoading();

        await fetch(`/logs/${id}`,  {
            method: 'DELETE'
        });
         

        dispatch({
            type: DELETE_LOG,
            payload: id
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


     // export const getLogs = () => {
//return async (dispatch) => {
//         setLoading();
//         const res = await fetch('/logs');
//         const data = await res.json();

//         dispatch({
//             type: GET_LOGS,
//             payload: data
//         })
//     }
// }
