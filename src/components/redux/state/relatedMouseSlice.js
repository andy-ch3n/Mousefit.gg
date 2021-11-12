import { createSlice } from '@reduxjs/toolkit';

export const relatedMouse = createSlice({
  name: 'relatedMouse',
  initialState: {
    value: { relatedmouse: [] },
  },
  reducers: {
    setRelatedMouse: (state, action) => {
      state.value = action.payload;
    },
  },
});


export const { setRelatedMouse } = relatedMouse.actions;
export const getRelatedMouse = (state) => state.relatedMouse.value;

export default relatedMouse.reducer;