export const RECEIVE_FORM_DATA = 'RECEIVE_FORM_DATA';

export const receiveFormData = data => ({
  type: RECEIVE_FORM_DATA, 
  data
});

export const fetchFormData = data => dispatch => {
  dispatch(receiveFormData(data));
};