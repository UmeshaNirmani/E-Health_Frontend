import { AUTH } from "../constants/actionTypes";
import * as api from "../api/index";

export const signIn = (formData, router) => async (dispatch) => {
  try {
    console.log("formData: ", formData);

    const response = await api.signIn(formData);
    const { data } = response;

    console.log("api response: ", JSON.stringify(response));
    console.log("api data: ", data);
    console.log(data.data);
    if (data?.status === "success") {
      //dispatch({ type: AUTH, payload: data?.data });
      router.push("/user/CalorieCalculator");
    }
    if (data?.status === "error") {
      console.log(data);
    }
  } catch (error) {
    console.log("catch error: ", error);
  }
};

export const signUp = (formData, router) => async (dispatch) => {
  try {
    console.log("formData: ", formData);
    const response = await api.signUp(formData);
    const { data } = response;
    console.log("api data: ", data);
    console.log(data.data);
    if (data?.status === "success") {
      router.push("/public/login");
    }
    if (data?.status === "error") {
      console.log(data);
    }
  } catch (error) {
    console.log("catch error: ", error);
  }
};
