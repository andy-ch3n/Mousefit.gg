import { createSlice } from "@reduxjs/toolkit";

export const scrapedYoutube = createSlice({
  name: "scrapedYoutube",
  initialState: {
    value: { data: {}, isLoading: true },
  },
  reducers: {
    setScrapedYoutube: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setScrapedYoutube } = scrapedYoutube.actions;
export const getScrapedYoutube = (state) => state.scrapedYoutube.value;

export default scrapedYoutube.reducer;
