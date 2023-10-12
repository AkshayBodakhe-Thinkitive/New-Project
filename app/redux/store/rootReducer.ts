import { Reducer, combineReducers } from "@reduxjs/toolkit";
import authReducer from "../../domain/authentication/store/reducers/AuthReducer";
import { AppState } from "./configureStore";
import screenReducer from "../../common/store/reducers/screenReducer";
import navigationReducer from "../../navigation/store/reducers/NavigationReducer";


const rootReducer : Reducer<AppState> = combineReducers({
   auth : authReducer,
   screen : screenReducer,
   nav : navigationReducer
})

export default rootReducer