import { combineReducers } from "redux-immutable";

import {reducer as notificationsReducer } from "./notifications/reducer";

export const reducer = combineReducers({
  notifications: notificationsReducer
});
