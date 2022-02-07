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
      router.push("/user/index");
    }
    if (data?.status === "error") {
      console.log(data);
    }
  } catch (error) {
    console.log("catch error: ", error);
  }
};
