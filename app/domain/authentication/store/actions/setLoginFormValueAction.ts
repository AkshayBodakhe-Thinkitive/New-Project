import { PayloadAction } from "@reduxjs/toolkit";
import { IAuth } from "../../interfaces/AuthInterface";
import { IKeyValue } from "../../interfaces/IkeyValue";

export const setLoginFormValueAction = (state : IAuth | any, action : PayloadAction<IKeyValue>) => {
    const { key, value } = action.payload;
    state.loginFormValues[key] = value;
}