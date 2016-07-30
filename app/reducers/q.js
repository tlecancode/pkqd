import {
  GET_DEPARTMENT
} from '../actions/q'

export default function q(state = {
  department: undefined,
  name: undefined,
  entryposition: undefined
}, action) {
  switch (action.type) {
    case GET_DEPARTMENT:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}
