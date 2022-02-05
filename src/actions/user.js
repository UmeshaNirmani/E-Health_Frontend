import Lodash from "lodash";
import { confirmAlert } from "react-confirm-alert";
import { AUTH } from "../constants/actionTypes";
import * as api from "../api/index";

export const signIn = (formData) => async (dispatch) => {
  try {
    console.log("formData: ", formData);

    const response = await api.signIn(formData);
    const { data } = response;

    console.log("api response: ", JSON.stringify(response));
    console.log("api data: ", data);
  } catch (error) {
    console.log("catch error: ", error);
  } finally {
  }
};
