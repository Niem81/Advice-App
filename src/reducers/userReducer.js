import {REGISTER_USER, LOGIN_USER, UNAUTH_USER} from '../actions/actionTypes';

let userReducer = function(state = {}, action) {
  switch (action.type) {
    case REGISTER_USER:
      return Object.assign({}, state, {status: action.data});
    case LOGIN_USER:
      return Object.assign({}, state, {error: '', user: action.data, authenticated: true});
    case UNAUTH_USER:
      return Object.assign({}, state, {error: action.data, authenticated: false});
    default:
      return state;
  }
}

export default userReducer;
