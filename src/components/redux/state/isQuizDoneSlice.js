import { createSlice } from '@reduxjs/toolkit';

export const isQuizDone = createSlice({
  name: 'isQuizDone',
  initialState: {
    value: { done: false },
  },
  reducers: {
    setIsQuizDone: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsQuizDone } = isQuizDone.actions;
export const getIsQuizDone = (state) => state.isQuizDone.value;

export default isQuizDone.reducer;