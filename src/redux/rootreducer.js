import {combineReducers} from "redux";
import todoreducer from "./todoapp/reducer/todoreducer";

const rootreducer = combineReducers({
    todoreducer
})

export default rootreducer;