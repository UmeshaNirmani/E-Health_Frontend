import { FETCH_FOODS } from "../constants/actionTypes";
import * as api from "../api/index.js";

export const fetchAllFoods = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAllFoods();

    if (data?.status === "success") {
      dispatch({ type: FETCH_FOODS, payload: data?.data });
    } else if (data?.status === "error") {
      console.log(data);
    }
  } catch (error) {
    console.log(error);
  }
};
