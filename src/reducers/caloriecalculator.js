import { FETCH_FOODS } from "../constants/actionTypes";

const initState = {
  allFoods: [],
  loading: true,
  errors: null,
};

const calorieCalculatorReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_FOODS:
      return {
        ...state,
        allFoods: action.payload,
        loading: false,
        errors: null,
      };
    default:
      return state;
  }
};

export default calorieCalculatorReducer;
