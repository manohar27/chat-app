import { USER_JOIN, USER_LEAVE, USER_NICK_CREATED } from '.';

export const addUser = username => ({
  type: USER_JOIN,
  username
});

export const removeUser = username => ({
  type: USER_LEAVE,
  username
});

export const createNick = nickName => ({
  type: USER_NICK_CREATED,
  username: nickName
});
