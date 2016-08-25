import {
  GET_DEPARTMENT,
  FETCH_Q
} from '../actions/q'

export default function q(state = {
  department: undefined,
  name: undefined,
  entryposition: undefined,
  q: []
}, action) {
  switch (action.type) {
    case GET_DEPARTMENT:
      return {
        ...state,
        ...action.payload
      }
    case FETCH_Q:
      return {
        ...state,
        q: action.payload
      }
    default:
      return state;
  }
}
