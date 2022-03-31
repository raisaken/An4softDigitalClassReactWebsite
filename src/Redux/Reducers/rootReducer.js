import { combineReducers } from "redux";
import simpleReducer from "./simpleReducer"

const rootReducer = combineReducers({
    counter:simpleReducer
})

export default rootReducer;