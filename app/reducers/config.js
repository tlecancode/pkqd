import {
  SET_CONFIG
} from '../actions/config';

export default function config(state = {
  db_ip: undefined,
  db_port: undefined,
  db_user: undefined,
  db_pwd: undefined,
  db_name: undefined
}, action) {
  switch (action.type) {
    case SET_CONFIG:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
