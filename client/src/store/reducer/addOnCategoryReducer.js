import {
  SHOW_ADD_ON_CATEGORY,
  SHOW_LOADING,
  SHOW_ERROR,
} from "../action/actionType";

const initialState = {
  categories: [],
  loading: false,
  errors: null,
};

function addOnCategoryReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SHOW_ADD_ON_CATEGORY:
      return { ...state, categories: payload };
    case SHOW_LOADING:
      return { ...state, loading: payload };
    case SHOW_ERROR:
      return { ...state, errors: payload };
    default:
      return state;
  }
}

export default addOnCategoryReducer;
