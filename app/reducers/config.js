import {
  SET_CONFIG
} from '../actions/config';

import {
  GET_DEPARTMENT
} from '../actions/q'

export default function config(state = {
  db_ip: undefined,
  db_port: undefined,
  db_user: undefined,
  db_pwd: undefined,
  db_name: undefined,
  dep_id: undefined,
  bg_color: undefined,
  department: undefined,
  name: undefined,
  entryposition: undefined
}, action) {
  switch (action.type) {
    case SET_CONFIG:
      return {
        ...state,
        ...action.payload
      }
    case GET_DEPARTMENT:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}
