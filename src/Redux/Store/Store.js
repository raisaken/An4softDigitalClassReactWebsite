import rootReducer from "../Rootredux/rootReducer";
import {createStore} from "redux"

const store = createStore(rootReducer)

export default store;
