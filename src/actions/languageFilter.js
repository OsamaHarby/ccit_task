import {SET_LANGUAGE} from './types';


export const setLanguageFilter = (language) => async (dispatch) => {
  dispatch({type: SET_LANGUAGE, language});
  
};

