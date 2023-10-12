import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../../../redux/store/configureStore";
import { AUTH_REDUCER } from "../../constants/StoreConstants";
import { login } from "../api/authService";


export const loginAction = createAsyncThunk<any,void,{state:RootState}>(AUTH_REDUCER + '/login',async(_ ,thunkApi)=>{
  
   const {email , password} = thunkApi.getState().auth?.loginFormValues
   const res = await login(email,password)
   console.log(res)
   return res
})