import { AUTH, FETCH_USERS, USER_PROFILE } from "constants/actionTypes";

const initState = {
  authData: [],
  fetchUsers: [],
  userProfile: [],
  loading: true,
  errors: null,
};

const authReducer = (state = initState, action) => {
  //console.log("test", state);
  switch (action.type) {
    case AUTH:
      return {
        ...state,
        authData: action.payload,
        loading: false,
        errors: null,
      };
    case FETCH_USERS:
      return {
        ...state,
        fetchUsers: action.payload,
        loading: false,
        errors: null,
      };
    case USER_PROFILE:
      return {
        ...state,
        userProfile: action.payload,
        loading: false,
        errors: null,
      };
      default:
      return state;
  }
};

export default authReducer;
