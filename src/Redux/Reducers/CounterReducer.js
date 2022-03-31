import { INCREMENT, DECREMENT } from "../Actions/CounterAction";

const initialState = {
  initialCount: 0,
};

const simpleReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        initialCount: state.initialCount + 1,
      };
    case DECREMENT:
      return {
        ...state,
        initialCount: state.initialCount - 1,
      };
    default:
      return state;
  }
};

export default simpleReducer;
