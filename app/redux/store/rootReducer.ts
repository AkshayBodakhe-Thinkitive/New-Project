import { Reducer, combineReducers } from "@reduxjs/toolkit";
import authReducer from "../../domain/authentication/store/reducers/AuthReducer";
import { AppState } from "./configureStore";


const rootReducer : Reducer<AppState> = combineReducers({
   auth : authReducer
})

export default rootReducer