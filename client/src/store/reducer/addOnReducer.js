import { SHOW_ADD_ON, SHOW_LOADING, SHOW_ERROR } from "../action/actionType";

const initialState = {
  addOns: [],
  loading: false,
  errors: null,
};

function addOnReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SHOW_ADD_ON:
      return { ...state, addOns: payload };
    case SHOW_LOADING:
      return { ...state, loading: payload };
    case SHOW_ERROR:
      return { ...state, errors: payload };
    default:
      return state;
  }
}

export default addOnReducer;
