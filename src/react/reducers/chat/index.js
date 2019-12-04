import { combineReducers } from "redux";
import users, * as fromUsers from "./users";
import documents from "./documents";

const chat = combineReducers({
  users,
  documents
});

export default chat;

export const selectUsers = state => state.users;

export const selectUser = (state, id) => {
  const users = selectUsers(state);
  return fromUsers.selectUser(users, id);
};

export const selectUserByLocalId = (state, localId) => {
  const users = selectUsers(state);
  return fromUsers.selectUserByLocalId(users, localId);
};
