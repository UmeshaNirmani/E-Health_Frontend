// import {
//   FOODTABLE_CREATE,
//   FOODTABLE_UPDATE,
//   FOODTABLE_FETCH_ALL,
//   FOODTABLE_DELETE,
// } from "constants/actionTypes";
import { FOODTABLE } from "constants/actionTypes.js";
import * as api from "../api/index.js";
import Lodash from "lodash";
import { confirmAlert } from "react-confirm-alert";
import "assets/css/confirm-alert-custom.css";

export const fetchRecordsAll = () => async (dispatch) => {
  try {
    const { data } = await api.fetchRecordsAll();
    // console.log("resource data", data);
    if (data?.status === "success") {
      dispatch({ type: FOODTABLE, payload: data?.data });
    } else if (data?.status === "error") {
      console.log(data);
    }
  } catch (error) {
    console.log(error);
  }
};

// export const createRecords = (formData, history) => async (dispatch) => {
//   try {
//     dispatch({ payload: true });
//     const { data } = await api.createRecords(formData);
//     console.log("resource data", data);
//     if (data?.status === "success") {
//       // dispatch({ type: FOODTABLE_CREATE, payload: data?.data });
//       confirmAlert({
//         message: "Resource is saved.",
//         buttons: [
//           {
//             label: "Ok",
//             onClick: () => {
//               history.goBack();
//             },
//           },
//         ],
//       });
//     } else if (data?.status === "error") {
//       console.log(data);
//       confirmAlert({
//         message: "Resource couldn't save.",
//         buttons: [
//           {
//             label: "Ok",
//             onClick: () => {
//               history.goBack();
//             },
//           },
//         ],
//       });
//     }
//   } catch (error) {
//     console.log(error);
//     confirmAlert({
//       message: "Resource couldn't save.",
//       buttons: [
//         {
//           label: "Ok",
//           onClick: () => {
//             history.goBack();
//           },
//         },
//       ],
//     });
//   }
// };

// export const updateRecords = (formData) => async (dispatch) => {
//   try {
//     dispatch({ payload: true });
//     const response = await api.updateRecords(formData);
//     const { data } = response;
//     console.log("update resources: ", data);
//     if (data?.status === "success") {
//       dispatch({ type: FOODTABLE_UPDATE, payload: dispatch });
//       confirmAlert({
//         message: "Resource updated.",
//         buttons: [
//           {
//             label: "Ok",
//             onClick: () => {
//               window.location.reload(true);
//             },
//           },
//         ],
//       });
//     }
//     if (data?.status === "error") {
//       console.log(data);
//       alert(data?.message);
//     }
//   } catch (error) {
//     let errorMessage = error?.response?.data?.message;
//     confirmAlert({
//       message: errorMessage,
//       buttons: [{ label: "Yes", onClick: () => {} }],
//     });
//     console.log(error);
//   }
// };

// export const deleteRecords = (formData) => async (dispatch) => {
//   console.log("formdata", formData);
//   try {
//     dispatch({ payload: true });

//     const response = await api.deleteRecords(formData);
//     const { data } = response;
//     console.log("update resources: ", data);
//     if (data?.status === "success") {
//       dispatch({ type: FOODTABLE_DELETE, payload: dispatch });
//       confirmAlert({
//         message: "Resource deleted.",
//         buttons: [
//           {
//             label: "Ok",
//             onClick: () => {
//               dispatch(fetchRecordsAll());
//             },
//           },
//         ],
//       });
//     }
//     if (data?.status === "error") {
//       console.log(data);
//       confirmAlert({
//         message: "Oops!, something went wrong. Please try again.",
//         buttons: [{ label: "Ok", onClick: () => {} }],
//       });
//     }
//   } catch (error) {
//     let errorMessage = error?.response?.data?.message;
//     confirmAlert({
//       message: errorMessage,
//       buttons: [{ label: "Yes", onClick: () => {} }],
//     });
//     console.log(error);
//   }
// };
