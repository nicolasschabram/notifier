import { createStore } from "redux";
import { Map } from "immutable";

import { reducer } from "./data/reducer";

const initialState = Map();

export default createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
