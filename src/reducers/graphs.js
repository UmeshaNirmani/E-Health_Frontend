import { FETCH_GRAPH_DATA } from "../constants/actionTypes";

const initState = {
  allGraphData: [],
  loading: true,
  errors: null,
};

const graphsReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_GRAPH_DATA:
      return {
        ...state,
        allGraphData: action.payload,
        loading: false,
        errors: null,
      };

    default:
      return state;
  }
};

export default graphsReducer;
