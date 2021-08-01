import { combineReducers } from "redux";

import addOnReducer from "./addOnReducer";
import addOnCategoryReducer from "./addOnCategoryReducer";

const reducer = combineReducers({
  addOnReducer,
  addOnCategoryReducer,
});

export default reducer;
