import { EXAMPLE } from "../actionTypes";

const initialState = {
  content: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case EXAMPLE: {
      const { content } = action.payload;
      return {
        ...state,
        content
      };
    }
    default:
      return state;
  }
}
