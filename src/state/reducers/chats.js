import { NEW_CHAT } from '../actions';

export const chats = (state = { chats: [] }, action) => {
  switch (action.type) {
    case NEW_CHAT:
      const chats = state.chats.slice();
      chats.push(action.chatItem);
      return { ...state, chats };
    default:
      return state;
  }
};
