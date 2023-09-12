import { createSlice } from '@reduxjs/toolkit'
import { AUTH_REDUCER } from '../../constants/StoreConstants';

const initialState = {
   isLoggedIn : false
}

const AuthReducer = createSlice({
  name: AUTH_REDUCER,
  initialState,
  reducers: {}
});

export const {} = AuthReducer.actions

export default AuthReducer.reducer
