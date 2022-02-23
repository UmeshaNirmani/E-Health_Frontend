import {
  FOODTABLE_CREATE,
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

const foodTableReducer = (TableData = initState, action) => {
  switch (action.type) {
    case FOODTABLE_FETCH_ALL:
      return {
        ...TableData,
        foodTableRecordsAll: action.payload,
        loading: false,
        errors: null,
      };
    case FOODTABLE_UPDATE:
      return {
        ...TableData,
        updateFoodTable: action.payload,
        loading: false,
        errors: null,
      };
    case FOODTABLE_DELETE:
      return {
        ...TableData,
        deleteRecord: action.payload,
        loading: false,
        errors: null,
      };

    default:
      return TableData;
  }
};

export default foodTableReducer;
