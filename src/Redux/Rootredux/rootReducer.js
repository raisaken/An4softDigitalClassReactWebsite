import { combineReducers } from "redux";
import simpleReducer from "../Reducers/CounterReducer"

const rootReducer = combineReducers({
    counter:simpleReducer
})

export default rootReducer;