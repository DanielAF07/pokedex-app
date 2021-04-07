import { HIDE_ALERT, SHOW_ALERT } from "../types";

const initialState = {
  show: false,
  msg: '',
  type: ''
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case SHOW_ALERT:
      return {
        ...state,
        show: true,
        msg: action.payload.msg,
        type: action.payload.type
      }
    case HIDE_ALERT:
      return{
        ...state,
        show: false
      }
    default:
      return state
  }
}

export default reducer;