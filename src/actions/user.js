import { AUTH } from "constants/actionTypes";
import * as api from "../api/index";
import Lodash from "lodash";
import { confirmAlert } from "react-confirm-alert";
import "../assets/css/confirm-alert-custom.css";

export const signIn = (formData, router) => async (dispatch) => {
  try {
    console.log("formData: ", formData);

    const response = await api.signIn(formData);
    const { data } = response;

    console.log("api response: ", JSON.stringify(response));
    console.log("api data: ", data);
    console.log("data.data", data.data);
    if (data?.status === "success" && data?.data) {
      dispatch({ type: AUTH, payload: data?.data });
      // save user profile
      localStorage.setItem("userProfile", JSON.stringify({ ...data?.data }));
      // save access token
      localStorage.setItem(
        "accessToken",
        JSON.stringify(data?.data?.accessToken)
      );
      console.log("payload: ", data?.data);

      setTimeout(() => {
        router.push("/user/profile");
      }, 500);
    } else if (data?.status === "error") {
      confirmAlert({
        title: data?.message,
        buttons: [{ label: "Ok", onClick: () => {} }],
      });
    }
  } catch (error) {
    console.log("catch error: ", error);
    let errorTitle = error?.response?.data?.data
      ? error?.response?.data?.message
      : null;
    let errorMessge = error?.response?.data?.data
      ? error?.response?.data?.data
      : error?.response?.data?.message;
    errorMessge = Lodash.isEmpty(errorMessge)
      ? "Oops, something went wrong"
      : errorMessge;
    confirmAlert({
      title: errorTitle,
      message: errorMessge,
      buttons: [{ label: "Ok", onClick: () => {} }],
    });
    router.push("/public/login");
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
