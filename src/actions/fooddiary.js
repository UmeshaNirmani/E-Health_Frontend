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
