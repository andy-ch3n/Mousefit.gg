import { createSlice } from '@reduxjs/toolkit';

export const quizButtonClicked = createSlice({
  name: 'quizButtonClicked',
  initialState: {
    value: { quizbuttonclicked: false },
  },
  reducers: {
    setClicked: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setClicked } = quizButtonClicked.actions;
export const getClicked = (state) => state.quizButtonClicked.value;

export default quizButtonClicked.reducer;