import {
  MEDICALHISTORY_CREATE,
  MEDICALHISTORY_FETCH_ALL,
} from "../constants/actionTypes";
import * as api from "../api/index";
import { confirmAlert } from "react-confirm-alert";
import "../assets/css/confirm-alert-custom.css";

export const medicalHistoryCreate = (formData) => async (dispatch) => {
  try {
    console.log("formData: ", formData);
    const { data } = await api.medicalHistoryCreate(formData);
    console.log("api data: ", data);
    if (data?.status === "success") {
      dispatch({ type: MEDICALHISTORY_CREATE, payload: data?.data });
      confirmAlert({
        message: "Record saved.",
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
  } catch (error) {
    let errorMessage = error?.response?.data?.message;
    confirmAlert({
      message: errorMessage,
      buttons: [{ label: "Ok", onClick: () => {} }],
    });
  }
};

export const medicalHistoryFetch = () => async (dispatch) => {
  try {
    const { data } = await api.medicalHistoryFetch();
    //console.log("api data: ", data);
    if (data?.status === "success") {
      dispatch({ type: MEDICALHISTORY_FETCH_ALL, payload: data?.data });
      //console.log("data: ", data?.data);
    }
    if (data?.status === "error") {
      console.log(data);
    }
  } catch (error) {
    console.log(error);
  }
};
