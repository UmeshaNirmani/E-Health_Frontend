import {
  FOODTABLE_CREATE,
  FOODTABLE_UPDATE,
  FOODTABLE_FETCH_ALL,
  FOODTABLE_DELETE,
} from "constants/actionTypes";
import * as api from "../api/index.js";
import Lodash from "lodash";
import { confirmAlert } from "react-confirm-alert";
import "assets/css/confirm-alert-custom.css";

export const fetchRecordsAll = () => async (dispatch) => {
  try {
    const { data } = await api.fetchRecordsAll();
    // console.log("resource data", data);
    if (data?.status === "success") {
      dispatch({ type: FOODTABLE_FETCH_ALL, payload: data?.data });
    } else if (data?.status === "error") {
      console.log(data);
    }
  } catch (error) {
    console.log(error);
  }
};

export const createRecords = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.createRecords(formData);
    console.log("record data", data);
    if (data?.status === "success") {
      dispatch({ type: FOODTABLE_CREATE, payload: data?.data });
      confirmAlert({
        message: "Record is saved.",
        buttons: [
          {
            label: "Ok",
            onClick: () => {
              window.location.reload(true);
            },
          },
        ],
      });
    } else if (data?.status === "error") {
      console.log(data);
      confirmAlert({
        message: "Record couldn't save.",
        buttons: [
          {
            label: "Ok",
            onClick: () => {},
          },
        ],
      });
    }
  } catch (error) {
    console.log(error);
    confirmAlert({
      message: "Record couldn't save.",
      buttons: [
        {
          label: "Ok",
          onClick: () => {},
        },
      ],
    });
  }
};

export const updateRecords = (formData) => async (dispatch) => {
  try {
    const response = await api.updateRecords(formData);
    const { data } = response;
    console.log("update resources: ", data);
    if (data?.status === "success") {
      dispatch({ type: FOODTABLE_UPDATE, payload: dispatch });
      confirmAlert({
        message: "Record updated.",
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
      alert(data?.message);
    }
  } catch (error) {
    let errorMessage = error?.response?.data?.message;
    confirmAlert({
      message: errorMessage,
      buttons: [{ label: "Yes", onClick: () => {} }],
    });
    console.log(error);
  }
};

export const deleteRecords = (formData) => async (dispatch) => {
  console.log("formdata", formData);
  try {
    const response = await api.deleteRecords(formData);
    const { data } = response;
    console.log("update records: ", data);
    if (data?.status === "success") {
      dispatch({ type: FOODTABLE_DELETE, payload: dispatch });
      confirmAlert({
        message: "Record deleted.",
        buttons: [
          {
            label: "Ok",
            onClick: () => {
              dispatch(fetchRecordsAll());
            },
          },
        ],
      });
    }
    if (data?.status === "error") {
      console.log(data);
      confirmAlert({
        message: "Oops!, something went wrong. Please try again.",
        buttons: [{ label: "Ok", onClick: () => {} }],
      });
    }
  } catch (error) {
    let errorMessage = error?.response?.data?.message;
    confirmAlert({
      message: errorMessage,
      buttons: [{ label: "Ok", onClick: () => {} }],
    });
    console.log(error);
  }
};
