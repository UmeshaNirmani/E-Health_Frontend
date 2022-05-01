import { AUTH, FETCH_USERS } from "constants/actionTypes";

const initState = {
  authData: [],
  fetchUsers: [],
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
    case FETCH_USERS:
      // console.log("fetchUsers state", state);
      return {
        ...state,
        fetchUsers: action.payload,
        loading: false,
        errors: null,
      };
    default:
      return state;
  }
};

export default authReducer;
