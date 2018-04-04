import { combineReducers } from 'redux';
import { RECEIVE_FORM_DATA } from '../actions/form_actions';

const formDataReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_FORM_DATA:
      return {};
    default:
      return state;
  }

};

export default formDataReducer;