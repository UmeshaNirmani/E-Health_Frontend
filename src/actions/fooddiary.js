import { FOODDIARY_FETCH_ALL } from "../constants/actionTypes";
import * as api from "../api/index";
import { confirmAlert } from "react-confirm-alert";
import "../assets/css/confirm-alert-custom.css";

export const foodDiaryInputs = (formData) => async (dispatch) => {
  try {
    console.log("formData: ", formData);
    const { data } = await api.foodDiaryInputs(formData);
    console.log("api data: ", data);
    console.log(data.data);

    if (data?.status === "success") {
      confirmAlert({
        title: "Data Recorded Successfully!",
        buttons: [{ label: "Ok", onClick: () => {} }],
      });
    } else if (data?.status === "error") {
      console.log(data);
      confirmAlert({
        title: "Oops, Something Went Wrong!",
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
    confirmAlert({
      title: errorTitle,
      message: errorMessge,
      buttons: [{ label: "Ok", onClick: () => {} }],
    });
  }
};

export const fetchFoodDiary = (searchData) => async (dispatch) => {
  try {
    console.log("searchData: ", searchData);
    // const { data } = await api.fetchFoodDiary(searchData);
    const response = await api.fetchFoodDiary(searchData);
    console.log("api response: ", response);
    const { data } = response;
    console.log("data?.data: ", data?.data);
    if (data?.status === "success") {
      dispatch({ type: FOODDIARY_FETCH_ALL, payload: data?.data });
      if (data?.data.length === 0) {
        confirmAlert({
          title: "No Records Found!",
          buttons: [{ label: "Ok", onClick: () => {} }],
        });
        console.log("data?.data === null");
      }
    } else if (data?.status === "error") {
      console.log(data);
      dispatch({ type: FOODDIARY_FETCH_ALL, payload: [] });
    }
  } catch (error) {
    console.log(error);
  }
};
