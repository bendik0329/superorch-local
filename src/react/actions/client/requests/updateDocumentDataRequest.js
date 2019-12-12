import { actionTypes } from "../../actionTypes";

export const c_updateDocumentDataRequest = (docId, docData) => ({
  type: actionTypes.C_UPDATE_DOCUMENT_DATA_REQUEST,
  docId,
  docData
});

export const c_updateDocumentDataSuccess = message => ({
  type: actionTypes.C_UPDATE_DOCUMENT_DATA_SUCCESS,
  message
});

export const c_updateDocumentDataError = error => ({
  type: actionTypes.C_UPDATE_DOCUMENT_DATA_ERROR,
  error
});

export const c_updateDocumentDataTimeout = message => ({
  type: actionTypes.C_UPDATE_DOCUMENT_DATA_TIMEOUT,
  message
});
