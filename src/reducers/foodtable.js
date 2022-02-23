// import {
//   FOODTABLE_CREATE,
//   FOODTABLE_UPDATE,
//   FOODTABLE_FETCH_ALL,
//   FOODTABLE_DELETE,
// } from "constants/actionTypes";

// const initState = {
//   foodTableRecordsAll: [],
//   updateTable: [],
// };

// const foodTableReducer = (TableData = initState, action) => {
//   switch (action.type) {
//     case FOODTABLE_FETCH_ALL:
//       return { ...TableData, foodTableRecordsAll: action.payload };
//     case FOODTABLE_UPDATE:
//       return { ...TableData, updateFoodTable: action.payload };
//     case FOODTABLE_DELETE:
//       return { ...TableData, deleteRecord: action.payload };
//     default:
//       return TableData;
//   }
// };

// export default foodTableReducer;

import { FOODTABLE } from "constants/actionTypes";

const initState = {
  foodTableRecordsAll: [],
  loading: true,
  errors: null,
};

const foodTableReducer = (TableData = initState, action) => {
  switch (action.type) {
    case FOODTABLE:
      return {
        ...TableData,
        foodTableRecordsAll: action.payload,
        loading: false,
        errors: null,
      };

    default:
      return TableData;
  }
};

export default foodTableReducer;
