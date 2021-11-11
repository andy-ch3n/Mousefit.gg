/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const firstName = createSlice({
  name: 'firstName',
  initialState: {
    value: { firstname: false },
  },
  reducers: {
    setName: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setName } = firstName.actions;
export const getName = (state) => state.firstName.value;

export default firstName.reducer;
