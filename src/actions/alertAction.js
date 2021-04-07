import { HIDE_ALERT, SHOW_ALERT } from '../types'

export function sendAlertAction(msg, type) {
  return (dispatch) => {
    dispatch(showAlert(msg, type))
    setTimeout( () => {
      dispatch(hideAlert())
    }, 5000)
  };
}

const showAlert = (msg, type) => ({
  type: SHOW_ALERT,
  payload: {msg, type}
})

const hideAlert = () => ({
  type: HIDE_ALERT
})

export function hideAlertAction() {
  return (dispatch) => {
    dispatch(hideAlert())
  }
}