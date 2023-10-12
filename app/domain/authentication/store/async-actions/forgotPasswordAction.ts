import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../../../redux/store/configureStore";
import { AUTH_REDUCER } from "../../constants/StoreConstants";
import { forgotPassword } from "../api/authService";


export const forgotPasswordAction = createAsyncThunk<any,any,{state:RootState}>(AUTH_REDUCER+'/forgotpass',async(email)=>{

    const res = await forgotPassword(email)
    console.log(res)
    return res
})