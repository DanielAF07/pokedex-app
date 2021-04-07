import { HIDE_MODAL, SHOW_MODAL } from '../types'

export function showModalAction(state = true) {
  return (dispatch) => {
    if(state){
      dispatch(showModal())
    } else {
      dispatch(hideModal())
    }
  };
}

const showModal = () => ({
  type: SHOW_MODAL
})

const hideModal = () => ({
  type: HIDE_MODAL
})