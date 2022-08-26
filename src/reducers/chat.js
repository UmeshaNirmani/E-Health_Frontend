import { CHAT_FETCH } from "constants/actionTypes";

const initState = {
  chatFetchAll: [],
  loading: true,
  errors: null,
};

const chatReducer = (state = initState, action) => {
  //console.log("redux action: ", action);

  switch (action.type) {
    case CHAT_FETCH:
      //console.log("Tabledat", state);
      return {
        ...state,
        chatFetchAll: action.payload,
        loading: false,
        errors: null,
      };

    default:
      return state;
  }
};

export default chatReducer;
