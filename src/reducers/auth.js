import { AUTH } from "constants/actionTypes";

const initState = {
  authData: [],
  loading: true,
  errors: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case AUTH:
      return {
        ...state,
        authData: action.payload,
        loading: false,
        errors: null,
      };
    default:
      return state;
  }
};

export default authReducer;
