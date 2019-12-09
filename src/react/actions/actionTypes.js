export const actionTypes = {
  DIGEST_APP_CREDITS: "DIGEST_APP_CREDITS",

  // ====================================================
  //    Actions generated by the Server
  // ====================================================

  S_MESSAGE_RECEIVED: "S::MESSAGE_RECEIVED",

  // request responses
  S_SUBMIT_LOGIN_SUCCESS: "S::SUBMIT_LOGIN_SUCCESS",
  S_SUBMIT_LOGIN_ERROR: "S::SUBMIT_LOGIN_ERROR",
  S_SUBMIT_USER_UPDATE_SUCCESS: "S::SUBMIT_USER_UPDATE_SUCCESS",
  S_SUBMIT_USER_UPDATE_ERROR: "S::SUBMIT_USER_UPDATE_ERROR",

  // clients reducer
  S_CREATE_CLIENT: "S::CREATE_CLIENT",
  S_UPDATE_CLIENT: "S::UPDATE_CLIENT",
  S_DELETE_CLIENT: "S::DELETE_CLIENT",
  S_DESTROY_CLIENT: "S::DESTROY_CLIENT",

  // user reducer
  S_CREATE_USER: "S::CREATE_USER",
  S_UPDATE_USER: "S::UPDATE_USER",
  S_DELETE_USER: "S::DELETE_USER",
  S_DESTROY_USER: "S::DESTROY_USER",

  // document reducer
  S_CREATE_DOCUMENT: "S::CREATE_DOCUMENT",
  S_UPDATE_DOCUMENT: "S::UPDATE_DOCUMENT",
  S_DELETE_DOCUMENT: "S::DELETE_DOCUMENT",

  // scQuery reducer
  S_CREATE_SC_QUERY: "S::CREATE_SC_QUERY",
  S_UPDATE_SC_QUERY: "S::UPDATE_SC_QUERY",
  S_DELETE_SC_QUERY: "S::DELETE_SC_QUERY",

  // ====================================================
  //    Actions broadcasted by the Server
  // ====================================================

  B_USER_JOINED: "B::USER_JOINED",
  B_USER_LEFT: "B::USER_LEFT",
  B_USER_UPDATE: "B::USER_UPDATE",

  // todo: add other broadcast action types

  // ====================================================
  //    Actions generated by the Client
  // ====================================================

  C_SUBMIT_LOGIN: "C::SUBMIT_LOGIN",
  C_SUBMIT_LOGOUT: "C::SUBMIT_LOGOUT",
  C_UPDATE_MY_USER_ID: "UPDATE_MY_USER_ID",

  C_CREATE_USER: "C::CREATE_USER",
  C_UPDATE_USER: "C::UPDATE_USER",
  C_DELETE_USER: "C::DELETE_USER",
  C_DESTROY_USER: "C::DESTROY_USER",
  C_REPLACE_USER_LIST: "C::REPLACE_USER_LIST",

  C_CREATE_DOCUMENT: "C::CREATE_DOCUMENT",
  C_UPDATE_DOCUMENT: "C::UPDATE_DOCUMENT",
  C_DELETE_DOCUMENT: "C::DELETE_DOCUMENT",

  C_CREATE_SC_QUERY: "C::CREATE_SC_QUERY",
  C_UPDATE_SC_QUERY: "C::UPDATE_SC_QUERY",
  C_DELETE_SC_QUERY: "C::DELETE_SC_QUERY",

  // redux-websocket client actions
  C_BEGIN_RECONNECT: "REDUX_WEBSOCKET::BEGIN_RECONNECT",
  C_RECONNECT_ATTEMPT: "REDUX_WEBSOCKET::RECONNECT_ATTEMPT",
  C_RECONNECTED: "REDUX_WEBSOCKET::RECONNECTED",
  C_BROKEN: "REDUX_WEBSOCKET::BROKEN",
  C_CLOSED: "REDUX_WEBSOCKET::CLOSED",
  C_ERROR: "REDUX_WEBSOCKET::ERROR",
  C_MESSAGE: "REDUX_WEBSOCKET::MESSAGE",
  C_OPEN: "REDUX_WEBSOCKET::OPEN",
  C_CONNECT: "REDUX_WEBSOCKET::CONNECT"
};
