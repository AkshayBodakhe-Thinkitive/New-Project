import { createAsyncThunk } from "@reduxjs/toolkit";
import { NavigationServiceImpl } from "../../../../navigation/store/services/NavigationService";
import { IAuth } from "../../interfaces/AuthInterface";
import { RootState } from "../../../../redux/store/configureStore";
import { AUTH_REDUCER } from "../../constants/StoreConstants";
import { logout } from "../reducers/AuthReducer";

export const logoutAction = createAsyncThunk<
void,
void,
{state: RootState}
>(AUTH_REDUCER + '/logout',async(_, thunkApi) => {
  thunkApi.dispatch(logout())
  NavigationServiceImpl.getInstance().resetNavToLogin(thunkApi.dispatch)
})

