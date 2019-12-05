import { actionTypes } from "../../actions/actionTypes";
import { takeLatest, put, race, take, delay } from "redux-saga/effects";
import { send } from "@giantmachines/redux-websocket";
import {
  wsGetUserList,
  wsGetUserListSuccess,
  wsGetUserListTimeout
} from "../../actions/ws/getUserList";

export function* wsGetUserListWatcher() {
  yield takeLatest(actionTypes.WS_GET_USER_LIST, wsGetUserListSaga);
}

export function* wsGetUserListSaga() {
  // Request a new user list
  yield put(send(wsGetUserList()));

  // Wait for an error or success message
  const { result, error, timeout } = yield race({
    result: take(actionTypes.WS_GET_USER_LIST_SUCCESS),
    error: take(actionTypes.WS_GET_USER_LIST_ERROR),
    timeout: delay(2000, `Request took too long to complete`)
  });

  // If request completed successfully:
  if (result) {
    console.log(result);
  }
  // If request raised an error on the server:
  else if (error) {
    console.log(error);
  }
  // If request took to long to complete
  else if (timeout) {
    console.log(timeout);
    yield put(wsGetUserListTimeout(timeout));
  }
}
