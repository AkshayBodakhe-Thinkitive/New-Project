import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AUTH_REDUCER } from '../../constants/StoreConstants';
import { IKeyValue } from '../../interfaces/IkeyValue';
import { IAuth } from '../../interfaces/AuthInterface';
import { loginAction } from '../async-actions/loginAction';
import { setLoginFormValueAction } from '../actions/setLoginFormValueAction';
import { setResetPasswordEmailAction } from '../actions/setResetPasswordEmailAction';
import { forgotPasswordAction } from '../async-actions/forgotPasswordAction';

const initialState  = {
  isLoggedIn : false,
   loginFormValues : {
     email : '',
     password : '',
   },
   forgotPass : {
    email : ''
   },
   access_token : '',
   loading : false,
}

const AuthReducer = createSlice({
  name: AUTH_REDUCER,
  initialState : initialState,
  reducers: {
    setLoginFormValues: (state : IAuth | any, action:PayloadAction<IKeyValue>) => {
     setLoginFormValueAction(state,action)
    },
    logout : (state: IAuth | any) => {
      state.access_token = ''
    },
    setResetPasswordEmail: (state,action) => {
      setResetPasswordEmailAction(state,action)
    }
  },
  extraReducers : builder => {
    builder.addCase(loginAction.pending,(state)=>{
      state.loading = true
    })
    .addCase(loginAction.fulfilled,(state,action)=>{
      state.loading = false;
      state.access_token = action.payload.access_token;
      state.isLoggedIn = true
    })
    .addCase(loginAction.rejected,(state)=>{
      state.loading = false
    })
    .addCase(forgotPasswordAction.pending,(state)=>{
      state.loading = true
    })
    .addCase(forgotPasswordAction.fulfilled,(state,action)=>{
      state.loading = false;
    })
    .addCase(forgotPasswordAction.rejected,(state)=>{
      state.loading = false
    })
  }
});

export const {
  setLoginFormValues,
  logout,
  setResetPasswordEmail
} = AuthReducer.actions

export default AuthReducer.reducer
