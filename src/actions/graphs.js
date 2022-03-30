import { FETCH_GRAPH_DATA } from "../constants/actionTypes";
import * as api from "../api/index";

export const fetchGraphData = (formData) => async (dispatch) => {
  try {
    console.log("formData: ", formData);
    const { data } = await api.fetchGraphData(formData);
    console.log("api response: ", data);
    if (data?.status === "success") {
      dispatch({ type: FETCH_GRAPH_DATA, payload: data?.data });
    } else if (data?.status === "error") {
      console.log(data);
      dispatch({ type: FETCH_GRAPH_DATA, payload: [] });
    }
  } catch (error) {
    console.log(error);
  }
};
