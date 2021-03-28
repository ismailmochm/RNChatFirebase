import { combineReducers } from "redux";
import { registerReducer, loginReducer } from "./auth";
import { homeReducer, userReducer } from "./Home";
import {globalReducer} from './global'

const reducer = combineReducers({  
    registerReducer,
    loginReducer,
    globalReducer,
    homeReducer,
})

export default reducer