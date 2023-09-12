import {SET_LANGUAGE,} from '../actions/types';

const initialState = {
  language:'' ,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {...state, language: action.language,};
    default:
      return state;
  }
};

export default reducer;
