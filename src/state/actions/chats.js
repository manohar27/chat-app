import { NEW_CHAT } from '.';

export const newChat = chatItem => ({
  type: NEW_CHAT,
  chatItem
});
