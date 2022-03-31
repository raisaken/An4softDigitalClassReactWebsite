import rootReducer from "../Reducers/rootReducer";
import {createStore} from "redux"

const store = createStore(rootReducer)

export default store;
