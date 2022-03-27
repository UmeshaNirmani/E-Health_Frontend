import { MEDICALHISTORY_FETCH_ALL } from "../constants/actionTypes";

const initState = {
  medicalHistoryAllRecords: [],
  loading: true,
  errors: null,
};

const medicalHistoryReducer = (state = initState, action) => {
  //console.log("action", action);
  switch (action.type) {
    case MEDICALHISTORY_FETCH_ALL:
      return {
        ...state,
        medicalHistoryAllRecords: action.payload,
        loading: false,
        errors: null,
      };
    default:
      return state;
  }
};

export default medicalHistoryReducer;
