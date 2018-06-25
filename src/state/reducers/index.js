import { combineReducers } from 'redux';
import { users } from './users';
import { chats } from './chats';

const rootReducer = combineReducers({
  users,
  messages: chats
});

export default rootReducer;
