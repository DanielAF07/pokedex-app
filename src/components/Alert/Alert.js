import React from 'react';
import '../../styles/alert.scss'

import { useSelector, useDispatch } from 'react-redux'
import { hideAlertAction } from '../../actions/alertAction'

const Alert = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.alert.show)
  const msg = useSelector(state => state.alert.msg)
  const type = useSelector(state => state.alert.type)

  const handleClickClose = () => {
    dispatch(hideAlertAction())
  }

  return (
    <div
      className={`alert ${type} ${show ? 'show' : ''}`}
      onClick={handleClickClose}
    >
      <h2>{msg}</h2>
    </div>
  );
};

export default Alert;