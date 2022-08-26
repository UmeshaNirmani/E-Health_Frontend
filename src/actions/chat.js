import { CHAT_CREATE, CHAT_FETCH } from "../constants/actionTypes";
import * as api from "../api/index";

export const chatCreate = (formData) => async (dispatch) => {
  try {
    console.log("formData: ", formData);
    const { data } = await api.chatCreate(formData);
    console.log("api data: ", data);
    if (data?.status === "success") {
      dispatch({ type: CHAT_CREATE, payload: data?.data });
      window.location.reload(true);
      console.log(data, "data");
    }
  } catch (error) {
    console.log(error);
  }
};

export const fetchChat = () => async (dispatch) => {
  try {
    const { data } = await api.fetchChat();
    //console.log("api data: ", data);
    if (data?.status === "success") {
      dispatch({ type: CHAT_FETCH, payload: data?.data });
      //console.log("data: ", data?.data);
    }
    if (data?.status === "error") {
      console.log(data);
    }
  } catch (error) {
    console.log(error);
  }
};
