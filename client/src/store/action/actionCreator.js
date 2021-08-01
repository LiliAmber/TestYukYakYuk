import axios from "axios";
import {
  SHOW_ADD_ON,
  SHOW_ADD_ON_CATEGORY,
  SHOW_LOADING,
  SHOW_ERROR,
} from "./actionType";
let baseUrl = "http://localhost:8000/v1";

export function setAddOn(payload) {
  return {
    type: SHOW_ADD_ON,
    payload,
  };
}

export function setAddOnCategory(payload) {
  return {
    type: SHOW_ADD_ON_CATEGORY,
    payload,
  };
}

export function setLoading(payload) {
  return {
    type: SHOW_LOADING,
    payload,
  };
}

export function setError(payload) {
  return {
    type: SHOW_ERROR,
    payload,
  };
}

export function fetchAddOn() {
  return (dispatch) => {
    axios({
      method: "GET",
      url: `${baseUrl}/addon`,
    })
      .then((responds) => {
        console.log(responds, "<<<fetch creator");
        dispatch(setAddOn(responds));
      })
      .catch((err) => {
        dispatch(setError(err));
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
}

export function newAddOn(data) {
  return (dispatch) => {
    axios({
      method: "POST",
      url: `${baseUrl}/addOn`,
      headers: {
        access_token: "Bearer Token",
      },
      data: {
        name: data.name,
        price: data.price,
        addon_category_id: data.addon_category_id,
      },
    })
      .then(() => {
        dispatch(setAddOn());
      })
      .catch((err) => {
        dispatch(setError(err));
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
}
