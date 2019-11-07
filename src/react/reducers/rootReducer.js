import { combineReducers } from "redux";
import {baseReducer} from "./baseReducer";
import {chatReducer} from "./chatReducer";
import {appReducer} from "./appReducer";
import {flashReducer} from "./flashReducer";

export const rootReducer = combineReducers({
    app: appReducer,
    base: baseReducer,
    chat: chatReducer,
    flash: flashReducer
});
