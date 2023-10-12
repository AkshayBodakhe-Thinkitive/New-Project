import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface NavState {
  currentNav?: string;
}
const initialState = {} as NavState;

const navigationSlice = createSlice({
  name: 'navgation',
  initialState,
  reducers: {
    setCurrentNavAction: (state, action: PayloadAction<string>) => {
      state.currentNav = action.payload;
    },
  },
});

const navigationReducer = navigationSlice.reducer;

export const {setCurrentNavAction} = navigationSlice.actions;

export default navigationReducer;
