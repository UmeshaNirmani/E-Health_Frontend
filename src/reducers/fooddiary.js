import { FOODDIARY_FETCH_ALL } from "../constants/actionTypes";

const initState = {
  foodDiaryRecords: [],
  loading: true,
  errors: null,
};

const foodDiaryReducer = (state = initState, action) => {
  //console.log("redux action: ", action);

  switch (action.type) {
    case FOODDIARY_FETCH_ALL:
      //console.log("state", state);
      return {
        ...state,
        foodDiaryRecords: action.payload,
        loading: false,
        errors: null,
      };

    default:
      return state;
  }
};

export default foodDiaryReducer;
