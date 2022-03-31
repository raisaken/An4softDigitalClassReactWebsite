
import { ADD_COUNT, SUB_COUNT } from "../Actions/SimpleAction"

const initialState = {
  initialCount: 0,
};

const simpleReducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_COUNT:
      return {
        ...state,
        initialCount: state.initialCount + 1,
      };
      case SUB_COUNT:
        return{
          ...state,
          initialCount:state.initialCount-1
        }
        default:
          return state
      }
  
};

export default simpleReducer