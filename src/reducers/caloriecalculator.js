import { FETCH_FOODS } from "../constants/actionTypes";

const initState = {
  allFoods: [],
  loading: true,
  errors: null,
};

const calorieCalculatorReducer = (FoodName = initState, action) => {
  switch (action.type) {
    case FETCH_FOODS:
      return {
        ...FoodName,
        allFoods: action.payload,
        loading: false,
        errors: null,
      };
    default:
      return FoodName;
  }
};

export default calorieCalculatorReducer;
