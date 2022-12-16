import { AUTH, FETCH_USERS, USER_PROFILE } from "constants/actionTypes";
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
    console.log("data?.data.FirstName: ", data?.data.FirstName);
    console.log("api data: ", JSON.stringify({ ...data?.data }));

    if (data?.status === "success" && data?.data) {
      //window.location.reload(true);
      if (data?.data.Role === "Patient") {
        if (
          data?.data.Role === "Patient" &&
          data?.data.FirstName === undefined
        ) {
          dispatch({ type: AUTH, payload: data?.data });
          localStorage.setItem(
            "userProfile",
            JSON.stringify({ ...data?.data })
          );
          localStorage.setItem(
            "accessToken",
            JSON.stringify(data?.data?.accessToken)
          );
          router.push("/auth/register");
        } else {
          dispatch({ type: AUTH, payload: data?.data });
          localStorage.setItem(
            "userProfile",
            JSON.stringify({ ...data?.data })
          );
          localStorage.setItem(
            "accessToken",
            JSON.stringify(data?.data?.accessToken)
          );
          router.push("/user/caloriecalculator");
        }
      } else if (data?.data.Role === "Doctor") {
        dispatch({ type: AUTH, payload: data?.data });
        localStorage.setItem("userProfile", JSON.stringify({ ...data?.data }));
        localStorage.setItem(
          "accessToken",
          JSON.stringify(data?.data?.accessToken)
        );
        router.push("/user/mypatients");

        //window.location.reload(true);
      } else if (data?.data.Role === "SystemAdministrator") {
        dispatch({ type: AUTH, payload: data?.data });
        localStorage.setItem("userProfile", JSON.stringify({ ...data?.data }));
        localStorage.setItem(
          "accessToken",
          JSON.stringify(data?.data?.accessToken)
        );
        router.push("/user/users");
        //window.location.reload(true);
      } else {
        router.push("/public/login");
      }

      //setTimeout(() => {}, 500);
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

export const fetchAllUsers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAllUsers();
    console.log("users fetch all payload", data?.data);
    if (data?.status === "success") {
      dispatch({ type: FETCH_USERS, payload: data?.data });
    } else if (data?.status === "error") {
      console.log(data);
    }
  } catch (error) {
    console.log(error);
  }
};

export const fetchUserProfile = () => async (dispatch) => {
  try {
    const { data } = await api.fetchUserProfile();
    if (data?.status === "success") {
      dispatch({ type: USER_PROFILE, payload: data?.data });
       //console.log("users fetch profile", data?.data);
    } else if (data?.status === "error") {
      console.log(data);
    }
  } catch (error) {
    console.log(error);
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
      dispatch({ type: AUTH, payload: data?.data });
      confirmAlert({
        message: "User Registered!",
        buttons: [
          {
            label: "Ok",
            onClick: () => {
              window.location.reload(true);
            },
          },
        ],
      });
    }
    if (data?.status === "error") {
      console.log(data);
    }
  } catch (error) {
    console.log("catch error: ", error);
  }
};

export const profileUpdate = (formData, router) => async (dispatch) => {
  try {
    console.log("formData: ", formData);
    const response = await api.profileUpdate(formData);
    const { data } = response;
    console.log("api data####: ", data);

    if (data?.status === "success") {
      console.log("payload", data?.data);
      confirmAlert({
        message: "User updated.",
        buttons: [
          {
            label: "Ok",
            onClick: () => {
              window.location.reload(true);
            },
          },
        ],
      });
      // router.push("/public/login");
    }
    if (data?.status === "error") {
      console.log(data);
    }
  } catch (error) {
    console.log("catch error: ", error);
  }
};
