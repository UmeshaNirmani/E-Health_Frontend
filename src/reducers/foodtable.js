import {
  FOODTABLE_UPDATE,
  FOODTABLE_FETCH_ALL,
  FOODTABLE_DELETE,
} from "constants/actionTypes";

const initState = {
  foodTableRecordsAll: [],
  updateTable: [],
  loading: true,
  errors: null,
};

const foodTableReducer = (state = initState, action) => {
  console.log("redux action: ", action);

  switch (action.type) {
    case FOODTABLE_FETCH_ALL:
      //console.log("Tabledat", state);
      return {
        ...state,
        foodTableRecordsAll: action.payload,
        loading: false,
        errors: null,
      };
    case FOODTABLE_UPDATE:
      return {
        ...state,
        updateFoodTable: action.payload,
        loading: false,
        errors: null,
      };
    case FOODTABLE_DELETE:
      return {
        ...state,
        deleteRecord: action.payload,
        loading: false,
        errors: null,
      };

    default:
      return state;
  }
};

export default foodTableReducer;
