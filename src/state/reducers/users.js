import { USER_NICK_CREATED } from '../actions';

export const users = (state = {}, action) => {
  switch (action.type) {
    case USER_NICK_CREATED:
      return { userConnected: action.username };
    default:
      return state;
  }
};
