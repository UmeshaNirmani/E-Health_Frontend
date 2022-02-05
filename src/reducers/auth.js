import { AUTH } from "constants/actionTypes";

const localAuthData = JSON.parse(localStorage.getItem("userDetails"));

const initState = {
  authData: localAuthData ? localAuthData : {},
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
