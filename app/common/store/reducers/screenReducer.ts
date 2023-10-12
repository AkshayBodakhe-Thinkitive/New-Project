import { createSlice } from '@reduxjs/toolkit'
import { getDeviceOrientation } from '../../../utils/DimensionUtils';

const initialState = {
  orientation : getDeviceOrientation()
}

const screenReducer = createSlice({
  name: 'screen',
  initialState,
  reducers: {
    setOrientation : (state) => {
        state.orientation = getDeviceOrientation()
    }
  }
});

export const {
    setOrientation
} = screenReducer.actions

export default screenReducer.reducer