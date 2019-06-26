import {
    GET_TECHS,
    ADD_TECH,
    DELETE_TECH,
    SET_LOADING,
    TECHS_ERROR
  } from '../actions/types';

  //Get Techs 
  export const getTechs = () => async dispatch => {
    try {
        setLoading();
        const res = await fetch('/techs');
        const data = await res.json();
    
        dispatch({
          type: GET_TECHS,
          payload: data
        });
      } catch (err) {
        dispatch({
          type: TECHS_ERROR,
          payload: err.response.statusText
        });
      }
  }

  //Add Tech to list
  export const addTechs = () => async dispatch => {
   
}

  //Delete tech from server
  export const deleteTechs = (id) => async dispatch => {
    try {
        setLoading();
    
        await fetch(`/techs/${id}`, {
          method: 'DELETE'
        });
    
        dispatch({
          type: DELETE_TECH,
          payload: id
        });
      } catch (err) {
        dispatch({
          type: TECHS_ERROR,
          payload: err.response.statusText
        });
      }
}

//Set loading to true

export const setLoading = () => {
    return {
      type: SET_LOADING
    };
  };