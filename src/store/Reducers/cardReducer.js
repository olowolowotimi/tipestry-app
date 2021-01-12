import { HANDLE_CARD_CHANGE } from "../types";

const initialState = {
  level: "firstCard",
};

const DisplayCard = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_CARD_CHANGE:
      return {
        ...state,
        level: action.payload,
      };
    default:
      return state;
  }
};

export default DisplayCard;
